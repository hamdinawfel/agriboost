import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root:{
       maxWidth:250,
       display: 'block',
       margin:'0 auto',
    },
    title:{
      color:theme.palette.primary.dark,
      textAlign:'center',
      fontWeight:900,
      fontSize:'2.5rem',
      padding:0,
      margin:0,
      letterSpacing:0.5
    },
    border: {
        content: "",
        display: 'block',
        width:' 100%',
        height: '20px',
        marginTop:-25,
        zIndex: -1,
        backgroundColor: '#e1f7f6',
        [theme.breakpoints.down('sm')]: {
           marginTop:-30,
        },
    },
    
  }));
export default function Title({title}) {
  const classes = useStyles();
    return (
        <div className={classes.root}>
           <p className={classes.title}>{title}</p>
           <span className={classes.border}></span>
        </div>
    )
}
