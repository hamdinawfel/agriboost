import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Result from "../home/components/Result";
import ProjectTimeline from "../home/components/ProjectTimeline";
import Hero from '../home/components/Hero';
import ReservationCard from './components/ReservationCard';
import Title from '../../utils/Title';
import Footer from '../../utils/Footer';
import { sessions } from './components/data'; 
import ContactUs from '../home/components/ContactUs';
import { getCountPlaces } from './actions';

const useStyles = makeStyles((theme)=>({
    root: {
      padding: "2rem",
      marginBottom: '100px',
    },
    container: {
      margin: "40px 0 10px 0",
      display: "flex",
      justifyContent: "center",
    },
    mapping: {
      display: "flex",
      flexDirection: "row-reverse",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column",
        width: "97vw",
      },
    },
    text: { 
      textAlign: "right",
      fontSize: "25px",
      fontWeight: 300,
      marginRight: "30px",
    },
  }));

const Reservation = () => {
  const classes = useStyles();
  const [rerender, setRerender] = useState(0)
  let table = sessions
  
  useEffect(() => {
    getCountPlaces()
    .then((data) => { 
      for(let i=0;i<3;i++){
        table[data[i]._id-1]["placeRemaining"] = 50 - data[i].reservationsCount;
      }
      setRerender(1)
    }) 
  }, [rerender])
  console.log(table)
  return (
    <div>
        <Hero/>
        <Result />
        <ProjectTimeline/>
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
                      className={classes.mapping}
                      container 
                      spacing={8}
                    >
                      {table?.map((item) => (
                        <Grid 
                          item 
                          lg={4} 
                          md={12}
                          sm={12}
                          xs={12}
                          key={item.id}
                        >
                          <ReservationCard 
                            session={item.session}
                            period={item.period}
                            remaining={item.placeRemaining}
                          />
                      </Grid>
                      ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
        <ContactUs />
        <Footer/>
    </div>
  );
}

export default  Reservation
