import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";

const validationSchema = yup.object({
  address: yup
    .string()
    .matches(
      /^[\u0621-\u064A\u0660-\u0669 ]+$/,
      "الرجاء التثبت من إدخال العنوان باللغة العربية"
    )
    .required("الرجاء التثبت من إدخال العنوان"),
  village: yup
    .string()
    .oneOf(
      ["القيروان الشمالية", "القيروان الجنوبية", "حاجب العيون", "حفوز"],
      "الرجاء التثبت من إدخال المعتمدية"
    )
    .required("الرجاء التثبت من إدخال المعتمدية"),
  civilStatus: yup
    .string()
    .oneOf(
      ["أعزب / عزباء", "متزوج / متزوجة", "مطلق / مطلقة", "أرمل / أرملة"],
      "الرجاء التثبت من إدخال الحالة المدنية"
    )
    .required("الرجاء التثبت من إدخال الحالة المدنية"),
  edicationalLevel: yup
    .string()
    .oneOf(
      [
        "مرحلة التعليم الإبتدائي",
        "مرحلة التعليم الإعدادي",
        "مرحلة التعليم الثانوي",
        "مرحلة التعليم الجامعي",
      ],
      "الرجاء التثبت من إدخال المستوى التعليمي"
    )
    .required("الرجاء التثبت من إدخال المستوى التعليمي"),
  lastStadyLevel: yup
    .string()
    .required("الرجاء التثبت من إدخال تاريخ آخر مستوى تعليمي"),
  phone: yup
    .string()
    .matches(
      /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/,
      "الرجاء التثبت من إدخال من رقم الهاتف"
    )
    .required("Required"),
  email: yup
    .string("الرجاء التثبت من إدخال العنوان البريد الإلكتروني")
    .email("الرجاء التثبت من إدخال العنوان البريد الإلكتروني")
    .required("الرجاء التثبت من إدخال العنوان البريد الإلكتروني"),
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
function SupplementaryInfo() {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      address: "",
      village: "",
      city: "القيروان",
      civilStatus: "",
      edicationalLevel: "",
      lastStadyLevel: "",
      phone: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        {/* <TextField
          fullWidth
          id='email'
          name='email'
          label='Email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        /> */}

        <Grid container className={classes.formBox}>
          <Grid item xs={12} md={4} className={classes.item}>
            <TextField
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                  shrink: classes.shrink,
                },
              }}
              style={{ margin: 10, width: "100%" }}
              label='العنوان'
              multiline
              rowsMax={3}
              id='address'
              name='address'
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>

          <Grid item xs={12} md={4} className={classes.item}>
            <FormControl
              error={formik.touched.village && Boolean(formik.errors.village)}>
              <FormHelperText>
                {formik.touched.village && formik.errors.village}
              </FormHelperText>
              <Select
                label='المعتمدية'
                id='village'
                name='village'
                value={formik.values.village}
                onChange={formik.handleChange}>
                <MenuItem
                  value='القيروان الشمالية'
                  dir='rtl'
                  style={{ fontSize: 20 }}>
                  القيروان الشمالية
                </MenuItem>
                <MenuItem
                  value='القيروان الجنوبية'
                  dir='rtl'
                  style={{ fontSize: 20 }}>
                  القيروان الجنوبية
                </MenuItem>
                <MenuItem
                  value='حاجب العيون '
                  dir='rtl'
                  style={{ fontSize: 20 }}>
                  حاجب العيون
                </MenuItem>
                <MenuItem value='حفوز' dir='rtl' style={{ fontSize: 20 }}>
                  حفوز
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={4} className={classes.item}>
            <TextField
              InputLabelProps={{
                classes: {
                  root: classes.staticLabel,
                  shrink: classes.shrink,
                },
              }}
              style={{ margin: 10, width: "100%" }}
              label='ولاية القيروان'
              variant='filled'
              disabled
            />
          </Grid>

          <Grid item xs={12} md={4} className={classes.item}>
            <FormControl
              error={
                formik.touched.civilStatus && Boolean(formik.errors.civilStatus)
              }>
              <FormHelperText>
                {formik.touched.civilStatus && formik.errors.civilStatus}
              </FormHelperText>
              <Select
                label='الحالة المدنية'
                id='civilStatus'
                name='civilStatus'
                value={formik.values.civilStatus}
                onChange={formik.handleChange}>
                <MenuItem
                  value='أعزب / عزباء'
                  dir='rtl'
                  style={{ fontSize: 20 }}>
                  أعزب / عزباء
                </MenuItem>
                <MenuItem
                  value='متزوج / متزوجة'
                  dir='rtl'
                  style={{ fontSize: 20 }}>
                  متزوج / متزوجة
                </MenuItem>
                <MenuItem
                  value='مطلق / مطلقة'
                  dir='rtl'
                  style={{ fontSize: 20 }}>
                  مطلق / مطلقة
                </MenuItem>
                <MenuItem
                  value='أرمل / أرملة'
                  dir='rtl'
                  style={{ fontSize: 20 }}>
                  أرمل / أرملة
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* <Grid item xs={12} md={4} className={classes.item}>
            <TextField
              select
              error={edicationalLevelError}
              value={edicationalLevel}
              onChange={(e) => setedicationalLevel(e.target.value)}
              style={{ margin: 10, width: "100%" }}
              label='المستوى التعليمي'
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                  shrink: classes.shrink,
                },
              }}>
              <MenuItem
                value='مرحلة التعليم الإبتدائي'
                dir='rtl'
                style={{ fontSize: 20 }}>
                مرحلة التعليم الإبتدائي
              </MenuItem>
              <MenuItem
                value='مرحلة التعليم الإعدادي'
                dir='rtl'
                style={{ fontSize: 20 }}>
                مرحلة التعليم الإعدادي
              </MenuItem>
              <MenuItem
                value=' مرحلة التعليم الثانوي'
                dir='rtl'
                style={{ fontSize: 20 }}>
                مرحلة التعليم الثانوي
              </MenuItem>
              <MenuItem
                value='مرحلة التعليم الجامعي'
                dir='rtl'
                style={{ fontSize: 20 }}>
                مرحلة التعليم الجامعي
              </MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={4} className={classes.item}>
            <TextField
              error={lastStadyLevelError}
              value={lastStadyLevel}
              onChange={(e) => setlastStadyLevel(e.target.value)}
              id='date'
              dir='rtl'
              style={{ margin: 10, width: "100%" }}
              label='تاريخ آخر مستوى تعليمي'
              type='date'
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                  shrink: classes.shrink,
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={4} className={classes.item}>
            <TextField
              id='tel'
              style={{ margin: 10, width: "100%" }}
              label='الهاتف'
              type='tel'
              error={phoneError}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                  shrink: classes.shrink,
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={4} className={classes.item}>
            <TextField
              id='email'
              style={{ margin: 10, width: "100%" }}
              error={emailError}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label='عنوان البريد الإلكتروني'
              type='email'
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                  shrink: classes.shrink,
                },
              }}
            />
          </Grid> */}
        </Grid>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapActionsToProps = {};
export default connect(mapStateToProps, mapActionsToProps)(SupplementaryInfo);
