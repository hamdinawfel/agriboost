import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Modal } from '@material-ui/core';
import FormModal from './FormModal';
import FormValidation from './FormValidation';
import SuccessModal from './SuccessModal';
import { connect, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  ModalButton: {
    margin: theme.spacing(1, 0, 1, 1),
    fontSize: 18,
    color: "#fff",
    width: '10vw',
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    transition: "0.5s",
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: "#fff",
    },
  },
  paper: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    margin: 'auto',
    padding: '2rem',
    width: '450px',
    height: '330px',
    [theme.breakpoints.down("sm")]: {
      width: '350px',
      height: '350px',
    },
    [theme.breakpoints.down("xs")]: {
      width: '250px',
      height: '350px',
    },
    backgroundColor: 'white',
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

const CardModal = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const { success, alertMessage } = props.reservation;
  const isSuccess = props.confirmation.success;
  const isValid = alertMessage==="الرجاء تأكيد التسجيل";


  const handleOpen = () => {
    const sessionNumber = props.session === 'الدورة الأولى' ? 1 : props.session === 'الدورة الثانية' ? 2 : 3;
    setOpen(true);
    localStorage.setItem("session", sessionNumber)
    dispatch({type: "RESET"})
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
        <div>
          <Button 
            className={classes.ModalButton} 
            onClick={handleOpen}>
          تسجيل
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div className={classes.paper}>
              {isSuccess ? 
                <SuccessModal/> 
              :
              success || isValid ? (
                <FormValidation/>
                ) : (
                  <FormModal/>
                  )
                }
            </div>
          </Modal>
        </div>
  );
}

const mapStateToProps = (state) => ({
  reservation: state.reservation,
  confirmation: state.confirmation,
});

export default connect(mapStateToProps)(CardModal);
