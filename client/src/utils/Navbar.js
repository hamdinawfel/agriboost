import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

 //logo
import banner from '../assets/banner.jpg'

const useStyles = makeStyles((theme) => ({
    appBar: {
    backgroundColor:'#fff',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    userSelect:'none',
    padding:'5px 100px 5px 100px',
    boxShadow: '0px 0px 8px rgba(91, 137, 158, 0.7)',
    [theme.breakpoints.down('sm')]: {
        padding:'0 20x',
      height:70,
    },
  },
  banner:{
      width:'100%',
      height:70,
      [theme.breakpoints.down('xs')]: {
        height:'auto',
        width:'360px',
    },
  }
}));

export default function Navbar() {
  const classes = useStyles();
 
  return (
    <AppBar position="relative" color="default" elevation={0} className={classes.appBar}>
        <img src={banner} alt="" className={classes.banner} />
    </AppBar>
  );
}
