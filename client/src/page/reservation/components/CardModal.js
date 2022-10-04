import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Modal } from '@material-ui/core';
import FormModal from './FormModal';
import FormValidation from './FormValidation';

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
    [theme.breakpoints.down("sm")]: {
      width: '450px',
      height: '350px',
    },
    height: '330px',
    backgroundColor: 'white',
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

const CardModal = ({session}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [valid, setValid] = useState(false)


  const handleOpen = () => {
    setOpen(true);
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
              {valid ? (
                <FormValidation/>
              ) : (
                <FormModal 
                  valid={valid} 
                  setValid={setValid} 
                  session={session}
                />
              )}
            </div>
          </Modal>
        </div>
  );
}

export default CardModal