import React , {useState} from 'react';
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
//
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
//
import Alert from '@material-ui/lab/Alert';
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
    top:-350,
     padding:10
    },
  [theme.breakpoints.down('xs')]: {
      top:'-50px',
      width:'100%',
     padding:0
      
    },
  },
  stepper: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontSize:22,
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
  title:{
    fontSize:30,
    fontWeight:900,
    display:'block',
    textAlign:'right',
    margin:'0 auto',
    color:'#3F51B5',
    paddingBottom:10,
    marginBottom:20,
    borderBottom:'3px solid #3F51B5',
    [theme.breakpoints.down('sm')]: {
    fontSize:20,
    fontWeight:600,
    textAlign:'center',
    margin:10,
    paddingBottom:10,
     
    },
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
  
var phoneRegex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
var cinRegex = /^[0-9]{8}$/;

  const handleBackFirstStep = () => {
    setActiveStep(0)
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
  };
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

  const handleLastStep = () => {
    setActiveStep(3)
  };

  const handleReset = () => {
    setActiveStep(0);
    setCin('')
    setFingerPrint('')
    setFirstName('')
    setLastName('')
    setSexe('أنثى')
    setBirthDay('')
    setAddress('')
    setVillage('')
    setcivilStatus('')
    setedicationalLevel('')
    setlastStadyLevel('')
    setPhone('')
    setEmail('')
    setIsBeneficiaryTreatment("لا")
    setIsMotherOfResidingSon("لا")
    setIsPreResidingAtDefenseCenter("لا")
    setIsPreResidingAtCombinedCenter("لا")
    setIsFamilymembersGuarantee("لا")
    setIsFamilymembersStudent("لا")
    setConfirmCin('')
    setConfirmFingerPrint('')
    setOpen(false)
    setChecked('')
    setAccesspted(false)
    props.reset()
  };
  // form setup
  //STEP 1
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

  //STEP 2
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

//STEP 3
const [ isBeneficiaryTreatment, setIsBeneficiaryTreatment ] = useState("لا");
const [ isMotherOfResidingSon, setIsMotherOfResidingSon ] = useState("لا");
const [ isPreResidingAtDefenseCenter, setIsPreResidingAtDefenseCenter ] = useState("لا");
const [ isPreResidingAtCombinedCenter, setIsPreResidingAtCombinedCenter ] = useState("لا");
const [ isFamilymembersGuarantee, setIsFamilymembersGuarantee ] = useState("لا");
const [ isFamilymembersStudent, setIsFamilymembersStudent ] = useState("لا");
//end step3
const [ accesspted, setAccesspted ] = useState(false);
const [ checked, setChecked ] = useState('');



  const handleSubmitForm = (e) => {
    e.preventDefault();
    
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
        isBeneficiaryTreatment,
        isMotherOfResidingSon,
        isPreResidingAtDefenseCenter,
        isPreResidingAtCombinedCenter,
        isFamilymembersGuarantee,
        isFamilymembersStudent

      }
      if(accesspted){
        props.createCondidat(data)
        setOpen(true)
      }else{
        setChecked('accesspet')
      }
    
  }

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
    <span className={classes.title}>الرجاء تعمير الجذاذة بكل دقة وباللغة العربية</span>
    <form className={classes.stepper} dir="rtl" onSubmit={handleSubmitForm}>
      <Stepper activeStep={activeStep} orientation="vertical" connector={<div style={{dispaly:'none'}}/>}>
         {/*  STEP  1*/}
          <Step  style={{background:'#eee', padding:15, borderRadius:5 ,marginBottom:20}}>
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
                    className={classes.button}
                  >
                   تصحيح
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSecondStep}
                    className={classes.button}
                  >
                    أواصل
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        {/*  STEP  2*/}
          <Step   style={{background:'#eee', padding:15, borderRadius:5 ,marginBottom:20}}>
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
                      style={{margin:10, width:'100%'}}
                      label="الولاية" 
                      value="القيروان"
                      InputLabelProps={{
                        classes: { root: classes.labelRoot, shrink: classes.shrink }
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
                    className={classes.button}
                  >
                    تصحيح
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleThirdStep}
                    className={classes.button}
                  >
                    أواصل
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
          {/*  STEP  3*/}
          <Step   style={{background:'#eee', padding:15, borderRadius:5 ,marginBottom:20}} >
            <StepLabel style={{marginTop:20}}>
              <span className={classes.stepTitle}>تعمير معطيات عن الحالة الإجتماعية</span>
              </StepLabel>
            <StepContent>
                <Grid container className={classes.formBox}>
                   <Grid item xs={12} md={6} className={classes.item}>
                    <FormControl component="fieldset" style={{margin:10, width:'100%'}}>
                        <FormLabel component="legend" style={{fontSize:22}}>منتفع بالبرنامج الوطني للعلاج المجاني وذو التعريفة المنخفظة</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={isBeneficiaryTreatment} onChange={(e)=>setIsBeneficiaryTreatment(e.target.value)}>
                          <FormControlLabel value="نعم" control={<Radio color="primary" />} label="نعم" />
                          <FormControlLabel value="لا" control={<Radio color="primary"  />} label="لا" />
                        </RadioGroup>
                      </FormControl>
                   </Grid>
                   <Grid item xs={12} md={6} className={classes.item}>
                    <FormControl component="fieldset" style={{margin:10, width:'100%'}}>
                        <FormLabel component="legend" style={{fontSize:22}}>أم لإبن مقيم بأحد المراكز المندمجة للشباب و الطفولة</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={isMotherOfResidingSon} onChange={(e)=>setIsMotherOfResidingSon(e.target.value)}>
                          <FormControlLabel value="نعم" control={<Radio color="primary" />} label="نعم" />
                          <FormControlLabel value="لا" control={<Radio color="primary"  />} label="لا" />
                        </RadioGroup>
                      </FormControl>
                   </Grid>
                   <Grid item xs={12} md={6} className={classes.item}>
                    <FormControl component="fieldset" style={{margin:10, width:'100%'}}>
                        <FormLabel component="legend" style={{fontSize:22}}>مكفول سابقا من أحد مراكز الدفاع والإدماج الإجتماعي</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={isPreResidingAtDefenseCenter} onChange={(e)=>setIsPreResidingAtDefenseCenter(e.target.value)}>
                          <FormControlLabel value="نعم" control={<Radio color="primary" />} label="نعم" />
                          <FormControlLabel value="لا" control={<Radio color="primary"  />} label="لا" />
                        </RadioGroup>
                      </FormControl>
                   </Grid>
                   <Grid item xs={12} md={6} className={classes.item}>
                    <FormControl component="fieldset" style={{margin:10, width:'100%'}}>
                        <FormLabel component="legend" style={{fontSize:22}}>متعهد بك سابقا من أحد المراكز المندمجة للشباب و الطفولة</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={isPreResidingAtCombinedCenter} onChange={(e)=>setIsPreResidingAtCombinedCenter(e.target.value)}>
                          <FormControlLabel value="نعم" control={<Radio color="primary" />} label="نعم" />
                          <FormControlLabel value="لا" control={<Radio color="primary"  />} label="لا" />
                        </RadioGroup>
                      </FormControl>
                   </Grid>
                   <Grid item xs={12} md={6} className={classes.item}>
                    <FormControl component="fieldset" style={{margin:10, width:'100%'}}>
                        <FormLabel component="legend" style={{fontSize:22}}>أفراد من العائلة في الكفالة</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={isFamilymembersGuarantee} onChange={(e)=>setIsFamilymembersGuarantee(e.target.value)}>
                          <FormControlLabel value="نعم" control={<Radio color="primary" />} label="نعم" />
                          <FormControlLabel value="لا" control={<Radio color="primary"  />} label="لا" />
                        </RadioGroup>
                      </FormControl>
                   </Grid>
                   <Grid item xs={12} md={6} className={classes.item}>
                    <FormControl component="fieldset" style={{margin:10, width:'100%'}}>
                        <FormLabel component="legend" style={{fontSize:22}}>أبناء أو إخوة على مقاعد الدراسة أو التكوين</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={isFamilymembersStudent}onChange={(e)=>setIsFamilymembersStudent(e.target.value)}>
                          <FormControlLabel value="نعم" control={<Radio color="primary" />} label="نعم" />
                          <FormControlLabel value="لا" control={<Radio color="primary"  />} label="لا" />
                        </RadioGroup>
                      </FormControl>
                   </Grid>
                   
                   
                  
                </Grid>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    variant="outlined"
                    onClick={handleBackSecondStep}
                    className={classes.button}
                  >
                    تصحيح
                  </Button>
                  <Button
                    // disabled
                    variant="contained"
                    color="primary"
                    onClick={handleLastStep}
                    className={classes.button}
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
                <Typography color={ checked === 'accesspet'? 'secondary':'primary'} style={{ fontSize:'20px'}}>أصرح على شرفي وأكد بأن المعطيات التي صرحت بها صحيحة وإن ثبوت عكس ذلك سيؤدي إلى رفض مطلبي بصفة آلية</Typography>
          </div>
          <Button  variant="outlined" onClick={handleReset} className={classes.button}>
            تصحيح    
          </Button>
          <Button
            type="submit"
            disabled={props.condidat.loading}
            variant="contained"
            color="primary"
            className={classes.button}
            >
            {props.condidat.loading ? <CircularProgress size={25} style={{color:'rgba(255,255,255,0.8)', verticalAlign:'middle'}}/>:<span>تسجيل</span>}
            </Button>
            { props.condidat.success && open?
            <Alert variant="filled" severity="success" style={{marginTop:20}}>
            تمت عملية التسجيل الأولي عن بعد بنجاح 
          </Alert>
            
           :null}
           
            { props.condidat.fail && open?
            <Alert variant="filled" severity="error" style={{marginTop:20}}>
               هذه العملية غير مسموح بها، لقد سبق وتم التسجيل
          </Alert>
            
           :null}
        </Paper>
      )}
    </form>
    </div>
    </ThemeProvider>
  );
}
const mapStateToProps = (state) => ({
  condidat: state.condidat,
});

const mapActionsToProps = {
  createCondidat,
  reset
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(VerticalLinearStepper);
