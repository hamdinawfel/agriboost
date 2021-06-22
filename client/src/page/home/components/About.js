import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import Link from '@material-ui/core/Link';
import facebook from '../../../assets/facebook.jpg'
const useStyles = makeStyles((theme) => ({
  root:{
    position:'relative',
    top:-620,
    padding:'0 100px 0 100px',
    [theme.breakpoints.down('md')]: {
    padding:'0 20px 100px 20px',
    top:-480,
      },
    [theme.breakpoints.down('sm')]: {
      top:20,
    padding:'0 20px 0 20px',
      },
   
  },
 
  video:{
    width:'100%',
        height:'300px',
        marginTop:30,
        [theme.breakpoints.down('sm')]: {
            width:'320px',
            height:'150px',
        marginTop:0,

          },
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
    marginBottom:20,
    paddingBottom:10,
     
    },
  }
  }));

  export default function Video () {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <span className={classes.title}>إعرف عنا المزيد</span>
      <Grid container style={{ display:'flex', justifyContent:'center'}}>
      <Grid item sm={12} md={6} style={{ display:'flex', justifyContent:'center', padding:15}}>
      {/* <iframe
          id="video"
          className={classes.video}
          // src={"https://www.youtube.com/embed/Bp_BRQeeYK0"}
          // src={"https://www.youtube.com/embed/Bp_BRQeeYK0"}
          frameBorder="0"
          allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
      /> */}
      <video controls className={classes.video}>

       <source src="#"
        type="video/webm"/>
         
         

       </video>
      </Grid>
      <Grid item sm={12} md={6} style={{ display:'flex', justifyContent:'center',padding:15 }}>
      <Link color="inherit" target="_blank" rel="noreferrer" href="#">
           <img src={facebook}  className={classes.video} alt="facebook"/>
              
       </Link>
      </Grid>
      </Grid>
    </div>
  )
}


           