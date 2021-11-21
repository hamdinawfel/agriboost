import React, { useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

import Title from "../../../../utils/Title";
import PersonelInfo from "./components/PersonelInfo";
import SupplementaryInfo from "./components/SupplementaryInfo";
import SocilalInfo from "./components/SocilalInfo";
import RegistrationReceipt from "./components/RegistrationReceipt";

import { connect } from "react-redux";
import { createCondidat, reset, displayThirdStep } from "../../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    top: -700,
    padding: 100,
    [theme.breakpoints.down("md")]: {
      top: -500,
      padding: 10,
    },
    [theme.breakpoints.down("sm")]: {
      top: "-50px",
      width: "100%",
      padding: 0,
    },
  },
  stepper: {
    width: "100%",
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
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  stepTitle: {
    marginRight: 20,
    marginTop: 20,
    fontWeight: 600,
    fontSize: 25,
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  checkboxItem: {
    marginRight: 25,
    fontSize: 22,
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  noteWarning: {
    color: "#fff",
    background: "#ff0000",
    textAlign: "center",
    padding: "2px 15px",
    borderRadius: 2,
    fontWeight: 600,
    marginLeft: 10,
  },
  warningText: {
    color: "#ff0000",
    textAlign: "right",
    margin: "40px 10px 20px 10px",
  },
  step: {
    background: "#F9F9F9",
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    border: "3px solid #eee",
  },
}));

function Index(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleGoBack = () => {
    props.displayThirdStep();
    window.scrollTo(0, 900);
  };

  const [accesspted, setAccesspted] = useState(false);
  const [checked, setChecked] = useState("");

  const handleSendCandidate = () => {
    if (accesspted) {
      props.createCondidat();
      setOpen(true);
    } else {
      setChecked("accesspet");
    }
  };

  return (
    <div className={classes.root}>
      <Title title='تعمير الجذاذة' />
      <p className={classes.warningText}>
        <span className={classes.noteWarning}>هام جدا</span>
        إن التسجيل في هذه المنصة نهائي، الرجاء التثبت من المعطيات المدرجة قبل
        تأكيد التسجيل
      </p>
      <div className={classes.stepper} dir='rtl'>
        <Stepper
          activeStep={props.condidate.activeStep}
          orientation='vertical'
          connector={<div style={{ dispaly: "none" }} />}>
          {/*  STEP  1*/}
          <Step className={classes.step}>
            <StepLabel style={{ marginTop: 20 }}>
              <span className={classes.stepTitle}>تعمير المعطيات الشخصية</span>
            </StepLabel>
            <StepContent>
              <PersonelInfo />
            </StepContent>
          </Step>
          {/*  STEP  2*/}
          <Step className={classes.step}>
            <StepLabel style={{ marginTop: 20 }}>
              <span className={classes.stepTitle}>
                تعمير المعطيات التكميلية
              </span>
            </StepLabel>
            <StepContent>
              <SupplementaryInfo />
            </StepContent>
          </Step>
          {/*  STEP  3*/}
          <Step className={classes.step}>
            <StepLabel style={{ marginTop: 20 }}>
              <span className={classes.stepTitle}>
                تعمير معطيات عن الحالة الإجتماعية
              </span>
            </StepLabel>
            <StepContent>
              <SocilalInfo />
            </StepContent>
          </Step>
        </Stepper>
        {props.condidate.activeStep === 3 && (
          <Paper square elevation={0} className={classes.resetContainer}>
            {props.condidate.success === "" ? (
              <React.Fragment>
                <div style={{ display: "flex", margin: "-20px 0 30px 0" }}>
                  <FormControlLabel
                    style={{ marginLeft: 10 }}
                    control={
                      <Checkbox
                        color={
                          checked === "accesspet" ? "secondary" : "primary"
                        }
                        checked={accesspted}
                        onChange={() => setAccesspted(!accesspted)}
                        name='checkedB'
                      />
                    }
                  />
                  <Typography
                    color={checked === "accesspet" ? "secondary" : "#101F25"}
                    style={{ fontSize: "20px" }}>
                    أصرح على شرفي وأكد بأن المعطيات التي صرحت بها صحيحة وإن ثبوت
                    عكس ذلك سيؤدي إلى رفض مطلبي بصفة آلية
                  </Typography>
                </div>
                <Button
                  variant='outlined'
                  onClick={handleGoBack}
                  className={classes.prevButton}>
                  تصحيح
                </Button>
                <Button
                  disabled={props.condidate.loading}
                  variant='contained'
                  color='primary'
                  className={classes.nextButton}
                  onClick={handleSendCandidate}>
                  {props.condidate.loading ? (
                    <CircularProgress
                      size={25}
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        verticalAlign: "middle",
                        margin: "3px 20px",
                      }}
                    />
                  ) : (
                    <span>تسجيل</span>
                  )}
                </Button>
              </React.Fragment>
            ) : null}
            {props.condidate.success === "success" && open ? (
              <Alert
                variant='filled'
                severity='success'
                style={{ marginTop: 20 }}>
                تمت عملية التسجيل بنجاح، موفقا حظا٠
              </Alert>
            ) : null}
            {props.condidate.success === "success" && open ? (
              <RegistrationReceipt />
            ) : null}
            {props.condidate.success === "fail" && open ? (
              <Alert
                variant='filled'
                severity='error'
                style={{ marginTop: 20 }}>
                هذه العملية غير مسموح بها، لقد سبق وتم التسجيل
              </Alert>
            ) : null}
          </Paper>
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  condidate: state.condidate,
});

const mapActionsToProps = {
  createCondidat,
  reset,
  displayThirdStep,
};
export default connect(mapStateToProps, mapActionsToProps)(Index);
