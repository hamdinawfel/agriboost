import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root:{
    position:'relative',
    top:-300,
    [theme.breakpoints.down('md')]: {
      top:-80,
      
      },
   
  },
  video:{
    width:700,
        height:400,
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
    textAlign:'center',
    [theme.breakpoints.down('sm')]: {
    fontSize:25,
    fontWeight:600,
     
    },
  }
  }));

  export default function Video () {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <p className={classes.title}>شاهد هذا الفيديو لمعرفة المزيد</p>
      
      <div style={{ display:'flex', justifyContent:'center'}}>
      <iframe
          id="video"
          className={classes.video}
          src={"https://www.youtube.com/embed/Bp_BRQeeYK0"}
          frameBorder="0"
          allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
      />
      </div>
    
    </div>
  )
}


           