import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { displaySecondStep } from "../../../actions";

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
  birthDay: yup.string().required("الرجاء التثبت من إدخال تاريخ الولادة"),
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
  sexe: yup
    .string()
    .oneOf(["أنثى", "ذكر"], "الرجاء التثبت من إدخال الجنس")
    .required("الرجاء التثبت من إدخال الجنس"),
  civilStatus: yup
    .string()
    .oneOf(
      ["أعزب", "عزباء", "متزوج", "متزوجة", "مطلق", "مطلقة", "أرمل", "أرملة"],
      "الرجاء التثبت من إدخال الحالة المدنية"
    )
    .required("الرجاء التثبت من إدخال الحالة المدنية"),
  phone: yup
    .string()
    .matches(
      /^\d{8}$/,
      "الرجاء التثبت من إدخال رقم الهاتف على النحو التالي: 22013013"
    )
    .required("الرجاء التثبت من إدخال رقم الهاتف"),
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
  btnContainer: {
    margin: theme.spacing(2),
  },
  prevButton: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontSize: 22,
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  nextButton: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontSize: 22,
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    transition: "0.5s",
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: "#fff",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
}));

function PersonelInfo(props) {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      cin: localStorage.getItem("cin")
        ? JSON.parse(localStorage.getItem("cin"))
        : "",
      confirmCin: localStorage.getItem("confirmCin")
        ? JSON.parse(localStorage.getItem("confirmCin"))
        : "",
      fingerPrint: localStorage.getItem("confirmCin")
        ? JSON.parse(localStorage.getItem("confirmCin"))
        : "",
      confirmFingerPrint: localStorage.getItem("confirmFingerPrint")
        ? JSON.parse(localStorage.getItem("confirmFingerPrint"))
        : "",
      firstName: localStorage.getItem("firstName")
        ? JSON.parse(localStorage.getItem("firstName"))
        : "",
      lastName: localStorage.getItem("lastName")
        ? JSON.parse(localStorage.getItem("lastName"))
        : "",
      birthDay: localStorage.getItem("birthDay")
        ? JSON.parse(localStorage.getItem("birthDay"))
        : "",
      address: localStorage.getItem("address")
        ? JSON.parse(localStorage.getItem("address"))
        : "",
      village: localStorage.getItem("village")
        ? JSON.parse(localStorage.getItem("village"))
        : "",
      city: "القيروان",
      sexe: localStorage.getItem("sexe")
        ? JSON.parse(localStorage.getItem("sexe"))
        : "",
      civilStatus: localStorage.getItem("civilStatus")
        ? JSON.parse(localStorage.getItem("civilStatus"))
        : "",
      phone: localStorage.getItem("phone")
        ? JSON.parse(localStorage.getItem("phone"))
        : "",
      email: localStorage.getItem("email")
        ? JSON.parse(localStorage.getItem("email"))
        : "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      props.displaySecondStep();
      window.scrollTo(0, 900);
      localStorage.setItem("cin", JSON.stringify(values.cin));
      localStorage.setItem("confirmCin", JSON.stringify(values.confirmCin));
      localStorage.setItem("fingerPrint", JSON.stringify(values.fingerPrint));
      localStorage.setItem(
        "confirmFingerPrint",
        JSON.stringify(values.confirmFingerPrint)
      );
      localStorage.setItem("firstName", JSON.stringify(values.firstName));
      localStorage.setItem("lastName", JSON.stringify(values.lastName));
      localStorage.setItem("birthDay", JSON.stringify(values.birthDay));
      localStorage.setItem("address", JSON.stringify(values.address));
      localStorage.setItem("village", JSON.stringify(values.village));
      localStorage.setItem("village", JSON.stringify(values.village));
      localStorage.setItem("sexe", JSON.stringify(values.sexe));
      localStorage.setItem("civilStatus", JSON.stringify(values.civilStatus));
      localStorage.setItem("phone", JSON.stringify(values.phone));
      localStorage.setItem("email", JSON.stringify(values.email));
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
          <Grid item xs={12} md={6} className={classes.item}>
            <TextField
              InputLabelProps={{
                classes: { root: classes.labelRoot, shrink: classes.shrink },
              }}
              style={{ margin: 10, width: "100%" }}
              label='العنوان'
              id='address'
              name='address'
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.item}>
            <TextField
              InputLabelProps={{
                classes: { root: classes.labelRoot, shrink: classes.shrink },
              }}
              style={{ margin: 10, width: "100%" }}
              select
              label='المعتمدية'
              id='village'
              name='village'
              value={formik.values.village}
              onChange={formik.handleChange}
              error={formik.touched.village && Boolean(formik.errors.village)}
              helperText={formik.touched.village && formik.errors.village}>
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
              <MenuItem value='حفوز' dir='rtl' style={{ fontSize: 20 }}>
                حفوز
              </MenuItem>
              <MenuItem value='حاجب العيون ' dir='rtl' style={{ fontSize: 20 }}>
                حاجب العيون
              </MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={6} className={classes.item}>
            <TextField
              InputLabelProps={{
                classes: { root: classes.staticLabel, shrink: classes.shrink },
              }}
              style={{ margin: 10, width: "100%" }}
              disabled
              variant='filled'
              label='ولاية القيروان'
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.item}>
            <TextField
              InputLabelProps={{
                classes: { root: classes.labelRoot, shrink: classes.shrink },
              }}
              style={{ margin: 10, width: "100%" }}
              select
              label='الجنس'
              id='sexe'
              name='sexe'
              value={formik.values.sexe}
              onChange={formik.handleChange}
              error={formik.touched.sexe && Boolean(formik.errors.sexe)}
              helperText={formik.touched.sexe && formik.errors.sexe}>
              <MenuItem value='أنثى' dir='rtl' style={{ fontSize: 20 }}>
                أنثى
              </MenuItem>
              <MenuItem value='ذكر' dir='rtl' style={{ fontSize: 20 }}>
                ذكر
              </MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={6} className={classes.item}>
            <TextField
              InputLabelProps={{
                classes: { root: classes.labelRoot, shrink: classes.shrink },
              }}
              style={{ margin: 10, width: "100%" }}
              select
              disabled={formik.values.sexe === ""}
              label='الحالة المدنية'
              id='civilStatus'
              name='civilStatus'
              value={formik.values.civilStatus}
              onChange={formik.handleChange}
              error={
                formik.touched.civilStatus && Boolean(formik.errors.civilStatus)
              }
              helperText={
                formik.touched.civilStatus && formik.errors.civilStatus
              }>
              {formik.values.sexe === "ذكر" ? (
                <MenuItem value='أعزب' dir='rtl' style={{ fontSize: 20 }}>
                  أعزب
                </MenuItem>
              ) : (
                <MenuItem value='عزباء' dir='rtl' style={{ fontSize: 20 }}>
                  عزباء
                </MenuItem>
              )}

              {formik.values.sexe === "ذكر" ? (
                <MenuItem value='متزوج' dir='rtl' style={{ fontSize: 20 }}>
                  متزوج
                </MenuItem>
              ) : (
                <MenuItem value='متزوجة' dir='rtl' style={{ fontSize: 20 }}>
                  متزوجة
                </MenuItem>
              )}

              {formik.values.sexe === "ذكر" ? (
                <MenuItem value='مطلق' dir='rtl' style={{ fontSize: 20 }}>
                  مطلق
                </MenuItem>
              ) : (
                <MenuItem value='مطلقة' dir='rtl' style={{ fontSize: 20 }}>
                  مطلقة
                </MenuItem>
              )}

              {formik.values.sexe === "ذكر" ? (
                <MenuItem value='أرمل' dir='rtl' style={{ fontSize: 20 }}>
                  أرمل
                </MenuItem>
              ) : (
                <MenuItem value='أرملة' dir='rtl' style={{ fontSize: 20 }}>
                  أرملة
                </MenuItem>
              )}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6} className={classes.item}>
            <TextField
              InputLabelProps={{
                classes: { root: classes.labelRoot, shrink: classes.shrink },
              }}
              style={{ margin: 10, width: "100%" }}
              dir='rtl'
              label='الهاتف'
              type='tel'
              id='phone'
              name='phone'
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.item}>
            <TextField
              InputLabelProps={{
                classes: { root: classes.labelRoot, shrink: classes.shrink },
              }}
              style={{ margin: 10, width: "100%" }}
              label='عنوان البريد الإلكتروني'
              type='email'
              id='email'
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
        </Grid>
        <div className={classes.btnContainer}>
          <div>
            <Button
              variant='contained'
              color='primary'
              type='submit'
              // onClick={goToSecondStep}
              className={classes.nextButton}>
              أواصل
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
const mapActionsToProps = {
  displaySecondStep,
};
export default connect(null, mapActionsToProps)(PersonelInfo);
