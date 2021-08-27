import React, { useState, useEffect }from 'react'
import { makeStyles, useTheme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import CloseIcon from '@material-ui/icons/Close';
import PrintIcon from '@material-ui/icons/Print';
//
import Title from '../../../utils/Title'
import banner from '../../../assets/banner.jpg'
//Redux
import { connect } from 'react-redux';
import { getResult, closeResult } from '../actions';
//transform div to pdf 
import Pdf from "react-to-pdf";
const ref = React.createRef();

const useStyles = makeStyles((theme) => ({
    root: {
      position:'relative',
      top:-500,
      padding:100,
      [theme.breakpoints.down('md')]: {
        top:-400,
         padding:10
        },
    [theme.breakpoints.down('sm')]: {
        top:'-70px',
        width:'100%',
       padding:0
        
      },
    },
    box:{ 
        boxShadow: '0 0 30px 0 rgb(0 0 0 / 20%)',
        borderRadius:0,
        padding:'50px', 
        display: 'block',
        margin:'0 auto',
        marginTop:50,
        marginLeft:200, 
        marginRight:150,
        marginBottom:150,
        [theme.breakpoints.down('sm')]: {
             marginBottom:50,
             marginTop:80,
             padding:'50px 20px', 
            boxShadow: '0 0 20px 0 rgb(0 0 0 / 10%)',
            marginLeft:30, 
            marginRight:30,
            margin:'0 auto',
            },
       
    },
    subTitle:{
        textAlign:'center',
        marginBottom:50, 
        color: theme.palette.primary.dark,
        fontSize:'25px',
        fontWeight:300,
        [theme.breakpoints.down('sm')]: {
            marginBottom:'20px',
            fontSize:'15px',
            },
    },
    textField:{
        marginTop:'30px', 
        marginBottom:'30px', 
        width:'100%',
        display:'block',
        margin:'0 auto',
        [theme.breakpoints.down('sm')]: {
        marginTop:'20px', 
        marginBottom:'20px',
        },
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
    myButton:{
        display:'block',
        margin:'0 auto',
        color: '#fff',
        fontSize:25,
        width:'100%',
        fontWeight:900,
        padding:'10px 50px',
        borderRadius:0,
        marginTop:60,
        marginBottom:30,
        backgroundColor: theme.palette.primary.main,
        border: `2px solid #fff`,
        letterSpacing:0.8,
        textTransform:'capitalize',
        transition: '0.5s',
        '&:hover': {
            boxShadow: '-5px 10px 15px rgba(91, 137, 158, 0.8)',
            color: theme.palette.primary.main,
            border: `2px solid ${theme.palette.primary.main}`,
            backgroundColor: '#fff',
            },
            [theme.breakpoints.down('sm')]: {
                fontSize:18,
            fontWeight:600,
            width:'100%',
            marginTop:30,
            },
        },
        header:{
            fontWeight:900,
            fontSize:25,
            textAlign: 'center',
        },
        body:{ 
          textAlign: 'right',
          flexDirection: 'right',
          margin:'0 10px'
        },
        footer:{ 
          textAlign: 'right',
          fontWeight:900,
        },
        errorText:{
          textAlign:'right',
          marginBottom:20, 
          backgroundColor:theme.palette.secondary.red,
          borderRadius:5,
          padding:15,
          color: '#ff0000',
          fontSize:'20px',
          fontWeight:300,
          [theme.breakpoints.down('sm')]: {
              marginBottom:'20px',
              fontSize:'15px',
          },
      },
  }));

  function Result(props) {
  const classes = useStyles();
  var cinRegex = /^[0-9]{8}$/;
  
  const [ cin, setCin ] = useState('');
  const [ cinError, setCinError ] = useState(false);

  const handleSubmit = (e) => {
      e.preventDefault();
      if(cin.match(cinRegex)){
       props.getResult(cin);
       setCinError(false)
      }else{
        setCinError(true)
      }
  }

// DIALOG
const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
 

  const handleClose = () => {
    props.closeResult();
    setCin('');
    setCinError(false)
  };
  const femalSexe = "السيدة";
  const malSexe = "السيد"
    return (
        <div className={classes.root} dir="rtl">
            <Title title="النتائج الأولية" />
            <form onSubmit={handleSubmit} className={classes.box}>
                    <p className={classes.subTitle}> 
                      للإطلاع على نتيجة التوجيه المهني، يرجى إدخال رقم بطاقة التعريف الوطنية
                    </p>
                    {props.condidate.error?
                    <p className={classes.errorText}> 
                    الرجاء التثبت من رقم بطاقة التعريف الوطنية
                    </p>:null}
                    <TextField 
                        error={cinError}
                        fullWidth
                        type="text"
                        className={classes.textField}
                        label="رقم بطاقة التعريف الوطنية" 
                        value={cin}
                        onChange={(e)=>setCin(e.target.value)}
                        InputLabelProps={{
                            classes: { root: classes.labelRoot, shrink: classes.shrink }
                        }} />
                    <Button className={classes.myButton} type="submit"disabled={props.condidate.loading}>
                    {!props.condidate.loading?"دخول":<CircularProgress style={{display:'block', margin:'0 auto'}}/>}
                    </Button>
                </form>
                <Dialog
                fullScreen={fullScreen}
                open={props.condidate.showResult}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
            <div style={{ display:'flex', boxShadow: '0px 0px 8px rgba(91, 137, 158, 0.3)', alignItems:'center', marginBottom:20}}>
                <IconButton onClick={handleClose} style={{ marginLeft:20}}>
                    <CloseIcon />
                </IconButton>
                <DialogTitle style={{ textAlign:'right'}} id="responsive-dialog-title">{"النتائج الأولية"}</DialogTitle>
            </div>
                <DialogContent>
                  <div ref={ref} style={{ display:'block', margin:'0 auto' }}>
                    <img src={banner} style={{width : '100%'}} />
                    <p className={classes.header}> 
                    {/* {props.condidate.data.acceptedStatus} */}  {"النتيجة الأولية للتسجيل بمشروع أڨريبوست"} 
                    </p>
                    
                    <p className={classes.body} >
                       {props.condidate.data.sexe === 'أنثى'?femalSexe:malSexe } 
                       <span style={{fontWeight:600, margin:'0 10px'}}>{props.condidate.data.firstName} {"  "} {props.condidate.data.lastName} {"  "}</span>
                       <span className={classes.body} >
                        {"صاحب  بطاقة  التعريف الوطنية رقم"} 
                        </span>
                        <span style={{fontWeight:600, margin:'0 10px'}}>{props.condidate.data.cin} </span> 
                    </p>
                    <p className={classes.body}>
                    مطلبك بمشروع أڨريبوست <span style={{fontWeight:600, margin:'0 10px'}}>{props.condidate.data.status}</span> 
                    </p>
                    <p className={classes.footer}>
                      حظا{" "}موفقا  
                    </p>
                  </div>
                  <Pdf targetRef={ref} filename={`النتيجة الأولية للتسجيل بمشروع أڨريبوست  للسيد(ة) ${props.condidate.data.firstName}  ${props.condidate.data.lastName}`}  scale={fullScreen?1.6:1.4}  x={fullScreen?40:0} y={10}>
                    {({ toPdf }) => 
                      <Button className={classes.myButton} onClick={toPdf}>
                          <PrintIcon style={{ verticalAlign:'middle', marginRight:20, marginTop:-5}} /> طباعة
                      </Button> }
                  </Pdf>
                </DialogContent>
            </Dialog>
        </div>
    )
}
const mapStateToProps = (state) => ({
    condidate: state.condidate,
  });
  
  const mapActionsToProps = {
    getResult,
    closeResult
  };
  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(Result);
