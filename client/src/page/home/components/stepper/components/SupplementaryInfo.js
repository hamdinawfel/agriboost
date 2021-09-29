import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { displayThirdStep, displayFirstStep } from "../../../actions";

const validationSchema = yup.object({
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
  isCandidateHaveCnss: yup
    .string()
    .oneOf(["لا", "نعم"], "الرجاء التثبت من إدخال الخيار المناسب")
    .required("الرجاء التثبت من إدخال الخيار المناسب"),
  snssDuration: yup
    .string()
    .when("isCandidateHaveCnss", (isCandidateHaveCnss, schema) => {
      if (isCandidateHaveCnss === "لا") {
        return schema;
      } else {
        return schema.required(
          "الرجاء التثبت من إدخال مدة فترة التأجير بالأشهر"
        );
      }
    }),
  cnssId: yup
    .string()
    .matches(
      /^[0-9]{10}$/,
      "الرجاء التثبت من إدخال المعرف الوحيد بالصندوق الوطني للضمان الاجتماعي"
    )
    .when("isCandidateHaveCnss", (isCandidateHaveCnss, schema) => {
      if (isCandidateHaveCnss === "لا") {
        return schema;
      } else {
        return schema.required(
          "الرجاء التثبت من إدخال المعرف الوحيد بالصندوق الوطني للضمان الاجتماعي"
        );
      }
    }),
  isCandidateHavePatente: yup
    .string()
    .oneOf(["لا", "نعم"], "الرجاء التثبت من إدخال الخيار المناسب")
    .required("الرجاء التثبت من إدخال الخيار المناسب"),
  patenteDuration: yup
    .string()
    .when("isCandidateHavePatente", (isCandidateHavePatente, schema) => {
      if (isCandidateHavePatente === "لا") {
        return schema;
      } else {
        return schema.required(
          "الرجاء التثبت من إدخال مدة فعالية المعرف الجبائي  بالأشهر"
        );
      }
    }),
  patenteId: yup
    .string()
    .matches(/^[0-9]{7}$/, "الرجاء التثبت من إدخال المعرف الجبائي")
    .when("isCandidateHavePatente", (isCandidateHavePatente, schema) => {
      if (isCandidateHavePatente === "لا") {
        return schema;
      } else {
        return schema.required("الرجاء التثبت من إدخال المعرف الجبائي");
      }
    }),
  isCandidateHaveAnetiInscription: yup
    .string()
    .oneOf(["لا", "نعم"], "الرجاء التثبت من إدخال الخيار المناسب")
    .required("الرجاء التثبت من إدخال الخيار المناسب"),
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

function SupplementaryInfo(props) {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      edicationalLevel: "",
      lastStadyLevel: "",
      isCandidateHaveCnss: "",
      snssDuration: "",
      cnssId: "",
      isCandidateHavePatente: "",
      patenteDuration: "",
      patenteId: "",
      isCandidateHaveAnetiInscription: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      props.displayThirdStep();
    },
  });
  const handleGoBack = () => {
    props.displayFirstStep();
    window.scrollTo(0, 900);
  };
  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container className={classes.formBox}>
          <Grid item xs={12} md={6} className={classes.item}>
            <TextField
              InputLabelProps={{
                classes: { root: classes.labelRoot, shrink: classes.shrink },
              }}
              style={{ margin: 10, width: "100%" }}
              select
              label='المستوى التعليمي'
              id='edicationalLevel'
              name='edicationalLevel'
              value={formik.values.edicationalLevel}
              onChange={formik.handleChange}
              error={
                formik.touched.edicationalLevel &&
                Boolean(formik.errors.edicationalLevel)
              }
              helperText={
                formik.touched.edicationalLevel &&
                formik.errors.edicationalLevel
              }>
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
                value='مرحلة التعليم الثانوي'
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
          <Grid item xs={12} md={6} className={classes.item}>
            <TextField
              InputLabelProps={{
                classes: { root: classes.labelRoot, shrink: classes.shrink },
              }}
              style={{ margin: 10, width: "100%" }}
              dir='rtl'
              label='تاريخ إنتهاء أو مغادرة الدراسة'
              type='date'
              id='lastStadyLevel'
              name='lastStadyLevel'
              value={formik.values.lastStadyLevel}
              onChange={formik.handleChange}
              error={
                formik.touched.lastStadyLevel &&
                Boolean(formik.errors.lastStadyLevel)
              }
              helperText={
                formik.touched.lastStadyLevel && formik.errors.lastStadyLevel
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.item}>
            <FormControl
              component='fieldset'
              style={{ margin: 10, width: "100%" }}>
              <FormLabel
                component='isCandidateHaveCnss'
                className={classes.checkboxItem}>
                هل سبق و تم تأجيرك من قبل مؤسسة منخرطة بالصندوق الوطني للضمان
                الاجتماعي؟
              </FormLabel>
              <FormHelperText style={{ color: "#ff0000", textAlign: "right" }}>
                {formik.touched.isCandidateHaveCnss &&
                  formik.errors.isCandidateHaveCnss}
              </FormHelperText>
              <RadioGroup
                id='isCandidateHaveCnss'
                name='isCandidateHaveCnss'
                value={formik.touched.isCandidateHaveCnss}
                onChange={formik.handleChange}>
                <FormControlLabel
                  value='لا'
                  control={<Radio color='primary' />}
                  label='لا'
                />
                <FormControlLabel
                  value='نعم'
                  control={<Radio color='primary' />}
                  label='نعم'
                />
              </RadioGroup>
            </FormControl>
            {formik.values.isCandidateHaveCnss === "نعم" ? (
              <TextField
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    shrink: classes.shrink,
                  },
                }}
                className={classes.textField}
                variant='filled'
                label='أدخل مدة فترة التأجير بالأشهر'
                type='number'
                id='snssDuration'
                name='snssDuration'
                value={formik.values.snssDuration}
                onChange={formik.handleChange}
                error={
                  formik.touched.snssDuration &&
                  Boolean(formik.errors.snssDuration)
                }
                helperText={
                  formik.touched.snssDuration && formik.errors.snssDuration
                }
              />
            ) : null}
            {formik.values.isCandidateHaveCnss === "نعم" ? (
              <TextField
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    shrink: classes.shrink,
                  },
                }}
                className={classes.textField}
                variant='filled'
                label='أدخل المعرف الوحيد بالصندوق الوطني للضمان الاجتماعي'
                type='text'
                id='cnssId'
                name='cnssId'
                value={formik.values.cnssId}
                onChange={formik.handleChange}
                error={formik.touched.cnssId && Boolean(formik.errors.cnssId)}
                helperText={formik.touched.cnssId && formik.errors.cnssId}
              />
            ) : null}
          </Grid>

          <Grid item xs={12} sm={6} className={classes.item}>
            <FormControl
              component='fieldset'
              style={{ margin: 10, width: "100%" }}>
              <FormLabel
                component='isCandidateHavePatente'
                className={classes.checkboxItem}>
                هل سبق لك الحصول على بطاقة تعريف جبائية (باتيندة) ؟
              </FormLabel>
              <FormHelperText style={{ color: "#ff0000", textAlign: "right" }}>
                {formik.touched.isCandidateHavePatente &&
                  formik.errors.isCandidateHavePatente}
              </FormHelperText>
              <RadioGroup
                id='isCandidateHavePatente'
                name='isCandidateHavePatente'
                value={formik.touched.isCandidateHavePatente}
                onChange={formik.handleChange}>
                <FormControlLabel
                  value='لا'
                  control={<Radio color='primary' />}
                  label='لا'
                />
                <FormControlLabel
                  value='نعم'
                  control={<Radio color='primary' />}
                  label='نعم'
                />
              </RadioGroup>
            </FormControl>
            {formik.values.isCandidateHavePatente === "نعم" ? (
              <TextField
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    shrink: classes.shrink,
                  },
                }}
                className={classes.textField}
                style={{ marginTop: 30 }}
                variant='filled'
                label='إدخال مدة فعالية المعرف الجبائي  بالأشهر'
                type='number'
                id='patenteDuration'
                name='patenteDuration'
                value={formik.values.patenteDuration}
                onChange={formik.handleChange}
                error={
                  formik.touched.patenteDuration &&
                  Boolean(formik.errors.patenteDuration)
                }
                helperText={
                  formik.touched.patenteDuration &&
                  formik.errors.patenteDuration
                }
              />
            ) : null}
            {formik.values.isCandidateHavePatente === "نعم" ? (
              <TextField
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    shrink: classes.shrink,
                  },
                }}
                className={classes.textField}
                variant='filled'
                label='أدخل المعرف الجبائي'
                type='text'
                id='patenteId'
                name='patenteId'
                value={formik.values.patenteId}
                onChange={formik.handleChange}
                error={
                  formik.touched.patenteId && Boolean(formik.errors.patenteId)
                }
                helperText={formik.touched.patenteId && formik.errors.patenteId}
              />
            ) : null}
          </Grid>
          <Grid item xs={12} sm={6} className={classes.item}>
            <FormControl
              component='fieldset'
              style={{ margin: 10, width: "100%" }}>
              <FormLabel
                component='isCandidateHaveAnetiInscription'
                className={classes.checkboxItem}>
                مسجل بمكتب التشغيل و العمل المستقل
              </FormLabel>
              <FormHelperText style={{ color: "#ff0000", textAlign: "right" }}>
                {formik.touched.isCandidateHaveAnetiInscription &&
                  formik.errors.isCandidateHaveAnetiInscription}
              </FormHelperText>
              <RadioGroup
                id='isCandidateHaveAnetiInscription'
                name='isCandidateHaveAnetiInscription'
                value={formik.touched.isCandidateHaveAnetiInscription}
                onChange={formik.handleChange}>
                <FormControlLabel
                  value='لا'
                  control={<Radio color='primary' />}
                  label='لا'
                />
                <FormControlLabel
                  value='نعم'
                  control={<Radio color='primary' />}
                  label='نعم'
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <div className={classes.btnContainer}>
          <div>
            <Button
              variant='outlined'
              className={classes.prevButton}
              onClick={() => handleGoBack()}>
              تصحيح
            </Button>
            <Button
              variant='contained'
              color='primary'
              type='submit'
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
  displayThirdStep,
  displayFirstStep,
};
export default connect(null, mapActionsToProps)(SupplementaryInfo);
