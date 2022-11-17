import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Title from '../../utils/Title';
import Footer from '../../utils/Footer';
import Orientation from './components/Orientation';

const useStyles = makeStyles((theme)=>({
    root: {
      position: "relative",
      top: 70,
      marginBottom: 660,
      padding: "0 100px 0 100px",
      [theme.breakpoints.down("md")]: {
        padding: "0 20px 100px 20px",
        marginBottom: 560,
      },
      [theme.breakpoints.down("sm")]: {
        padding: "0 20px 0 20px",
        marginBottom: 0,
      },
    },
    container: {
      margin: "10px 0 10px 0",
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.only("xs")]: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: "0px 25px"
      },
    },
    mapping: {
      display: "flex",
      flexDirection: "row-reverse",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column",
        width: "97vw",
      },
      [theme.breakpoints.down("xs")]: {
        width: "100vw",
      },
    },
    text: { 
      textAlign: "right",
      fontSize: "2rem",
      fontWeight: 500,
      padding: "28px 0px",
    },
  }));

const Inscription = () => {
  const classes = useStyles();
  return (
    <div>
        <div className={classes.root}>
            <Title title='إرشاد و توجيه' />
            <Orientation />
        </div>
        <Footer/>
    </div>
  );
}

export default  Inscription
