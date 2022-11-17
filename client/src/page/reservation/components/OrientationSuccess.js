import { Grid, Typography } from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { sendInscription } from "../actions";
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyle = makeStyles((theme) => ({
  root: {
    padding: "40px 20px",
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