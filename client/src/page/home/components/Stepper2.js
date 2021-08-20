import React , { useState } from 'react';
//MUI
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import MenuItem from '@material-ui/core/MenuItem';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Alert from '@material-ui/lab/Alert';
//
import Title from '../../../utils/Title'

//Redux
import { connect } from 'react-redux';
import { createCondidat, reset} from '../actions';
const theme = createMuiTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
  });

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    position:'relative',
    top:-600,
    padding:100,
    [theme.breakpoints.down('md')]: {
      top:-500,
       padding:10
      },
  [theme.breakpoints.down('sm')]: {
      top:'-50px',
      width:'100%',
     padding:0
      
    },
  },
  stepper: {
    width: '100%',
  },

  prevButton: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontSize:22,
    [theme.breakpoints.down('sm')]: {
      fontSize:18,
      },
  },
  nextButton: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontSize:22,
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    border:`1px solid ${theme.palette.primary.main}`,
    transition: '0.5s',
    '&:hover': {
        color: theme.palette.primary.main,
        backgroundColor: '#fff',
        },
    [theme.breakpoints.down('sm')]: {
      fontSize:18,
      },
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  stepTitle:{
    marginRight:20,
    marginTop:20,
     fontWeight:600,
      fontSize:25,
      [theme.breakpoints.down('sm')]: {
        fontSize:18,

          },
  },
  formBox:{
    padding:10,
    [theme.breakpoints.down('sm')]: {
    padding:5,
     
      },
    // background:'#eee'
  },
  labelRoot: {
    right: 25,
    fontSize:22,
    [theme.breakpoints.down('sm')]: {
      fontSize:18, 
      },

  },
  staticLabel: {
    right: 25,
    fontSize:25,
    fontWeight:600,
    width:'100%',
    [theme.breakpoints.down('sm')]: {
      fontSize:18, 
      },

  },
  shrink: {
    transformOrigin: "top right"
  },
  textField:{
    margin:10, 
    width:'100%',
    [theme.breakpoints.down('sm')]: {
    margin:10, 
    },
  },
  item:{
  padding:15,
  [theme.breakpoints.down('sm')]: {
    padding:0,
    },
  },
  checkboxItem:{
    marginRight:25,
    fontSize:22,
    [theme.breakpoints.down('sm')]: {
      fontSize:18,
      },
  }
}));

function VerticalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [ open, setOpen ] = useState(false);
  // STEP 1
var phoneRegex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
var cinRegex = /^[0-9]{8}$/;
    
const [ cin, setCin ] = useState('');
const [ confirmCin, setConfirmCin ] = useState('');
const [ cinError, setCinError ] = useState(false);

const [ fingerPrint, setFingerPrint ] = useState('');
const [ confirmFingerPrint, setConfirmFingerPrint ] = useState('');
const [ fingerPrintError, setFingerPrintError ] = useState(false);

const [ firstName, setFirstName ] = useState('');
const [ firstNameError, setFirstNameError ] = useState(false);

const [ lastName, setLastName ] = useState('');
const [ lastNameError, setLastNameError ] = useState(false);

const [sexe, setSexe] = React.useState('أنثى');

