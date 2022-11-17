import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid, TextField } from '@material-ui/core';
import { useFormik } from "formik";
import * as yup from "yup";
import { connect } from 'react-redux';
import { sendInscription } from "../actions";



const validationSchema = yup.object({
  cin: yup
    .string()
    .matches(/^[0-9]{8}$/, "الرجاء التثبت من رقم بطاقة التعريف الوطنية")
    .required("الرجاء التثبت من رقم بطاقة التعريف الوطنية"),
  });

const useStyles = makeStyles((theme) => ({
  item: {
    padding: 0,
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
  alert: {
    width: '100%',
    textAlign: 'right',
    marginRight: '10px',
    fontSize: 16,
    color: 'red',
  },
}));

const OrientationForm = (props) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      cin: "",
      sector: localStorage.getItem("sector"),
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      props.sendInscription(values)
      localStorage.setItem("cin", values.cin)
      console.log(values)
    },
  });
  const { alertMessage, loading } = props.inscription;

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
                label='رقم بطاقة التعريف الوطنية'
                value={formik.values.cin}
                onChange={formik.handleChange}
                error={formik.touched.cin && Boolean(formik.errors.cin)}
                helperText={formik.touched.cin && formik.errors.cin}
            />
            </Grid>
            {alertMessage && <p className={classes.alert}>{alertMessage}</p>}
          </Grid>
          <Button
            type='submit'
            disabled={loading}
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
  inscription: state.inscription,
});

const mapActionsToProps = {
  sendInscription,
};
export default connect(mapStateToProps, mapActionsToProps)(OrientationForm);