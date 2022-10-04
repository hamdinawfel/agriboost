import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Hero from '../home/components/Hero';
import ReservationCard from './components/ReservationCard';
import Title from '../../utils/Title';
import Footer from '../../utils/Footer';
import { sessions } from './components/data'; 

const useStyles = makeStyles((theme)=>({
    root: {
      padding: "2rem",
    },
    container: {
      margin: "40px 0 10px 0",
    },
    text: {
      textAlign: "right",
      fontSize: "25px",
      fontWeight: 300,
      marginRight: "30px"
    },
  }));

const Reservation = () => {
  const classes = useStyles();
    
  return (
    <div>
        <Hero/>
        <div className={classes.root}>
            <Title title='إرشاد و توجيه' />
            <Grid 
              container 
              className={classes.container}
            >
                <Grid 
                  item 
                  lg={12}
                >
                    <p className={classes.text}>قم باختيار الدورة التي تناسبك</p>
                    <Grid 
                      container 
                      spacing={8}
                    >
                      {sessions.map((item) => (
                        <Grid 
                          item 
                          lg={4} 
                          md={4}
                          xs={12}
                          key={item.id}
                        >
                          <ReservationCard 
                            session={item.session}
                            period={item.period}
                          />
                      </Grid>
                      ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
        <Footer/>
    </div>
  );
}

export default  Reservation
