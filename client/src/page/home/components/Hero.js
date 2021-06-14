import React from "react";
import Countdown from 'react-countdown';

import { makeStyles,useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import CloseIcon from '@material-ui/icons/Close';
//images 
import nature from '../../../assets/nature.jpg'
const useStyles = makeStyles((theme) => ({
    root: {
      margin:'0 0 100px 0',
      textAlign:'center'
    },
    cta: {
        position:'relative',
         top:'-550px',
         textAlign:'start',
        display: 'inline-block',
        margin:'0 auto',
        padding:'20px',
        backgroundColor:'rgba(255,255,255,0.75)',
        width:'60%',
        [theme.breakpoints.down('sm')]: {
            top:'-380px',
            width:'80%',
            display: 'inline-block',
            margin:'0 auto'
          },
        [theme.breakpoints.down('xs')]: {
            top:'0',
            width:'90%',
            display:'block',
            margin:'0 auto'
          },
      },
    myButton:{
        display:'block',
        margin:'0 auto',
        color: '#fff',
        fontSize:25,
        width:'50%',
        fontWeight:900,
        padding:'10px 50px',
        marginTop:40,
        marginBottom:20,
        backgroundColor: theme.palette.primary.main,
        border: `2px solid ${theme.palette.primary.main}`,
        letterSpacing:0.8,
        textTransform:'capitalize',
        transition: '0.5s',
        '&:hover': {
            boxShadow: '-5px 10px 15px rgba(91, 137, 158, 0.8)',
        color: '#fff',
        border: `2px solid ${theme.palette.primary.main}`,
        backgroundColor: theme.palette.primary.main,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize:18,
           fontWeight:600,
           width:'100%',

        },
        },
        video:{
        width:500,
        height:300,
        marginTop:15,
        [theme.breakpoints.down('sm')]: {
            width:'340px',
            height:'200px',
            marginTop:100
          },
        },
        title:{
            fontSize:'30px',
            fontWeight:900,
            color:'#343A40', 
            display:'block', 
            margin:'20px auto',
            textAlign:'center',
            [theme.breakpoints.down('sm')]: {
                fontSize:'20px',
                fontWeight:600,
                },
        },
        caption:{
            fontSize:'25px',
            fontWeight:300,
            color:'#343A40',
            display:'block',
            margin:'20px auto',
            textAlign:'center',
            [theme.breakpoints.down('xs')]: {
                fontSize:'18px',
                fontWeight:300,
                },
        },
        timeContainer:{
            display:'flex',
            margin:'0 auto',
            justifyContent:'center',
            alignItems:'center',
            textAlign:'center',
            height:120,
           width:120,
           borderRadius:'50%',
           background:'#000',
           
        },
        time:{
           color:'#fff',
          verticalAlign:'middle',
        textShadow: '0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0)',
        color:'#afeeee',
        fontSize:20
        }
  }));
  export default function Hero () {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
        <div style={{position:'sticky'}}>
        <img src={nature} style={{width:'100%', maxHeight:'600px', objectFit:'cover',}} alt="nature"/>
        </div>
        <div className={classes.cta}>
            <h1 className={classes.title} > 
            مرحبا بكم بموقع التسجيل بمشروع الإدماج الإقتصادي للشباب مبادرون
             </h1>
            <h1 className={classes.caption}> 
            مقاربة مندمجة ومتعدّدة القطاعات لتحسين فرص الشّغل للشّباب الأقلّ حظّا
            </h1>
            <h1 className={classes.caption}> 
            2021/06/30 : إنتهاء مهلة تقديم الترشيحات يوم
            </h1>
            <div className={classes.timeContainer}>
            <Countdown 
                    className={classes.time}
                    date={Date.now() + 1000 *60 *60*24*15}
                    >
                </Countdown>
            </div>
            <Button className={classes.myButton} onClick={handleClickOpen}>
                <PlayCircleOutlineIcon fontSize="large" style={{ verticalAlign:'middle', marginRight:20, marginTop:-5}}/>شاهد طريقة التسجيل 
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
            <div style={{ display:'flex', boxShadow: '0px 0px 8px rgba(91, 137, 158, 0.3)', alignItems:'center', marginBottom:20}}>
                <IconButton onClick={handleClose} style={{ marginLeft:20}}>
                    <CloseIcon />
                </IconButton>
                <DialogTitle style={{ textAlign:'center'}} id="responsive-dialog-title">{"فيديو طريقة التسجيل"}</DialogTitle>
            </div>
                <DialogContent style={{ display:'flex', justifyContent:'center', marginBottom:50}}>
                <iframe
                        id="video"
                        className={classes.video}
                        src={"https://www.youtube.com/embed/Bp_BRQeeYK0"}
                        frameBorder="0"
                        allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </DialogContent>
            </Dialog>
        </div>
    </div>
  )
}


           