require('dotenv').config()
let express = require('express')
var sslRedirect = require('heroku-ssl-redirect').default;
var cors = require('cors')
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
let helmet = require('helmet');
//Load routes

let app = express();
app.disable("x-powered-by");
app.use(helmet())


const condidateRouter = require("./routes/condidateRouter");
const countRouter = require("./routes/countRouter");
const users = require("./routes/users");

app.use(express.json());
app.use(sslRedirect());

// Connect to MongoDB
// const url = 'mongodb://localhost:27017/moubadiroun'; 
const url = process.env.mongoURI
mongoose
.connect(url, {
useUnifiedTopology: true,
useNewUrlParser: true,
useCreateIndex:true,
useFindAndModify: false 
})
.then(() => console.log('MongoDB successfully connected'))
.catch(err => {
console.log(`DB Connection Error: ${err.message}`);
});
app.use(cors())

// cors middleware
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*',);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,content-type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
// Passport middleware
app.use(passport.initialize());

// Routes
app.use("/condidates", condidateRouter);
app.use("/count", countRouter);
app.use("/users", users);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./client/build'));
  app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
  }
// port
const port = process.env.PORT || 8082;
app.listen(port, ()=> console.log(`Server running on port : ${port}`));
