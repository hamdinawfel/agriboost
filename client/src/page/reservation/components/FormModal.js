import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid, TextField } from '@material-ui/core';
import { useFormik } from "formik";
import * as yup from "yup";
import { connect } from 'react-redux';
import { sendReservation } from "../actions";



const validationSchema = yup.object({
  cin: yup
    .string()
    .matches(/^[0-9]{8}$/, "الرجاء التثبت من رقم بطاقة التعريف الوطنية")
    .required("الرجاء التثبت من رقم بطاقة التعريف الوطنية"),
  phone: yup
    .string()
    .matches(
      /^\d{8}$/,
      "الرجاء التثبت من إدخال رقم الهاتف على النحو التالي: 22013013"
    )
    .required("الرجاء التثبت من إدخال رقم الهاتف"),
  code: yup
    .string()
    .matches(
      /^\d{4}$/,
      "الرجاء التثبت من إدخال رقم الهاتف على النحو التالي: 2201"
    )
  });

const useStyles = makeStyles((theme) => ({
  item: {
    padding: 15,
    width: '100%',
  },
  labelRoot: {
    right: 0,
    fontSize: 16,
  },
  shrink: {
    transformOrigin: "top right",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontSize: 18,
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    transition: "0.5s",
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: "#fff",
    },
  },
}));

const FormModal = (props) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      cin: "",
      phone: "",
      trainingPromotion: 1,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        props.sendReservation(values)
    },
  });
  const { success, error, alertMessage } = props.reservation;
  console.log(props.reservation)

  return (
    <form onSubmit={formik.handleSubmit}>
        <Grid container>
          <h2 style={{textAlign:'center', width:'100%'}}>الرجاء إدخال المعطيات التالية</h2>
            <Grid 
              className={classes.item}
              item 
              sm={12} 
            >
            <TextField
                InputLabelProps={{
                classes: {
                    root: classes.labelRoot,
                    shrink: classes.shrink,
                },
                }}
                fullWidth
                dir='rtl'
                type='text'
                id='cin'
                name='cin'
                label='ب٠ت٠و'
                value={formik.values.cin}
                onChange={formik.handleChange}
                error={formik.touched.cin && Boolean(formik.errors.cin)}
                helperText={formik.touched.cin && formik.errors.cin}
            />
            </Grid>
            <Grid 
              className={classes.item}
              item 
              sm={12} 
            >
              <TextField
                  InputLabelProps={{
                  classes: {
                      root: classes.labelRoot,
                      shrink: classes.shrink,
                  },
                  }}
                  fullWidth
                  dir='rtl'
                  type='text'
                  id='phone'
                  name='phone'
                  label='الهاتف'
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}>
              أرسل
          </Button>
    </form>
  );
}

const mapStateToProps = (state) => ({
  reservation: state.reservation,
});

const mapActionsToProps = {
  sendReservation,
};
export default connect(mapStateToProps, mapActionsToProps)(FormModal);