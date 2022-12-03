import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardModal from './CardModal';
import { Grid } from '@material-ui/core';
import { BsFillCheckCircleFill } from "react-icons/bs";
import TrainingAvatar from "../../../assets/training-logo.png"

const useStyles = makeStyles((theme)=>({
  root: {
    borderColor: '#00a35c'
  },
  cardHeader: { 
    borderBottom: "4px solid #00a35c",
    padding :"0px 0px 10px 0px",
    margin: "0px 0px 30px 0px",
  },
  cardLogoContainer: {
    height: "60px",
    width: "60px",
  },
  cardLogo: {
      height: "100%",
      width: "100%",
      objectFit: "fill",
  },
  title: {
    fontSize: 28,
    textAlign: 'right',
    marginBottom: 12,
  },
  subtitle: {
    textAlign: 'right',
    fontSize: 18,
  },
  text: {
    textAlign: 'right',
    fontSize: 18,
  },
  itemContent: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
        alignItems: "flex-start",
      },
    gap: "8px",
    justifyContent: "flex-end",
    margin: "2px 0 0 0"
  },
  itemTitle: {
      textAlign: "right",
      fontSize: "1.2rem",
      fontWeight: 300,
  },
  itemIcon: {
      [theme.breakpoints.down("xs")]: {
          marginTop: "5px",
        },
  },
}));

const ReservationCard = ({session, period, remaining}) => {
  const classes = useStyles();

  return (
    <Card 
      className={classes.root} 
      variant="outlined"
    >
      <CardContent>
        <Grid container className={classes.cardHeader}>
            <Grid item lg={4} md={4} sm={4} xs={4}>
                <div className={classes.cardLogoContainer}>
                    <img src={TrainingAvatar} className={classes.cardLogo} alt="training" />
                </div>
            </Grid>
            <Grid item lg={8} md={8} sm={8} xs={8} style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                <Typography className={classes.title}>
                {session}
                </Typography>
            </Grid>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.itemContent}>
          <Typography 
            className={classes.text} 
            variant="body2" 
            component="p"
          >
            {period} 
          </Typography>
          <div>
              <BsFillCheckCircleFill className={classes.itemIcon} />
          </div>
        </Grid>
        {!remaining ? <></> 
        : remaining>10 ?
        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.itemContent}>
          <Typography className={classes.subtitle}>
          {`متبقي ${remaining} مقعدا`}
          </Typography>
          <div>
              <BsFillCheckCircleFill className={classes.itemIcon} />
          </div>
        </Grid>
        : 1 <remaining < 11 ?
        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.itemContent}>
          <Typography className={classes.subtitle}>
          {`متبقي ${remaining} مقاعد`}
          </Typography>
          <div>
              <BsFillCheckCircleFill className={classes.itemIcon} />
          </div>
        </Grid>
        : remaining === 1 ?
        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.itemContent}>
          <Typography className={classes.subtitle}>
          {`متبقي ${remaining} مقعد وحيد`}
          </Typography>
          <div>
              <BsFillCheckCircleFill className={classes.itemIcon} />
          </div>
        </Grid>
        :
        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.itemContent}>
          <Typography className={classes.subtitle}>
          {`لا يمكن التسجيل بهذه الدورة`}
          </Typography>
          <div>
              <BsFillCheckCircleFill className={classes.itemIcon} />
          </div>
        </Grid>
        }
      </CardContent>
      <CardActions>
        <CardModal session={session} remaining={remaining}/>
      </CardActions>
    </Card>
  );
}

export default ReservationCard