const [birthDay, setBirthDay] = React.useState('');
const [ birthDayError, setBirthDayError ] = useState(false);

  const handleBackFirstStep = () => {
    setActiveStep(0)
    window.scrollTo(0, 900);

  };
  const handleSecondStep = () => {
    if( cin.match(cinRegex) &&  cin === confirmCin && fingerPrint.match(cinRegex) &&  fingerPrint === confirmFingerPrint
    && firstName !== '' && lastName !== '' && birthDay !== ''){
      setActiveStep(1)
      setCinError(false)
      setFingerPrintError(false)
      setFirstNameError(false)
      setLastNameError(false)
      setBirthDayError(false)

    }
    if( !cin.match(cinRegex) ||  cin !== confirmCin) {
      setCinError(true)
    }
    if( !fingerPrint.match(cinRegex) ||  fingerPrint !== confirmFingerPrint) {
      setFingerPrintError(true)
    }
   if( firstName === '') {
      setFirstNameError(true)
    }
    if( lastName === '') {
      setLastNameError(true)
    }
    if( birthDay === '') {
      setBirthDayError(true)
    }
  };

  const handleBackSecondStep = () => {
    setActiveStep(1)
    window.scrollTo(0, 900);

  };
  // STEP 2
  const [address, setAddress] = React.useState('');
  const [ addressError, setAddressError ] = useState(false);

  const [city, setCity] = React.useState('القيروان');

  const [village, setVillage] = React.useState('');
  const [ villageError, setVillageError ] = useState(false);

  const [civilStatus, setcivilStatus] = React.useState('');
  const [ civilStatusError, setCivilStatusError ] = useState(false);
  
  const [edicationalLevel, setedicationalLevel] = React.useState('');
  const [ edicationalLevelError, setEdicationalLevelError ] = useState(false);

  const [lastStadyLevel, setlastStadyLevel] = React.useState('');
  const [ lastStadyLevelError, setLastStadyLevelError ] = useState(false);
  
 const [ phone, setPhone ] = useState('');
 const [ phoneError, setPhoneError ] = useState(false);

 const [ email, setEmail ] = useState('');
 const [ emailError, setEmailError ] = useState(false);

  const handleThirdStep = () => {
    if( address !== '' && village !== '' && civilStatus !== '' &&  edicationalLevel !== '' &&  lastStadyLevel !== ''  && phone !=='' && email !=='') {
      setActiveStep(2)
      setAddressError(false)
      setVillageError(false)
      setCivilStatusError(false)
      setEdicationalLevelError(false)
      setLastStadyLevelError(false)
      setPhoneError(false)
      setEmailError(false)


    }
    if( address === '') {
      setAddressError(true)
    }
   if( village === '') {
      setVillageError(true)
    }
    if( civilStatus === '') {
      setCivilStatusError(true)
    }
    if( edicationalLevel === '') {
      setEdicationalLevelError(true)
    }
    if( lastStadyLevel === '') {
      setLastStadyLevelError(true)
    }
   if( !phone.match(phoneRegex)) {
      setPhoneError(true)
    }
    if( email === '') {
      setEmailError(true)
    }
  };

  // STEP 3
const [ firstCriteria, setFirstCriteria] = useState("");
const [ firstCriteriaError, setFirstCriteriaError ] = useState(false);

const [ secondCriteria, setSecondCriteria] = useState("");
const [ secondCriteriaError, setSecondCriteriaError ] = useState(false);

const [ thirdCriteria, setThirdCriteria] = useState("");
const [ thirdCriteriaError, setThirdCriteriaError ] = useState(false);

const [ fourthCriteria, setFourthCriteria] = useState("");
const [ fourthCriteriaError, setFourthCriteriaError ] = useState(false);

const [ fifthCriteria, setFifthCriteria] = useState("");
const [ fifthCriteriaError, setFifthCriteriaError ] = useState(false);

const [ sixthCriteria, setSixthCriteria] = useState("");
const [ sixthCriteriaError, setSixthCriteriaError ] = useState(false);

const [ seventhCriteria, setSeventhCriteria] = useState("");
const [ seventhCriteriaError, setSeventhCriteriaError ] = useState(false);


  const handleLastStep = () => {

    if( firstCriteria !== '' && secondCriteria !== '' && thirdCriteria !== '' &&  fourthCriteria !== '' &&  fifthCriteria !== ''  && sixthCriteria !=='' && seventhCriteria !=='') {
        setActiveStep(3)
        window.scrollTo(0, 970);
        setFirstCriteriaError(false)
        setSecondCriteriaError(false)
        setThirdCriteriaError(false)
        setFourthCriteriaError(false)
        setFifthCriteriaError(false)
        setSixthCriteriaError(false)
        setSeventhCriteriaError(false)
      }
      if( firstCriteria === '') {
        setFirstCriteriaError(true)
      }
     if( secondCriteria === '') {
        setSecondCriteriaError(true)
      }
      if( thirdCriteria === '') {
        setThirdCriteriaError(true)
      }
      if( fourthCriteria === '') {
        setFourthCriteriaError(true)
      }
      if( fifthCriteria === '') {
        setFifthCriteriaError(true)
      }
     if( sixthCriteria ==='') {
        setSixthCriteriaError(true)
      }
      if( seventhCriteria === '') {
        setSeventhCriteriaError(true)
      }
  };

  // BACK TO STEP 2
  const backToSecondStep = () => {
    setActiveStep(2);
    window.scrollTo(0, 1100);
    setOpen(false)
    setChecked('')
    setAccesspted(false)
    props.reset()
  };
 
