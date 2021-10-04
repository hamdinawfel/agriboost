const express = require("express");
var User = require("../models/user");
var passport = require("passport");
var authenticate = require("../middlewares/authenticate");
const limiter = require("../middlewares/limiter");
var router = express.Router();

router.post("/signup", limiter, (req, res, next) => {
  User.register(
    new User({ email: req.body.username }),
    req.body.password,
    (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({ err: err });
      } else {
        if (req.body.name) user.name = req.body.name;
        if (req.body.phone) user.phone = req.body.phone;
        user.save((err, user) => {
          if (err) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.json({ err: err });
            return;
          }
          passport.authenticate("local")(req, res, () => {
            var token = authenticate.getToken({ _id: req.user._id });
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json({
              success: true,
              token: token,
              status: "Registration Successful!",
            });
          });
        });
      }
    }
  );
});

router.post("/login", limiter, passport.authenticate("local"), (req, res) => {
  var token = authenticate.getToken({ _id: req.user._id });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({
    success: true,
    token: token,
    status: "You are successfully logged in!",
  });
});

router.get(
  "/:userId",
  authenticate.verifyUser,
  authenticate.verifyAdmin,
  (req, res, next) => {
    User.findById(req.params.userId)
      .then(
        (user) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(user);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  }
);

router.get("/admin/:userId", authenticate.verifyUser, (req, res) => {
  User.findById(req.params.userId, {
    name: 1,
    email: 1,
    admin: 1,
    phone: 1,
    root: 1,
  }).then((user) => {
    if (user && req.user.admin) {
      return res.status(200).json({ user });
    }
    if (!user) {
      return res.status(404).json({ error: "User non trouvé" });
    } else {
      return res
        .status(403)
        .json({ error: "You are not authorized to perform this operation!" });
    }
  });
});

router.get(
  "/",
  authenticate.verifyUser,
  authenticate.verifyRoot,
  (req, res, next) => {
    User.find({}, { salt: 0, hash: 0 })
      .sort({ _id: -1 })
      .then(
        (users) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(users);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  }
);

router.put("/:userId", authenticate.verifyUser, (req, res, next) => {
  User.findById(req.params.userId)
    .then(
      (user) => {
        if (user != null) {
          if (req.body.name) {
            user.name = req.body.name;
          }
          if (req.body.phone) {
            user.phone = req.body.phone;
          }
          user
            .save()
            .then(
              (user) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(user);
              },
              (err) => next(err)
            )
            .catch((err) => next(err));
        } else {
          err = new Error("user " + req.params.userId + " not found");
          err.status = 404;
          return next(err);
        }
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});
router.delete(
  "/:userId",
  authenticate.verifyUser,
  authenticate.verifyRoot,
  (req, res, next) => {
    User.findByIdAndRemove(req.params.userId)
      .then(
        (resp) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(resp);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  }
);

router.post("/change-password", authenticate.verifyUser, (req, res, next) => {
  User.findById(req.user._id).then(
    function (sanitizedUser) {
      if (sanitizedUser) {
        sanitizedUser.setPassword(req.body.newPassword, function () {
          sanitizedUser.save();
          res.status(200).json({ message: "password reset successful" });
        });
      } else {
        res.status(500).json({ newPassword: "This user does not exist" });
      }
    },
    function (err) {
      console.error(err);
    }
  );
});
module.exports = router;
