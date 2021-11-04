import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Countdown from "react-countdown";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#222222",
    marginTop: -500,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 200,
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
              إنتهاء مهلة تقديم الترشحات يوم 30 نوفمبر 2021
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
      <div style={{ padding: "30PX 0 10px 0", background: "#222" }}>
        <div>
          <p
            style={{
              fontSize: 18,
              color: "#fff",
              width: "100%",
              textAlign: "center",
            }}>
            تابعونا على
          </p>
          <div className={classes.social}>
            <Link color='inherit' target='_blank' rel='noreferrer' href='#'>
              <FacebookIcon fontSize='large' style={{ color: "#fff" }} />
            </Link>
          </div>
        </div>
        <p className={classes.copyRight}>Directed by GCIC. Copyright © 2021.</p>
      </div>
    </div>
  );
}
