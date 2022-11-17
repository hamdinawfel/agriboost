import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';

import ProjectTimeline from "../home/components/ProjectTimeline";
import Hero from '../home/components/Hero';
// import Title from '../../utils/Title';
import Footer from '../../utils/Footer';
import { sessions } from './components/data'; 
import ContactUs from '../home/components/ContactUs';
import { getCountPlaces } from './actions';
// import Orientation from './components/Orientation';
// import { Typography } from '@material-ui/core';
import Result from '../home/components/Result';

const useStyles = makeStyles((theme)=>({
    root: {
      position: "relative",
      top: -620,
      padding: "0 100px 0 100px",
      [theme.breakpoints.down("md")]: {
        padding: "0 20px 100px 20px",
        top: -480,
      },
      [theme.breakpoints.down("sm")]: {
        top: -20,
        padding: "0 20px 0 20px",
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

const Reservation = () => {
  const classes = useStyles();
  const [rerender, setRerender] = useState(0)
  let table = sessions
  
  useEffect(() => {
    getCountPlaces()
    .then((data) => { 
      for(let i=0;i<data.length;i++){
        table[data[i]._id-1]["placeRemaining"] = 50 - data[i].reservationsCount;
      }
      for(let i=0;i<3;i++){
        if(!table[i].hasOwnProperty("placeRemaining")) {
          table[i]["placeRemaining"] = 50;
        }
      }
      setRerender(1)
    }) 
  }, [rerender])
  return (
    <div>
        <Hero/>
        <Result/>
        {/* <div className={classes.root}>
            <Title title='إرشاد و توجيه' />
            <Orientation />
            <Grid 
              container 
              className={classes.container}
            >
                <Grid 
                  item 
                  lg={12}
                >
                    <Typography className={classes.text}>قم باختيار الدورة التي تناسبك</Typography>
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
        </div> */}
        <ProjectTimeline/>
        <ContactUs/>
        <Footer/>
    </div>
  );
}

export default  Reservation
