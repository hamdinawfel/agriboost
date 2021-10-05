import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { sendReclamation } from "../actions";

const validationSchema = yup.object({
  firstName: yup
    .string()
    .matches(
      /^[\u0621-\u064A\u0660-\u0669 ]+$/,
      "الرجاء التثبت من إدخال الإسم باللغة العربية"
    )
    .max(20, "الرجاء عدم تجاوج 20 حرف")
    .required("الرجاء التثبت من إدخال الإسم"),
  lastName: yup
    .string()
    .matches(
      /^[\u0621-\u064A\u0660-\u0669 ]+$/,
      "الرجاء التثبت من إدخال اللقب باللغة العربية"
    )
    .max(20, "الرجاء عدم تجاوج 20 حرف")
    .required("الرجاء التثبت من إدخال اللقب"),
  cin: yup
    .string()
    .matches(/^[0-9]{8}$/, "الرجاء التثبت من رقم بطاقة التعريف الوطنية")
    .required("الرجاء التثبت من رقم بطاقة التعريف الوطنية"),
  phone: yup
    .string()
    .matches(
      /^\d{8}$/,
      "الرجاء التثبت من إدخال رقم الهاتف على النحو التالي: 22013013"
    )
    .required("الرجاء التثبت من إدخال رقم الهاتف"),
  message: yup
    .string()
    .max(500, "الرجاء عدم تجاوج 500 حرف")
    .matches(
      /^[ء-ي0-9  ،؟.]+$/,
      "الرجاء التثبت من إدخال الموضوع باللغة العربية"
    )
    .required("الرجاء التثبت من إدخال الموضوع"),
});
const useStyles = makeStyles((theme) => ({
  paper: {
    marginBottom: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontSize: 18,
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    transition: "0.5s",
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: "#fff",
    },
  },
  item: {
    padding: 15,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  textField: {
    // margin: 10,
    width: "100%",
  },
  labelRoot: {
    right: 0,
    fontSize: 16,
  },
  shrink: {
    transformOrigin: "top right",
  },
}));

function Form(props) {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      cin: "",
      phone: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      props.sendReclamation(values);
    },
  });
  return (
    <Container component='main' maxWidth='sm'>
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container>
            <Grid item xs={12} sm={6} className={classes.item}>
              <TextField
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    shrink: classes.shrink,
                  },
                }}
                className={classes.textField}
                dir='rtl'
                type='text'
                id='lastName'
                name='lastName'
                label='اللقب'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.item}>
              <TextField
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    shrink: classes.shrink,
                  },
                }}
                className={classes.textField}
                dir='rtl'
                type='text'
                id='firstName'
                name='firstName'
                label='الإسم'
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.item}>
              <TextField
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    shrink: classes.shrink,
                  },
                }}
                className={classes.textField}
                dir='rtl'
                type='text'
                id='cin'
                name='cin'
                label='ب٠ت٠و'
                value={formik.values.cin}
                onChange={formik.handleChange}
                error={formik.touched.cin && Boolean(formik.errors.cin)}
                helperText={formik.touched.cin && formik.errors.cin}
              />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.item}>
              <TextField
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    shrink: classes.shrink,
                  },
                }}
                className={classes.textField}
                dir='rtl'
                type='text'
                id='phone'
                name='phone'
                label='الهاتف'
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>
            <Grid item xs={12} sm={12} className={classes.item}>
              <TextField
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    shrink: classes.shrink,
                  },
                }}
                className={classes.textField}
                dir='rtl'
                multiline
                rows={2}
                type='text'
                id='message'
                name='message'
                label='الموضوع'
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}>
            أرسل
          </Button>
          <Grid container>
            <Grid item xs style={{ display: "flex", justifyContent: "end" }}>
              <Link href='/' variant='body2'>
                عودة إلى الصفحة الرئيسة
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  reclamation: state.reclamation,
});

const mapActionsToProps = {
  sendReclamation,
};
export default connect(mapStateToProps, mapActionsToProps)(Form);
