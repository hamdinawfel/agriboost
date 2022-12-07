import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from "@material-ui/core/Link";

import ReservationCard from './components/ReservationCard';
import Title from '../../utils/Title';
import Footer from '../../utils/Footer';
import { sessions } from './components/data'; 
import { getCountPlaces } from './actions';
import { Typography } from '@material-ui/core';

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
      padding: "0px",
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
    back: { 
      textAlign: "left",
      fontSize: "1.2rem",
      fontWeight: 500,
      padding: "28px 0px 0px 0px",
    },
  }));

const Reservation = () => {
  const classes = useStyles();
  const [rerender, setRerender] = useState(0)
  let table = sessions
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    getCountPlaces()
    .then((data) => { 
      for(let i=0;i<data.length;i++){
        table[data[i]._id-1]["placeRemaining"] = 30 - data[i].reservationsCount;
      }
      for(let i=0;i<3;i++){
        if(!table[i].hasOwnProperty("placeRemaining")) {
          table[i]["placeRemaining"] = 30;
        }
      }
      setRerender(1)
    }) 
  }, [rerender])
  return (
    <div>
        <div className={classes.root}>
            <Title title='الدورات التكوينية' />
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
            <Typography className={classes.back}>
              <Link
                href="/" 
                variant='body2'
                style={{ textAlign: "right" }}>
                العودة إلى الصفحة الرئيسية
              </Link>
            </Typography>
        </div>
        <Footer/>
    </div>
  );
}

export default  Reservation
