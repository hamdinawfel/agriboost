import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import MenuItem from "@material-ui/core/MenuItem";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import CircularProgress from "@material-ui/core/CircularProgress";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Alert from "@material-ui/lab/Alert";
//
import Title from "../../../../utils/Title";
import PersonelInfo from "./components/PersonelInfo";
import SupplementaryInfo from "./components/SupplementaryInfo";
//Redux
import { connect } from "react-redux";
import { createCondidat, reset } from "../../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    position: "relative",
    top: -600,
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
  formBox: {
    padding: 10,
    [theme.breakpoints.down("sm")]: {
      padding: 5,
    },
    // background:'#eee'
  },
  labelRoot: {
    right: 25,
    fontSize: 22,
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  staticLabel: {
    right: 25,
    fontSize: 25,
    fontWeight: 600,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  shrink: {
    transformOrigin: "top right",
  },
  textField: {
    margin: 10,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      margin: 10,
    },
  },
  item: {
    padding: 15,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  checkboxItem: {
    marginRight: 25,
    fontSize: 22,
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
}));

function Index(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = useState(false);
  // STEP 1

  const backToFirstStep = () => {
    setActiveStep(0);
    window.scrollTo(0, 900);
  };
  const goToSecondStep = () => {
    setActiveStep(1);
  };

  const handleBackSecondStep = () => {
    setActiveStep(1);
    window.scrollTo(0, 900);
  };
  // STEP 2
  const [address, setAddress] = React.useState("");
  const [addressError, setAddressError] = useState(false);

  const [city, setCity] = React.useState("القيروان");

  const [village, setVillage] = React.useState("");
  const [villageError, setVillageError] = useState(false);

  const [civilStatus, setcivilStatus] = React.useState("");
  const [civilStatusError, setCivilStatusError] = useState(false);

  const [edicationalLevel, setedicationalLevel] = React.useState("");
  const [edicationalLevelError, setEdicationalLevelError] = useState(false);

  const [lastStadyLevel, setlastStadyLevel] = React.useState("");
  const [lastStadyLevelError, setLastStadyLevelError] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleThirdStep = () => {
    if (
      address !== "" &&
      village !== "" &&
      civilStatus !== "" &&
      edicationalLevel !== "" &&
      lastStadyLevel !== "" &&
      phone !== "" &&
      email !== ""
    ) {
      setActiveStep(2);
      setAddressError(false);
      setVillageError(false);
      setCivilStatusError(false);
      setEdicationalLevelError(false);
      setLastStadyLevelError(false);
      setPhoneError(false);
      setEmailError(false);
    }
    if (address === "") {
      setAddressError(true);
    }
    if (village === "") {
      setVillageError(true);
    }
    if (civilStatus === "") {
      setCivilStatusError(true);
    }
    if (edicationalLevel === "") {
      setEdicationalLevelError(true);
    }
    if (lastStadyLevel === "") {
      setLastStadyLevelError(true);
    }
    if (email === "") {
      setEmailError(true);
    }
  };

  // STEP 3
  const [firstCriteria, setFirstCriteria] = useState("");
  const [firstCriteriaError, setFirstCriteriaError] = useState(false);

  const [secondCriteria, setSecondCriteria] = useState("");
  const [secondCriteriaError, setSecondCriteriaError] = useState(false);

  const [thirdCriteria, setThirdCriteria] = useState("");
  const [thirdCriteriaError, setThirdCriteriaError] = useState(false);

  const [fourthCriteria, setFourthCriteria] = useState("");
  const [fourthCriteriaError, setFourthCriteriaError] = useState(false);

  const [fifthCriteria, setFifthCriteria] = useState("");
  const [fifthCriteriaError, setFifthCriteriaError] = useState(false);

  const [sixthCriteria, setSixthCriteria] = useState("");
  const [sixthCriteriaError, setSixthCriteriaError] = useState(false);

  const [seventhCriteria, setSeventhCriteria] = useState("");
  const [seventhCriteriaError, setSeventhCriteriaError] = useState(false);

  const handleLastStep = () => {
    if (
      firstCriteria !== "" &&
      secondCriteria !== "" &&
      thirdCriteria !== "" &&
      fourthCriteria !== "" &&
      fifthCriteria !== "" &&
      sixthCriteria !== "" &&
      seventhCriteria !== ""
    ) {
      setActiveStep(3);
      window.scrollTo(0, 970);
      setFirstCriteriaError(false);
      setSecondCriteriaError(false);
      setThirdCriteriaError(false);
      setFourthCriteriaError(false);
      setFifthCriteriaError(false);
      setSixthCriteriaError(false);
      setSeventhCriteriaError(false);
    }
    if (firstCriteria === "") {
      setFirstCriteriaError(true);
    }
    if (secondCriteria === "") {
      setSecondCriteriaError(true);
    }
    if (thirdCriteria === "") {
      setThirdCriteriaError(true);
    }
    if (fourthCriteria === "") {
      setFourthCriteriaError(true);
    }
    if (fifthCriteria === "") {
      setFifthCriteriaError(true);
    }
    if (sixthCriteria === "") {
      setSixthCriteriaError(true);
    }
    if (seventhCriteria === "") {
      setSeventhCriteriaError(true);
    }
  };

  // BACK TO STEP 2
  const backToSecondStep = () => {
    setActiveStep(2);
    window.scrollTo(0, 1100);
    setOpen(false);
    setChecked("");
    setAccesspted(false);
    props.reset();
  };

  // SEND A FORM
  const [accesspted, setAccesspted] = useState(false);
  const [checked, setChecked] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const criteriaList = [
      { question: "نوع بطاقة العلاج المنتفع بها", answer: firstCriteria },
      {
        question: "البرنامج الوطني لمساعدة العائلات المعوزة المنتفع به",
        answer: secondCriteria,
      },
      {
        question: "أم لإبن مقيم بأحد المراكز المندمجة للشباب و الطفولة",
        answer: thirdCriteria,
      },
      {
        question: "البرنامج الوطني لمساعدة العائلات المعوزة المنتفع به",
        answer: fourthCriteria,
      },
      {
        question: "أبناء أو إخوة على مقاعد الدراسة أو التكوين",
        answer: fifthCriteria,
      },
      {
        question: "مسجل بمكتب التشغيل و العمل المستقل (قبل يوم 25 أكتوبر2019)",
        answer: sixthCriteria,
      },
      { question: "عدد سنوات البطالة", answer: seventhCriteria },
    ];
    const data = {
      address,
      city,
      village,
      civilStatus,
      edicationalLevel,
      lastStadyLevel,
      phone,
      email,
      criteriaList,
    };
    if (accesspted) {
      props.createCondidat(data);
      setOpen(true);
    } else {
      setChecked("accesspet");
    }
  };

  return (
    // <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <Title title='تعمير الجذاذة' />
      <p
        style={{
          color: "#ff0000",
          textAlign: "right",
          margin: "40px 10px 20px 10px",
        }}>
        <span
          style={{
            color: "#fff",
            background: "#ff0000",
            textAlign: "center",
            padding: "2px 15px",
            borderRadius: 2,
            fontWeight: 600,
            marginLeft: 10,
          }}>
          هام جدا
        </span>
        االرجاء تعمير الجذاذة باللغة العربية و بكل دقة، سيتم التثبت من كل
        المعطيات المصرح بها في مراحل الفرز
      </p>
      <div className={classes.stepper} dir='rtl'>
        <Stepper
          activeStep={activeStep}
          orientation='vertical'
          connector={<div style={{ dispaly: "none" }} />}>
          {/*  STEP  1*/}
          <Step
            style={{
              background: "#F9F9F9",
              padding: 15,
              borderRadius: 5,
              marginBottom: 20,
              border: "3px solid #eee",
            }}>
            <StepLabel style={{ marginTop: 20 }}>
              <span className={classes.stepTitle}>تعمير المعطيات الشخصية</span>
            </StepLabel>
            <StepContent>
              <PersonelInfo />
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    variant='outlined'
                    disabled={activeStep === 0}
                    className={classes.prevButton}>
                    تصحيح
                  </Button>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={goToSecondStep}
                    className={classes.nextButton}>
                    أواصل
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
          {/*  STEP  2*/}
          <Step
            style={{
              background: "#F9F9F9",
              padding: 15,
              borderRadius: 5,
              marginBottom: 20,
              border: "3px solid #eee",
            }}>
            <StepLabel style={{ marginTop: 20 }}>
              <span className={classes.stepTitle}>
                تعمير المعطيات التكميلية
              </span>
            </StepLabel>
            <StepContent>
              <SupplementaryInfo />
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    variant='outlined'
                    onClick={backToFirstStep}
                    className={classes.prevButton}>
                    تصحيح
                  </Button>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={handleThirdStep}
                    className={classes.nextButton}>
                    أواصل
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
          {/*  STEP  3*/}
          <Step
            style={{
              background: "#F9F9F9",
              padding: 15,
              borderRadius: 5,
              marginBottom: 20,
              border: "3px solid #eee",
            }}>
            <StepLabel style={{ marginTop: 20 }}>
              <span className={classes.stepTitle}>
                تعمير معطيات عن الحالة الإجتماعية
              </span>
            </StepLabel>
            <StepContent>
              {/* first Criteria  -- المعيار الأول*/}
              <Grid container className={classes.formBox}>
                <Grid item xs={12} md={6} className={classes.item}>
                  <FormControl
                    component='fieldset'
                    style={{ margin: 10, width: "100%" }}>
                    <FormLabel
                      component='legend'
                      style={{
                        fontSize: 22,
                        color: firstCriteriaError ? "#ff0000" : null,
                      }}>
                      نوع بطاقة العلاج المنتفع بها :
                    </FormLabel>
                    <RadioGroup
                      aria-label='gender'
                      name='gender1'
                      value={firstCriteria}
                      onChange={(e) => setFirstCriteria(e.target.value)}>
                      <FormControlLabel
                        value='firstOption'
                        control={<Radio color='primary' />}
                        label='بطاقة العلاج  المجاني'
                      />
                      <FormControlLabel
                        value='secondOption'
                        control={<Radio color='primary' />}
                        label='بطاقة علاج ذات التعريفة المنخفظة'
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                {/* second Criteria  -- المعيار الثاني */}
                <Grid item xs={12} md={6} className={classes.item}>
                  <FormControl
                    component='fieldset'
                    style={{ margin: 10, width: "100%" }}>
                    <FormLabel
                      component='legend'
                      style={{
                        fontSize: 22,
                        color: secondCriteriaError ? "#ff0000" : null,
                      }}>
                      أفراد من العائلة في الكفالة :
                    </FormLabel>
                    <RadioGroup
                      aria-label='gender'
                      name='gender1'
                      value={secondCriteria}
                      onChange={(e) => setSecondCriteria(e.target.value)}>
                      <FormControlLabel
                        value='firstOption'
                        control={<Radio color='primary' />}
                        label='نعم'
                      />
                      <FormControlLabel
                        value='secondOption'
                        control={<Radio color='primary' />}
                        label='لا'
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                {/* third Criteria  -- المعيار الثالث*/}
                <Grid item xs={12} md={6} className={classes.item}>
                  <FormControl
                    component='fieldset'
                    style={{ margin: 10, width: "100%" }}>
                    <FormLabel
                      component='legend'
                      style={{
                        fontSize: 22,
                        color: thirdCriteriaError ? "#ff0000" : null,
                      }}>
                      أم لإبن مقيم بأحد المراكز المندمجة للشباب و الطفولة :
                    </FormLabel>
                    <RadioGroup
                      aria-label='gender'
                      name='gender1'
                      value={thirdCriteria}
                      onChange={(e) => setThirdCriteria(e.target.value)}>
                      <FormControlLabel
                        value='firstOption'
                        control={<Radio color='primary' />}
                        label='نعم'
                      />
                      <FormControlLabel
                        value='secondOption'
                        control={<Radio color='primary' />}
                        label='لا'
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                {/* fourth Criteria  */}
                <Grid item xs={12} md={6} className={classes.item}>
                  <FormControl
                    component='fieldset'
                    style={{ margin: 10, width: "100%" }}>
                    <FormLabel
                      component='legend'
                      style={{
                        fontSize: 22,
                        color: fourthCriteriaError ? "#ff0000" : null,
                      }}>
                      البرنامج الوطني لمساعدة العائلات المعوزة المنتفع به :
                    </FormLabel>
                    <RadioGroup
                      aria-label='gender'
                      name='gender1'
                      value={fourthCriteria}
                      onChange={(e) => setFourthCriteria(e.target.value)}>
                      <FormControlLabel
                        value='firstOption'
                        control={<Radio color='primary' />}
                        label='مكفول سابقا من أحد مراكز الدفاع والإدماج الإجتماعي'
                      />
                      <FormControlLabel
                        value='secondOption'
                        control={<Radio color='primary' />}
                        label='متعهد بك سابقا من أحد المراكز المندمجة للشباب و الطفولة'
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                {/* fifth Criteria  */}
                <Grid item xs={12} md={6} className={classes.item}>
                  <FormControl
                    component='fieldset'
                    style={{ margin: 10, width: "100%" }}>
                    <FormLabel
                      component='legend'
                      style={{
                        fontSize: 22,
                        color: fifthCriteriaError ? "#ff0000" : null,
                      }}>
                      أبناء أو إخوة على مقاعد الدراسة أو التكوين
                    </FormLabel>
                    <RadioGroup
                      aria-label='gender'
                      name='gender1'
                      value={fifthCriteria}
                      onChange={(e) => setFifthCriteria(e.target.value)}>
                      <FormControlLabel
                        value='firstOption'
                        control={<Radio color='primary' />}
                        label='نعم'
                      />
                      <FormControlLabel
                        value='secondOption'
                        control={<Radio color='primary' />}
                        label='لا'
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                {/* sixth Criteria */}
                <Grid item xs={12} md={6} className={classes.item}>
                  <FormControl
                    component='fieldset'
                    style={{ margin: 10, width: "100%" }}>
                    <FormLabel
                      component='legend'
                      style={{
                        fontSize: 22,
                        color: sixthCriteriaError ? "#ff0000" : null,
                      }}>
                      مسجل بمكتب التشغيل و العمل المستقل (قبل يوم 25 أكتوبر2019)
                    </FormLabel>
                    <RadioGroup
                      aria-label='gender'
                      name='gender1'
                      value={sixthCriteria}
                      onChange={(e) => setSixthCriteria(e.target.value)}>
                      <FormControlLabel
                        value='firstOption'
                        control={<Radio color='primary' />}
                        label='نعم'
                      />
                      <FormControlLabel
                        value='secondOption'
                        control={<Radio color='primary' />}
                        label='لا'
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                {/* seventh Criteria */}
                <Grid item xs={12} md={6} className={classes.item}>
                  <TextField
                    select
                    error={seventhCriteriaError}
                    value={seventhCriteria}
                    onChange={(e) => setSeventhCriteria(e.target.value)}
                    style={{ margin: 10, width: "100%" }}
                    label='عدد سنوات البطالة :'
                    InputLabelProps={{
                      classes: {
                        root: classes.labelRoot,
                        shrink: classes.shrink,
                      },
                    }}>
                    <MenuItem value={1} dir='rtl' style={{ fontSize: 20 }}>
                      سنة واحدة
                    </MenuItem>
                    <MenuItem value={2} dir='rtl' style={{ fontSize: 20 }}>
                      سنتان
                    </MenuItem>
                    <MenuItem value={3} dir='rtl' style={{ fontSize: 20 }}>
                      ثلاث سنوات
                    </MenuItem>
                    <MenuItem value={4} dir='rtl' style={{ fontSize: 20 }}>
                      أربع سنوات
                    </MenuItem>
                    <MenuItem value={5} dir='rtl' style={{ fontSize: 20 }}>
                      خمس سنوات
                    </MenuItem>
                    <MenuItem value={6} dir='rtl' style={{ fontSize: 20 }}>
                      ست سنوات
                    </MenuItem>
                    <MenuItem value={7} dir='rtl' style={{ fontSize: 20 }}>
                      سبع سنوات
                    </MenuItem>
                    <MenuItem value={8} dir='rtl' style={{ fontSize: 20 }}>
                      ثمان سنوات
                    </MenuItem>
                    <MenuItem value={9} dir='rtl' style={{ fontSize: 20 }}>
                      تسع سنوات
                    </MenuItem>
                    <MenuItem value={10} dir='rtl' style={{ fontSize: 20 }}>
                      أكثر من عشر سنوات
                    </MenuItem>
                  </TextField>
                </Grid>
              </Grid>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    variant='outlined'
                    onClick={handleBackSecondStep}
                    className={classes.prevButton}>
                    تصحيح
                  </Button>
                  <Button
                    // disabled
                    variant='contained'
                    color='primary'
                    onClick={handleLastStep}
                    className={classes.nextButton}>
                    أواصل
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        </Stepper>
        {activeStep === 3 && (
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
                        color='primary'
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
                  onClick={backToSecondStep}
                  className={classes.prevButton}>
                  تصحيح
                </Button>
                <Button
                  type='submit'
                  disabled={props.condidate.loading}
                  variant='contained'
                  color='primary'
                  className={classes.nextButton}>
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
                تمت عملية التسجيل الأولي عن بعد بنجاح ، هذا الموقع سيمكنك بعد
                نهاية فترة التسجيل من التعرف على النتيجة، حظا موفقا
              </Alert>
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
    // </ThemeProvider>
  );
}
const mapStateToProps = (state) => ({
  condidate: state.condidate,
});

const mapActionsToProps = {
  createCondidat,
  reset,
};
export default connect(mapStateToProps, mapActionsToProps)(Index);
