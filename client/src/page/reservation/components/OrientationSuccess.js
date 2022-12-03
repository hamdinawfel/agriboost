import { Grid, Typography } from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { makeStyles } from '@material-ui/styles';
import Link from "@material-ui/core/Link";
import React from 'react';
import { sendInscription } from "../actions";
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyle = makeStyles((theme) => ({
  root: {
    padding: "20px 0px",
  },
  h5: {
    marginTop: "40px",
    textAlign: "center",
  },
  spinner: {
    width: "100%",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    textAlign: "right",
    flexDirection: "right",
    margin: "0 10px",
  }
}))

const OrientationSuccess = (props) => {
  const classes =useStyle()
  const { success, error, alertMessage, loading } = props.inscription;
  return (
    <Grid container className={classes.root}>
      {loading 
        ?  <div className={classes.spinner}>
              <Box >
                <CircularProgress size={80} />
              </Box>
            </div>
        :  <Grid container alignItems="center" direction="column">
            <CheckCircleIcon color="primary" fontSize="large"/>
            {success && 
              <Typography variant='h3'>تهانينا</Typography>
            }
            {error && 
              <Typography variant='h3'>تذكير</Typography>
            }
            <Typography className={classes.h5} variant='h5'>{alertMessage}</Typography>
            <p className={classes.body} style={{ marginTop: 20}}>
              <Link 
                href="/reservation" 
                style={{ fontWeight: 500, color: "blue", cursor:"pointer", textAlign: "right" }}>
                اضغط على هذا الرابط لاستكمال عملية التسجيل و اختيار دورة تكوينية
              </Link>
            </p>
          </Grid>
        }
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  inscription: state.inscription,
});

const mapActionsToProps = {
  sendInscription,
};

export default connect(mapStateToProps, mapActionsToProps)(OrientationSuccess);