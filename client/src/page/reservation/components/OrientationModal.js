import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Modal } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import OrientationForm from './OrientationForm';
import OrientationSuccess from './OrientationSuccess';
import { sendInscription } from "../actions";
import { useHistory } from "react-router-dom";

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
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    margin: 'auto',
    padding: '2rem',
    width: '450px',
    borderRadius: '10px',
    [theme.breakpoints.down("sm")]: {
      width: '350px',
    },
    [theme.breakpoints.down("xs")]: {
      width: '250px',
    },
    backgroundColor: 'white',
    border: `1px solid ${theme.palette.primary.main}`,
  },
  close: {
    color: 'gray',
    cursor: 'pointer',
    margin: '-1rem 0 0 -1rem',
  },
}));

const OrientationModal = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);



  const handleOpen = () => {
    const sector = props.sector === 'عام' ? 1 : props.sector === 'خاص' ? 2 : 3;
    // const values = {
    //   cin: localStorage.getItem("cin"),
    //   sector
    // }
    // props.sendInscription(values)
    // setOpen(true);
    localStorage.setItem("sector", sector)
    history.push('/reservation')
  };

  const handleClose = () => {
    setOpen(false);
    dispatch({type: "RESET"})
    history.push('/');
  };

  const handleCloseModal = () => {
    setOpen(false);
    dispatch({type: "RESET"});
    history.push('/');
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
            className={classes.modal}
            onClose={handleCloseModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div className={classes.paper}>
              <div className={classes.close}>
                <CloseIcon onClick={handleClose}/>
              </div>
              <OrientationSuccess/> 
            </div>
          </Modal>
        </div>
  );
}

const mapStateToProps = (state) => ({
  inscription: state.inscription,
});

const mapActionsToProps = {
  sendInscription,
};

export default connect(mapStateToProps, mapActionsToProps)(OrientationModal);
