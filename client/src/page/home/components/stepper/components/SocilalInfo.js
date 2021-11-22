import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { connect } from "react-redux";
import { displayLastStep, displaySecondStep } from "../../../actions";

const validationSchema = yup.object({
  candidateTreatmentCard: yup
    .string()
    .oneOf(
      ["بطاقة علاج ذات التعريفة المنخفظة", "بطاقة العلاج المجاني"],
      "الرجاء التثبت من إدخال نوع بطاقة العلاج المنتفع بها"
    )
    .required("الرجاء التثبت من إدخال الخيار المناسب"),
  isCandidateHaveChildren: yup
    .string()
    .oneOf(["لا", "نعم"], "الرجاء التثبت من إدخال الخيار المناسب")
    .required("الرجاء التثبت من إدخال الخيار المناسب"),
  isCandidateHaveSiblings: yup
    .string()
    .oneOf(["لا", "نعم"], "الرجاء التثبت من إدخال الخيار المناسب")
    .required("الرجاء التثبت من إدخال الخيار المناسب"),
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

function SocilalInfo(props) {
  const classes = useStyles();
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("xs"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  const formik = useFormik({
    initialValues: {
      candidateTreatmentCard: localStorage.getItem("candidateTreatmentCard")
        ? JSON.parse(localStorage.getItem("candidateTreatmentCard"))
        : "",
      isCandidateHaveChildren: localStorage.getItem("isCandidateHaveChildren")
        ? JSON.parse(localStorage.getItem("isCandidateHaveChildren"))
        : "",
      isCandidateHaveSiblings: localStorage.getItem("isCandidateHaveSiblings")
        ? JSON.parse(localStorage.getItem("isCandidateHaveSiblings"))
        : "",
      isCandidateHaveAnetiInscription: localStorage.getItem(
        "isCandidateHaveAnetiInscription"
      )
        ? JSON.parse(localStorage.getItem("isCandidateHaveAnetiInscription"))
        : "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      props.displayLastStep();
      if (xs || sm) {
        window.scrollTo(0, 2300);
      } else {
        window.scrollTo(0, 1600);
      }
      localStorage.setItem(
        "candidateTreatmentCard",
        JSON.stringify(values.candidateTreatmentCard)
      );
      localStorage.setItem(
        "isCandidateHaveChildren",
        JSON.stringify(values.isCandidateHaveChildren)
      );
      localStorage.setItem(
        "isCandidateHaveSiblings",
        JSON.stringify(values.isCandidateHaveSiblings)
      );
      localStorage.setItem(
        "isCandidateHaveAnetiInscription",
        JSON.stringify(values.isCandidateHaveAnetiInscription)
      );
    },
  });
  const handleGoBack = () => {
    props.displaySecondStep();
    if (xs || sm) {
      window.scrollTo(0, 2200);
    } else {
      window.scrollTo(0, 1600);
    }
  };
  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container className={classes.formBox}>
          <Grid item xs={12} sm={6} className={classes.item}>
            <FormControl
              component='fieldset'
              style={{ margin: 10, width: "100%" }}>
              <FormLabel
                component='candidateTreatmentCard'
                className={classes.checkboxItem}>
                نوع بطاقة العلاج المنتفع بها :
              </FormLabel>
              <FormHelperText style={{ color: "#ff0000", textAlign: "right" }}>
                {formik.touched.candidateTreatmentCard &&
                  formik.errors.candidateTreatmentCard}
              </FormHelperText>
              <RadioGroup
                id='candidateTreatmentCard'
                name='candidateTreatmentCard'
                value={formik.values.candidateTreatmentCard}
                onChange={formik.handleChange}>
                <FormControlLabel
                  value='بطاقة العلاج المجاني'
                  control={<Radio color='primary' />}
                  label='بطاقة العلاج  المجاني'
                />
                <FormControlLabel
                  value='بطاقة علاج ذات التعريفة المنخفظة'
                  control={<Radio color='primary' />}
                  label='بطاقة علاج ذات التعريفة المنخفظة'
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.item}>
            <FormControl
              component='fieldset'
              style={{ margin: 10, width: "100%" }}>
              <FormLabel
                component='isCandidateHaveChildren'
                className={classes.checkboxItem}>
                أب أو أم لأبناء على مقاعد الدراسة:
              </FormLabel>
              <FormHelperText style={{ color: "#ff0000", textAlign: "right" }}>
                {formik.touched.isCandidateHaveChildren &&
                  formik.errors.isCandidateHaveChildren}
              </FormHelperText>
              <RadioGroup
                id='isCandidateHaveChildren'
                name='isCandidateHaveChildren'
                value={formik.values.isCandidateHaveChildren}
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
          <Grid item xs={12} sm={6} className={classes.item}>
            <FormControl
              component='fieldset'
              style={{ margin: 10, width: "100%" }}>
              <FormLabel
                component='isCandidateHaveSiblings'
                className={classes.checkboxItem}>
                هل لديك إخوة بأعمار دون 18 سنة :
              </FormLabel>
              <FormHelperText style={{ color: "#ff0000", textAlign: "right" }}>
                {formik.touched.isCandidateHaveSiblings &&
                  formik.errors.isCandidateHaveSiblings}
              </FormHelperText>
              <RadioGroup
                id='isCandidateHaveSiblings'
                name='isCandidateHaveSiblings'
                value={formik.values.isCandidateHaveSiblings}
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
          <Grid item xs={12} sm={6} className={classes.item}>
            <FormControl
              component='fieldset'
              style={{ margin: 10, width: "100%" }}>
              <FormLabel
                component='isCandidateHaveAnetiInscription'
                className={classes.checkboxItem}>
                هل قمت بالتسجيل لدى مكتب التشغيل و العمل المستقل؟
              </FormLabel>
              <FormHelperText style={{ color: "#ff0000", textAlign: "right" }}>
                {formik.touched.isCandidateHaveAnetiInscription &&
                  formik.errors.isCandidateHaveAnetiInscription}
              </FormHelperText>
              <RadioGroup
                id='isCandidateHaveAnetiInscription'
                name='isCandidateHaveAnetiInscription'
                value={formik.values.isCandidateHaveAnetiInscription}
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
  displayLastStep,
  displaySecondStep,
};
export default connect(null, mapActionsToProps)(SocilalInfo);
