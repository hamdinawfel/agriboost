import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

import setLocalStorage from "../utils/setLocalStorage";

const validationSchema = yup.object({
  cin: yup
    .string()
    .matches(/^[0-9]{8}$/, "الرجاء التثبت من رقم بطاقة التعريف الوطنية")
    .required("الرجاء التثبت من رقم بطاقة التعريف الوطنية"),
  confirmCin: yup
    .string()
    .oneOf([yup.ref("cin"), null], "الرجاء التثبت من رقم بطاقة التعريف الوطنية")
    .required("الرجاء التثبت من رقم بطاقة التعريف الوطنية"),
  fingerPrint: yup
    .string()
    .matches(/^[0-9]{8}$/, "الرجاء التثبت من رقم البصمة")
    .required("الرجاء التثبت من رقم البصمة"),
  confirmFingerPrint: yup
    .string()
    .oneOf([yup.ref("fingerPrint"), null], "الرجاء التثبت من رقم البصمة")
    .required("الرجاء التثبت من رقم البصمة"),
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
  sexe: yup
    .string()
    .oneOf(["أنثى", "ذكر"], "الرجاء التثبت من إدخال الجنس")
    .required("الرجاء التثبت من إدخال الجنس"),
  birthDay: yup.string().required("الرجاء التثبت من إدخال تاريخ الولادة"),
});

const useStyles = makeStyles((theme) => ({
  formBox: {
    padding: 10,
    [theme.breakpoints.down("sm")]: {
      padding: 5,
    },
  },
  item: {
    padding: 15,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  textField: {
    margin: 10,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      margin: 10,
    },
  },
  labelRoot: {
    right: 25,
    fontSize: 22,
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  shrink: {
    transformOrigin: "top right",
  },
  checkboxItem: {
    marginRight: 20,
    fontSize: 22,
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
}));
function PersonelInfo() {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      cin: "",
      confirmCin: "",
      fingerPrint: "",
      confirmFingerPrint: "",
      firstName: "",
      lastName: "",
      sexe: "",
      birthDay: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLocalStorage("personelInfo", values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Grid container className={classes.formBox}>
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
              label='رقم بطاقة التعريف الوطنية'
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
              type='text'
              id='confirmCin'
              name='confirmCin'
              label='تأكيد رقم بطاقة التعريف الوطنية'
              value={formik.values.confirmCin}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmCin && Boolean(formik.errors.confirmCin)
              }
              helperText={formik.touched.confirmCin && formik.errors.confirmCin}
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
              style={{ margin: 10, width: "100%" }}
              type='text'
              id='fingerPrint'
              name='fingerPrint'
              label='رقم البصمة'
              value={formik.values.fingerPrint}
              onChange={formik.handleChange}
              error={
                formik.touched.fingerPrint && Boolean(formik.errors.fingerPrint)
              }
              helperText={
                formik.touched.fingerPrint && formik.errors.fingerPrint
              }
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
              style={{ margin: 10, width: "100%" }}
              type='text'
              id='confirmFingerPrint'
              name='confirmFingerPrint'
              label=' تأكيد رقم البصمة'
              value={formik.values.confirmFingerPrint}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmFingerPrint &&
                Boolean(formik.errors.confirmFingerPrint)
              }
              helperText={
                formik.touched.confirmFingerPrint &&
                formik.errors.confirmFingerPrint
              }
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
              style={{ margin: 10, width: "100%" }}
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
              style={{ margin: 10, width: "100%" }}
              type='text'
              id='lastName'
              name='lastName'
              label='اللقب'
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.item}>
            <FormControl
              component='fieldset'
              style={{ margin: 10, width: "100%" }}>
              <FormLabel
                required
                component='sexe'
                className={classes.checkboxItem}>
                الجنس
              </FormLabel>
              <FormHelperText style={{ color: "#ff0000", textAlign: "right" }}>
                {formik.touched.sexe && formik.errors.sexe}
              </FormHelperText>
              <RadioGroup
                id='sexe'
                name='sexe'
                value={formik.touched.sexe}
                onChange={formik.handleChange}>
                <FormControlLabel
                  value='أنثى'
                  control={<Radio color='primary' />}
                  label='أنثى'
                />
                <FormControlLabel
                  value='ذكر'
                  control={<Radio color='primary' />}
                  label='ذكر'
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.item} dir='rtl'>
            <TextField
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                  shrink: classes.shrink,
                },
              }}
              className={classes.textField}
              style={{ margin: 10, width: "100%" }}
              dir='rtl'
              type='date'
              id='birthDay'
              name='birthDay'
              label='تاريخ الولادة'
              value={formik.values.birthDay}
              onChange={formik.handleChange}
              error={formik.touched.birthDay && Boolean(formik.errors.birthDay)}
              helperText={formik.touched.birthDay && formik.errors.birthDay}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default PersonelInfo;
