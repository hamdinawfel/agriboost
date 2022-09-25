import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Alert from '@material-ui/lab/Alert';

import Hero from '../home/components/Hero';
import ReservationCard from './components/ReservationCard';
import Title from '../../utils/Title';
import Footer from '../../utils/Footer'; 

const useStyles = makeStyles({
    root: {
      padding: "2rem",
      margin: "-400px 0 0 0"
    },
    container: {
      margin: "40px 0 40px 0"
    },
    text: {
      textAlign: "right",
      fontSize: "25px",
      fontWeight: 300,
      marginRight: "30px"
    },
  });

const Reservation = () => {
    const classes = useStyles();
    
  return (
    <div>
        <Hero/>
        <div className={classes.root}>
            <Title title='إرشاد و توجيه' />
            <Grid container className={classes.container}>
                <Grid item lg={12}>
                    <p className={classes.text}>قم باختيار الدورة التي تناسبك</p>
                    <Grid container spacing={8}>
                        <Grid item lg={4}>
                            <ReservationCard 
                              session='الدورة الثالثة' 
                              period='من 29 ديسمبر 2022 إلى 27 جانفي 2022'/>
                        </Grid>
                        <Grid item lg={4}>
                            <ReservationCard 
                              session='الدورة الثانية' 
                              period='من 29 نوفمبر 2022 إلى 27 ديسمبر 2022'/>
                        </Grid>
                        <Grid item lg={4} >
                            <ReservationCard 
                              session='الدورة الأولى' 
                              period='من 25 أكتوبر 2022 إلى 27 نوفمبر 2022 '/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
        <Footer/>
    </div>
  );
}

export default  Reservation
