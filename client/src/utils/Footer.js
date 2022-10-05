import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Countdown from "react-countdown";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Divider, Grid, Typography } from "@material-ui/core";
import FooterImage from '../assets/agriboost-footer.png';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#008343',
    marginTop: 0,
    color:"white",
    padding: "20px 100px 0 100px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 30px 0 30px",
    },
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: 600,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
  center: {
    [theme.breakpoints.up("md")]: {
      marginTop: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
  },
  copyRight: {
    color: "#fff",
    textAlign: "center",
    fontSize: 12,
  },
  timeContainer: {
    background: " #222222",
    fontFamily: "Share Tech Mono",
    fontSize: 30,
    color: "#afeeee",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  social: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    margin: "1rem 0 0 0",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px",
    },

  },
  time: {
    letterSpacing: "0.05em",
    fontSize: "80px",
    padding: "5px 0",
    textShadow:
      "0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "50px",
    },
  },
  imgContainer: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-start",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  image: {
    height: "230px",
    width: "160px",
  },
  typography: {
    marginLeft: "20px",
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008343',
    borderRadius: '10%',
    height: '3rem',
    width: '3rem',
  }, 
  info: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  infoContainer: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      marginTop: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
  }
}));

export default function Footer() {
  const classes = useStyles();
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Hidden the countdown afrer finishing the event
      return null;
    } else {
      // Show a countdown (time) for the duration of the event
      return (
        <div>
          <div style={{ paddingTop: 30 }}>
            <p className={classes.title}>
              إنتهاء مدة التسجيل يوم 05 ديسمبر 2021
            </p>
          </div>
          <div className={classes.timeContainer} id='clock'>
            <span className={classes.time}>
              {days}:{hours}:{minutes}:{seconds}
            </span>
          </div>
        </div>
      );
    }
  };
  return (
    <div className={classes.root}>
      <Countdown
        date={parseInt(process.env.REACT_APP_END_SUBMSITTION)}
        renderer={renderer}></Countdown>
      <Grid 
        container 
        direction="column" 
        spacing={2}
      >
        <Grid 
          item 
          sm={12}
        >
          <Grid 
            container 
            spacing={4}
          >
            {/* left */}
            <Grid item lg={3} md={4} xs={12}>
              <Grid 
                className={classes.imgContainer}
                container 
              >
                <img className={classes.image} src={FooterImage} alt="footerImage"/>
              </Grid>
            </Grid>
            {/* center */}
            <Grid item lg={6} md={4} xs={12}>
              <Grid 
                className={classes.center}
                container 
                direction="column" 
              >
                <Grid>
                  <Typography 
                    variant="h3"
                    align="center"
                    >Agriboost</Typography>
                  <Typography 
                    variant="h6"
                    align="center">برنامج لدعم التشغيل وبعث المشاريع الفلاحية بالقيروان</Typography>
                    </Grid>
              </Grid>
            </Grid>
            {/* right */}
            <Grid item lg={3} md={4} xs={12}>
              <div className={classes.infoContainer}>
                  <div>
                    <div className={classes.info}>
                      <HomeIcon/>
                      <Typography 
                        className={classes.typography}
                        variant="h6"
                        align="left"
                      > سيدي عمر بوحجلة، القيروان</Typography>
                    </div>
                    <div className={classes.info}>
                      <PhoneInTalkIcon/>
                      <Typography
                        className={classes.typography}
                        variant="h6"
                        align="left"
                      > +216 33 22 11 00 </Typography>
                    </div>
                  </div>
              </div>
              <div className={classes.social}>
                <Link
                  color='inherit'
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.facebook.com/Agriboost.Kairouan'>
                  <FacebookIcon fontSize='large' style={{ color: "#fff" }} />
                </Link>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid 
          item 
          sm={12}
        >
          <Typography 
            variant="body2"
            align="center"
          >
            Directed by GCIC. Copyright © 2021.
          </Typography>
        </Grid>

      </Grid>
    </div>
  );
}
