import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Countdown from 'react-countdown';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
    root:{
        height:100,
         background:'#222222'
    },
    title:{
        marginTop:30,
        color:'#fff',
        fontSize:30,
        fontWeight:600,
        textAlign:'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px',

          },
    },
    copyRight:{
        color:'#fff',
        textAlign:'center',
        fontSize:12
    },
    timeContainer: {
      background: ' #222222',
      fontFamily: 'Share Tech Mono', 
      fontSize:30,
      color:'#afeeee',
      marginBottom:-200,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
    },
    social:{
      position:'relative',
      display:'flex',
      justifyContent:'center',
    },
    time:{
      letterSpacing:'0.05em',
        fontSize: '80px',
        padding: '5px 0',
        // color: '#afeeee',
        textShadow: '0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0)',
        [theme.breakpoints.down('sm')]: {
            fontSize: '50px',

          },
    },
    
    }));
export default function Footer() {
  const classes = useStyles();

    return (
        <div className={classes.root}>

            <div >
              <p className={classes.title}> 2021/06/30 : انتهاء مهلة تقديم الترشيحات يوم</p>
            </div>
            <div className={classes.timeContainer} id="clock">
                <Countdown 
                    className={classes.time}
                    date={Date.now() + 1000 *60 *60*24*15}
                    >
                </Countdown>
                </div>
           
            <div style={{padding:'250px 0 10px 0', background:'#222'}}>
            <div>
                <p style={{fontSize:18, color:'#fff', width:'100%', textAlign:'center'}}>تابعونا على</p>
                <div className={classes.social}>
                    <Link color="inherit" target="_blank" rel="noreferrer" href="https://www.facebook.com/Moubadiroun.tn/">
                    
                    <FacebookIcon fontSize="large" style={{color:"#fff"}}/>
                  
                </Link>
                <Link color="inherit" target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCeW2uqE_ERQWDGA_5KCVoMw">
                
                    <YouTubeIcon fontSize="large" style={{color:"#fff"}}/>
                  
                </Link>
                </div>
               
                </div>
               <p className={classes.copyRight}>Powred by BS Partage. Copyright © 2021.</p>
            </div>
        </div>
    )
}
