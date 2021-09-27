import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});

const useStyles = makeStyles((theme) => ({
  root: {},
}));
function SocilalInfo() {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id='email'
          name='email'
          label='Email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapActionsToProps = {};
export default connect(mapStateToProps, mapActionsToProps)(SocilalInfo);
