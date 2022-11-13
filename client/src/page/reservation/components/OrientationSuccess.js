import { Grid, Typography } from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { makeStyles } from '@material-ui/styles';
import React from 'react'

const useStyle = makeStyles((theme) => ({
  root: {
    padding: "40px 20px",
  },
  h5: {
    marginTop: "40px",
    textAlign: "center",
  }
}))

const OrientationSuccess = () => {
  const classes =useStyle()
  return (
    <Grid container className={classes.root}>
      <Grid container alignItems="center" direction="column">
        <CheckCircleIcon color="primary" fontSize="large"/>
        <Typography variant='h3'>تهانينا</Typography>
        <Typography className={classes.h5} variant='h5'>لقد تمت عملية تحديد القطاع بنجاح، الرجاء قم باختيار الدورة التي تناسبك لإتمام عملية التسجيل</Typography>
      </Grid>
    </Grid>
  )
}

export default OrientationSuccess