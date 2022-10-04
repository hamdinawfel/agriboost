import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid, TextField } from '@material-ui/core';
import { useFormik } from "formik";
import * as yup from "yup";
import { connect } from 'react-redux';
import { confirmReservation } from "../actions";


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
    .required(),
  });

const useStyles = makeStyles((theme) => ({
  form:{
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center',
  },
  textField: {
    width: "100%",
  },
  item: {
    padding: 15,
    width: "100%",
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

const FormValidation = (props) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        console.log(values)
        props.confirmReservation(values)
    },
  });

  const { success, error, alertMessage } = props.validation;


  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Grid container>
          <h2 style={{textAlign:'center', width:'100%'}}>الرجاء إدخال  الرقم السري</h2>
            <Grid item lg={12} className={classes.item}>
                <TextField
                    InputLabelProps={{
                    classes: {
                        root: classes.labelRoot,
                        shrink: classes.shrink,
                    },
                    }}
                    className={classes.textField}
                    dir='rtl'
                    type='text'
                    id='code'
                    name='code'
                    label="الرقم السري"
                    value={formik.values.code}
                    onChange={formik.handleChange}
                    error={formik.touched.code && Boolean(formik.errors.code)}
                    helperText={formik.touched.code && formik.errors.code}
                />
            </Grid>
        </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}>
            تأكيد
          </Button> 
          
    </form>
  );
}

const mapStateToProps = (state) => ({
  validation: state.validation,
});

const mapActionsToProps = {
  confirmReservation,
};
export default connect(mapStateToProps, mapActionsToProps)(FormValidation);