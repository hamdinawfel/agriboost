import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import Link from '@material-ui/core/Link';
import facebook from '../../../assets/facebook.jpg'
//
import Title from '../../../utils/Title'
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
  }));

  export default function Video () {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <Title title="إعرف عنا المزيد" />
      <Grid container style={{ display:'flex', justifyContent:'center', marginTop:20}}>
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


           