// SEND A FORM
const [ accesspted, setAccesspted ] = useState(false);
const [ checked, setChecked ] = useState('');

  const handleSubmitForm = (e) => {
    e.preventDefault();
    
      const criteriaList = [
        { question: "نوع بطاقة العلاج المنتفع بها", answer: firstCriteria },
        { question: "البرنامج الوطني لمساعدة العائلات المعوزة المنتفع به" , answer: secondCriteria },
        { question: "أم لإبن مقيم بأحد المراكز المندمجة للشباب و الطفولة" , answer: thirdCriteria },
        { question: "البرنامج الوطني لمساعدة العائلات المعوزة المنتفع به" , answer: fourthCriteria },
        { question: "أبناء أو إخوة على مقاعد الدراسة أو التكوين" , answer: fifthCriteria },
        { question: "مسجل بمكتب التشغيل و العمل المستقل (قبل يوم 25 أكتوبر2019)" , answer: sixthCriteria },
        { question: "عدد سنوات البطالة" , answer: seventhCriteria },
      ];
      const data = {
        cin,
        fingerPrint,
        firstName,
        lastName,
        sexe,
        birthDay,
        address,
        city,
        village,
        civilStatus,
        edicationalLevel,
        lastStadyLevel,
        phone,
        email,
        criteriaList

      }
      if(accesspted){
        props.createCondidat(data)
        setOpen(true)
      }else{
        setChecked('accesspet')
      }
    
  }

  return (
    // <ThemeProvider theme={theme}>
    <div className={classes.root}>
    <Title title="تعمير الجذاذة" />
    <p style={{color:'#ff0000', textAlign:'right', margin:'40px 10px 20px 10px'}}>
        <span style={{color:'#fff', background:'#ff0000', textAlign:'center', padding:'2px 15px', borderRadius:2, fontWeight:600, marginLeft:10}}>هام جدا</span>
        الرجاء تعمير الجذاذة باللغة العربية بكل دقة، سيتم التثبت من كل المعطيات المصرح  بها في مراحل الفرز 
    </p>
    <form className={classes.stepper} dir="rtl" onSubmit={handleSubmitForm}>
      <Stepper activeStep={activeStep} orientation="vertical" connector={<div style={{dispaly:'none'}}/>}>
         {/*  STEP  1*/}
          <Step  style={{background:'#F9F9F9', padding:15, borderRadius:5 ,marginBottom:20, border:'3px solid #eee'}}>
            <StepLabel style={{marginTop:20}}>
              <span className={classes.stepTitle}>تعمير المعطيات الشخصية</span>
              </StepLabel>
            <StepContent>
                <Grid container className={classes.formBox}>
                   <Grid item xs={12} sm={6} className={classes.item}>
                    <TextField 
                         error={cinError}
                        type="text"
                        className={classes.textField}
                        label="رقم بطاقة التعريف الوطنية" 
                        value={cin}
                        onChange={(e)=>setCin(e.target.value)}
                        InputLabelProps={{
                          classes: { root: classes.labelRoot, shrink: classes.shrink }
                        }} />
                   </Grid>
                   <Grid item xs={12} sm={6} className={classes.item}>
                    <TextField 
                        error={cinError}
                        value={confirmCin}
                        onChange={(e)=>setConfirmCin(e.target.value)}
                        style={{margin:10, width:'100%'}}
                        label="تأكيد رقم بطاقة التعريف الوطنية" 
                        InputLabelProps={{
                          classes: { root: classes.labelRoot, shrink: classes.shrink }
                        }} />
                   </Grid>
                   <Grid item xs={12} sm={6} className={classes.item}>
                    <TextField 
                        error={fingerPrintError}
                        style={{margin:10, width:'100%'}}
                        label="رقم البصمة" 
                        value={fingerPrint}
                        onChange={(e)=>setFingerPrint(e.target.value)}
                        InputLabelProps={{
                          classes: { root: classes.labelRoot, shrink: classes.shrink }
                        }} />
                   </Grid>
                   <Grid item xs={12} sm={6} className={classes.item}>
                    <TextField 
                        style={{margin:10, width:'100%'}}
                        label=" تأكيد رقم البصمة" 
                        error={fingerPrintError}
                        value={confirmFingerPrint}
                        onChange={(e)=>setConfirmFingerPrint(e.target.value)}
                        InputLabelProps={{
                          classes: { root: classes.labelRoot, shrink: classes.shrink }
                        }} />
                   </Grid>
                   <Grid item xs={12} sm={6} className={classes.item}>
                      <TextField 
                        error={firstNameError}
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)}
                        style={{margin:10,width:'100%'}}
                        label="الإسم" 
                        InputLabelProps={{
                          classes: { root: classes.labelRoot, shrink: classes.shrink }
                        }} />
                   </Grid>
                   <Grid item xs={12} sm={6} className={classes.item}>
                      <TextField 
                          error={lastNameError}
                          value={lastName}
                          onChange={(e)=>setLastName(e.target.value)}
                          style={{margin:10, width:'100%'}}
                          label="اللقب" 
                          InputLabelProps={{
                            classes: { root: classes.labelRoot, shrink: classes.shrink }
                          }} />
                   </Grid>
                   <Grid item xs={12} sm={6} className={classes.item}>
                    <FormControl component="fieldset" style={{margin:10, width:'100%'}}>
                        <FormLabel required component="legend"  className={classes.checkboxItem}>الجنس</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={sexe} onChange={(e)=>setSexe(e.target.value)}>
                          <FormControlLabel value="أنثى" control={<Radio color="primary" />} label="أنثى" />
                          <FormControlLabel value="ذكر" control={<Radio color="primary"  />} label="ذكر" />
                        </RadioGroup>
                      </FormControl>
                   </Grid>
                   <Grid item xs={12} sm={6} className={classes.item}  dir="rtl">
                   <TextField
                      error={birthDayError}
                      value={birthDay}
                      onChange={(e)=>setBirthDay(e.target.value)}
                      id="date"
                      dir="rtl"
                      style={{margin:10, width:'100%'}}
                      label="تاريخ الولادة"
                      type="date"                      
                      InputLabelProps={{
                        classes: { root: classes.labelRoot, shrink: classes.shrink }
                      }}
                    />
                   </Grid>
                </Grid>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    variant="outlined"
                    disabled={activeStep === 0}
                    className={classes.prevButton}
                  >
                   تصحيح
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSecondStep}
                    className={classes.nextButton} 
                  >
                    أواصل
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        {/*  STEP  2*/}
          <Step  style={{background:'#F9F9F9', padding:15, borderRadius:5 ,marginBottom:20, border:'3px solid #eee'}}>
            <StepLabel style={{marginTop:20}}>
              <span className={classes.stepTitle}>تعمير المعطيات التكميلية</span>
              </StepLabel>
            <StepContent>
                <Grid container className={classes.formBox}>
                   <Grid item xs={12} md={4} className={classes.item}>
                   <TextField 
                     error={addressError}
                     value={address}
                     onChange={(e)=>setAddress(e.target.value)}
                     style={{margin:10,width:'100%'}}
                     label="العنوان" 
                     multiline
                     rowsMax={3}
                     InputLabelProps={{
                      classes: { root: classes.labelRoot, shrink: classes.shrink }
                    }} />
                   </Grid>
                   <Grid item xs={12} md={4} className={classes.item}>
                   <TextField 
                     select
                     error={villageError}
                     value={village}
                     onChange={(e)=>setVillage(e.target.value)}
                      style={{margin:10, width:'100%'}}
                      label="المعتمدية" 
                      InputLabelProps={{
                        classes: { root: classes.labelRoot, shrink: classes.shrink }
                      }}>
                          <MenuItem  value="القيروان الشمالية" dir="rtl" style={{fontSize:20}}>
                          القيروان الشمالية
                        </MenuItem>
                        <MenuItem  value="القيروان الجنوبية" dir="rtl" style={{fontSize:20}}>
                          القيروان الجنوبية
                        </MenuItem>
                        <MenuItem  value="حفوز" dir="rtl" style={{fontSize:20}}>
                             حفوز  
                        </MenuItem>
                        <MenuItem  value="حاجب العيون " dir="rtl"style={{fontSize:20}}>
                          حاجب العيون     
                        </MenuItem>
                        </TextField>
                   </Grid>
                   <Grid item xs={12} md={4} className={classes.item}>
                   <TextField 
                      disabled
                      variant="filled"
                      style={{margin:10, width:'100%'}}
                      label="ولاية القيروان"
                      // value="القيروان" 
                      InputLabelProps={{
                        classes: { root: classes.staticLabel, shrink: classes.shrink }
                      }} />
                   </Grid>
                   <Grid item xs={12} md={4} className={classes.item}>
                   <TextField 
                     select
                     error={civilStatusError}
                     value={civilStatus}
                     onChange={(e)=>setcivilStatus(e.target.value)}
                      style={{margin:10, width:'100%'}}
                      label="الحالة المدنية" 
                      InputLabelProps={{
                        classes: { root: classes.labelRoot, shrink: classes.shrink }
                      }}>
                          <MenuItem  value="أعزب / عزباء" dir="rtl" style={{fontSize:20}}>
                          أعزب / عزباء
                        </MenuItem>
                        <MenuItem  value="متزوج / متزوجة" dir="rtl" style={{fontSize:20}}>
                        متزوج / متزوجة
                        </MenuItem>
                        <MenuItem  value="مطلق / مطلقة" dir="rtl" style={{fontSize:20}}>
                        مطلق / مطلقة
                        </MenuItem>
                        <MenuItem  value="أرمل / أرملة" dir="rtl" style={{fontSize:20}}>
                        أرمل / أرملة     
                        </MenuItem>
                        </TextField>
                   </Grid>
                   <Grid item xs={12} md={4} className={classes.item}>
                    <TextField 
                      select
                        error={edicationalLevelError}
                        value={edicationalLevel}
                        onChange={(e)=>setedicationalLevel(e.target.value)}
                        style={{margin:10, width:'100%'}}
                        label="المستوى التعليمي" 
                        InputLabelProps={{
                          classes: { root: classes.labelRoot, shrink: classes.shrink }
                        }}>
                            <MenuItem  value="مرحلة التعليم الإبتدائي"dir="rtl" style={{fontSize:20}}>
                            مرحلة التعليم الإبتدائي
                          </MenuItem>
                            <MenuItem  value="مرحلة التعليم الإعدادي"dir="rtl" style={{fontSize:20}}>
                            مرحلة التعليم الإعدادي
                          </MenuItem>
                            <MenuItem  value=" مرحلة التعليم الثانوي"dir="rtl" style={{fontSize:20}}>
                            مرحلة التعليم الثانوي
                          </MenuItem>
                          <MenuItem  value="مرحلة التعليم الجامعي"dir="rtl" style={{fontSize:20}}>
                          مرحلة التعليم الجامعي
                          </MenuItem>
                          </TextField>
                   </Grid>
                   <Grid item xs={12} md={4} className={classes.item}>
                    <TextField
                        error={lastStadyLevelError}
                        value={lastStadyLevel}
                        onChange={(e)=>setlastStadyLevel(e.target.value)}
                        id="date"
                        dir="rtl"
                        style={{margin:10, width:'100%'}}
                        label="تاريخ آخر مستوى تعليمي"
                        type="date"
                        InputLabelProps={{
                          classes: { root: classes.labelRoot, shrink: classes.shrink }
                        }}
                      />
                   </Grid>
                   <Grid item xs={12} md={4} className={classes.item}>
                    <TextField
                        id="tel"
                        style={{margin:10, width:'100%'}}
                        label="الهاتف"
                        type="tel"
                        error={phoneError}
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        InputLabelProps={{
                          classes: { root: classes.labelRoot, shrink: classes.shrink }
                        }}
                      />
                   </Grid>
                   <Grid item xs={12} md={4} className={classes.item}>
                    <TextField
                        id="email"
                        style={{margin:10, width:'100%'}}
                        error={emailError}
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        label="عنوان البريد الإلكتروني"
                        type="email"
                        InputLabelProps={{
                          classes: { root: classes.labelRoot, shrink: classes.shrink }
                        }}
                      />
                   </Grid>
                </Grid>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                     variant="outlined"
                    onClick={handleBackFirstStep}
                    className={classes.prevButton}
                  >
                    تصحيح
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleThirdStep}
                    className={classes.nextButton}
                  >
                    أواصل
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
          {/*  STEP  3*/}
          <Step   style={{background:'#F9F9F9', padding:15, borderRadius:5 ,marginBottom:20, border:'3px solid #eee'}} >
            <StepLabel style={{marginTop:20}}>
              <span className={classes.stepTitle}>تعمير معطيات عن الحالة الإجتماعية</span>
              </StepLabel>
            <StepContent>
               {/* first Criteria  -- المعيار الأول*/}
                <Grid container className={classes.formBox}>
                   <Grid item xs={12} md={6} className={classes.item}>
                    <FormControl component="fieldset" style={{margin:10, width:'100%'}}>
                        <FormLabel component="legend" style={{fontSize:22, color: firstCriteriaError ?'#ff0000':null}}>نوع بطاقة العلاج المنتفع بها :</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={ firstCriteria } onChange={(e)=>setFirstCriteria(e.target.value)}>
                          <FormControlLabel value="firstOption" control={<Radio color="primary" />} label="بطاقة العلاج  المجاني" />
                          <FormControlLabel value="secondOption" control={<Radio color="primary"  />} label="بطاقة علاج ذات التعريفة المنخفظة" />
                        </RadioGroup>
                      </FormControl>
                   </Grid>
                   {/* second Criteria  -- المعيار الثاني */}
                   <Grid item xs={12} md={6} className={classes.item}>
                    <FormControl component="fieldset" style={{margin:10, width:'100%'}}>
                        <FormLabel component="legend" style={{fontSize:22, color: secondCriteriaError ?'#ff0000':null}}>أفراد من العائلة في الكفالة :</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={ secondCriteria } onChange={(e)=>setSecondCriteria(e.target.value)}>
                          <FormControlLabel value="firstOption" control={<Radio color="primary" />} label="نعم" />
                          <FormControlLabel value="secondOption" control={<Radio color="primary"  />} label="لا" />
                        </RadioGroup>
                      </FormControl>
                   </Grid>
               {/* third Criteria  -- المعيار الثالث*/}
                   <Grid item xs={12} md={6} className={classes.item}>
                    <FormControl component="fieldset" style={{margin:10, width:'100%'}}>
                        <FormLabel component="legend" style={{fontSize:22, color: thirdCriteriaError ?'#ff0000':null}}>أم لإبن مقيم بأحد المراكز المندمجة للشباب و الطفولة :</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={ thirdCriteria } onChange={(e)=>setThirdCriteria(e.target.value)}>
                          <FormControlLabel value="firstOption" control={<Radio color="primary" />} label="نعم" />
                          <FormControlLabel value="secondOption" control={<Radio color="primary"  />} label="لا" />
                        </RadioGroup>
                      </FormControl>
                   </Grid>
               {/* fourth Criteria  */}
                   <Grid item xs={12} md={6} className={classes.item}>
                    <FormControl component="fieldset" style={{margin:10, width:'100%'}}>
                        <FormLabel component="legend" style={{fontSize:22, color: fourthCriteriaError ?'#ff0000':null }}>البرنامج الوطني لمساعدة العائلات المعوزة المنتفع به :</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={ fourthCriteria } onChange={(e)=>setFourthCriteria(e.target.value)}>
                          <FormControlLabel value="firstOption" control={<Radio color="primary" />} label="مكفول سابقا من أحد مراكز الدفاع والإدماج الإجتماعي" />
                          <FormControlLabel value="secondOption" control={<Radio color="primary"  />} label="متعهد بك سابقا من أحد المراكز المندمجة للشباب و الطفولة" />
                        </RadioGroup>
                      </FormControl>
                   </Grid>
               {/* fifth Criteria  */}
                   <Grid item xs={12} md={6} className={classes.item}>
                    <FormControl component="fieldset" style={{margin:10, width:'100%'}}>
                        <FormLabel component="legend" style={{fontSize:22, color: fifthCriteriaError ?'#ff0000':null}}>أبناء أو إخوة على مقاعد الدراسة أو التكوين</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={ fifthCriteria }  onChange={(e)=>setFifthCriteria(e.target.value)}>
                          <FormControlLabel value="firstOption" control={<Radio color="primary" />} label="نعم" />
                          <FormControlLabel value="secondOption" control={<Radio color="primary"  />} label="لا" />
                        </RadioGroup>
                      </FormControl>
                   </Grid>
               {/* sixth Criteria */}
                   <Grid item xs={12} md={6} className={classes.item}>
                    <FormControl component="fieldset" style={{margin:10, width:'100%'}}>
                        <FormLabel component="legend" style={{fontSize:22, color: sixthCriteriaError ?'#ff0000':null}}>مسجل بمكتب التشغيل و العمل المستقل (قبل يوم 25 أكتوبر2019)</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={ sixthCriteria } onChange={(e)=>setSixthCriteria(e.target.value)}>
                          <FormControlLabel value="firstOption" control={<Radio color="primary" />} label="نعم" />
                          <FormControlLabel value="secondOption" control={<Radio color="primary"  />} label="لا" />
                        </RadioGroup>
                      </FormControl>
                   </Grid>
               {/* seventh Criteria */}
                   <Grid item xs={12} md={6} className={classes.item}>
                    <TextField 
                        select
                        error={ seventhCriteriaError }
                        value={ seventhCriteria }
                        onChange={(e)=>setSeventhCriteria(e.target.value)}
                        style={{margin:10, width:'100%'}}
                        label="عدد سنوات البطالة :" 
                        InputLabelProps={{
                        classes: { root: classes.labelRoot, shrink: classes.shrink }
                        }}>
                            <MenuItem  value={1} dir="rtl" style={{fontSize:20}}>
                               سنة واحدة
                            </MenuItem>
                            <MenuItem  value={2} dir="rtl" style={{fontSize:20}}>
                              سنتان  
                            </MenuItem>
                            <MenuItem  value={3} dir="rtl" style={{fontSize:20}}>
                              ثلاث سنوات  
                            </MenuItem>
                            <MenuItem  value={4} dir="rtl" style={{fontSize:20}}>
                               أربع سنوات   
                            </MenuItem>
                            <MenuItem  value={5} dir="rtl" style={{fontSize:20}}>
                               خمس سنوات
                            </MenuItem>
                            <MenuItem  value={6} dir="rtl" style={{fontSize:20}}>
                               ست سنوات   
                            </MenuItem>
                            <MenuItem  value={7} dir="rtl" style={{fontSize:20}}>
                               سبع سنوات      
                            </MenuItem>
                            <MenuItem  value={8} dir="rtl" style={{fontSize:20}}>
                               ثمان سنوات   
                            </MenuItem>
                            <MenuItem  value={9} dir="rtl" style={{fontSize:20}}>
                               تسع سنوات   
                            </MenuItem>
                            <MenuItem  value={10} dir="rtl" style={{fontSize:20}}>
                               أكثر من عشر سنوات       
                            </MenuItem>
                       
                    </TextField>
                   </Grid>
                </Grid>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    variant="outlined"
                    onClick={handleBackSecondStep}
                    className={classes.prevButton}
                  >
                    تصحيح
                  </Button>
                  <Button
                    // disabled
                    variant="contained"
                    color="primary"
                    onClick={handleLastStep}
                    className={classes.nextButton}
                  >
                    أواصل
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
         
      </Stepper>
      {activeStep === 3 && (
        <Paper square elevation={0} className={classes.resetContainer}>
          { props.condidate.success === '' ?
            <React.Fragment>
                <div style={{display:'flex', margin:'-20px 0 30px 0'}}>
                    <FormControlLabel
                    style={{ marginLeft:10}}
                        control={
                        <Checkbox
                            color={ checked === 'accesspet'? 'secondary':'primary'}
                            checked={accesspted}
                            onChange={()=>setAccesspted(!accesspted)}
                            name="checkedB"
                            color="primary"
                        />
                        }
                    />
                        <Typography color={ checked === 'accesspet'? 'secondary':'#101F25'} style={{ fontSize:'20px'}}>أصرح على شرفي وأكد بأن المعطيات التي صرحت بها صحيحة وإن ثبوت عكس ذلك سيؤدي إلى رفض مطلبي بصفة آلية</Typography>
                </div>
                <Button  variant="outlined" onClick={backToSecondStep} className={classes.prevButton}>
                    تصحيح    
                </Button>
                <Button
                    type="submit"
                    disabled={props.condidate.loading}
                    variant="contained"
                    color="primary"
                    className={classes.nextButton}
                    >
                    {props.condidate.loading ? <CircularProgress size={25} style={{color:'rgba(255,255,255,0.8)', verticalAlign:'middle', margin:'3px 20px'}}/>:<span>تسجيل</span>}
                    </Button>
            </React.Fragment>:null}
            { props.condidate.success === 'success'&& open?
            <Alert variant="filled" severity="success" style={{marginTop:20}}>
            تمت عملية التسجيل الأولي عن بعد بنجاح 
            </Alert>
           :
           null}
            { props.condidate.success === 'fail'&& open?
            <Alert variant="filled" severity="error" style={{marginTop:20}}>
            هذه العملية غير مسموح بها، لقد سبق وتم التسجيل
             </Alert>:
           null}
        </Paper>
      )}
    </form>
    </div>
    // </ThemeProvider>
  );
}
const mapStateToProps = (state) => ({
    condidate: state.condidate,
});

const mapActionsToProps = {
  createCondidat,
  reset
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(VerticalLinearStepper);
