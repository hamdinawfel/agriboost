import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid, TextField } from '@material-ui/core';
import { useFormik } from "formik";
import * as yup from "yup";
import { connect } from 'react-redux';
import { confirmReservation } from "../actions";


const validationSchema = yup.object({
  smsCode: yup
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
  alert: {
    width: '100%',
    textAlign: 'right',
    marginRight: '10px',
    fontSize: 16,
    color: 'red',
  },
}));

const FormValidation = (props) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      smsCode: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
        props.confirmReservation({...values, cin: localStorage.getItem("cin")})
    },
  });

  const { alertMessage } = props.confirmation;


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
                    id='smsCode'
                    name='smsCode'
                    label="الرقم السري"
                    value={formik.values.smsCode}
                    onChange={formik.handleChange}
                    error={formik.touched.smsCode && Boolean(formik.errors.smsCode)}
                    helperText={formik.touched.smsCode && formik.errors.smsCode}
                />
            </Grid>
            {alertMessage && <p className={classes.alert}>{alertMessage}</p>}
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
  confirmation: state.confirmation,
});

const mapActionsToProps = {
  confirmReservation,
};
export default connect(mapStateToProps, mapActionsToProps)(FormValidation);