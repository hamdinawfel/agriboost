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

const SuccessModal = () => {
  const classes =useStyle()
  return (
    <Grid container className={classes.root}>
      <Grid container alignItems="center" direction="column">
        <CheckCircleIcon color="primary" fontSize="large"/>
        <Typography variant='h3'>تهانينا</Typography>
        <Typography className={classes.h5} variant='h5'>لقد تمت عملية التسجيل في دورة التكوين لمشروع أڨريبوست بنجاح</Typography>
      </Grid>
    </Grid>
  )
}

export default SuccessModal