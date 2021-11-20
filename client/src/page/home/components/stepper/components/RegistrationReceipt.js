import React, { useState } from "react";
import moment from "moment";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CloseIcon from "@material-ui/icons/Close";
import PrintIcon from "@material-ui/icons/Print";
import banner from "../../../../../assets/banner.jpg";
import { connect } from "react-redux";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },
  myButton: {
    display: "block",
    margin: "0 auto",
    fontSize: 20,
    width: "300px",
    fontWeight: 600,
    padding: "10px 50px",
    borderRadius: 0,
    marginTop: 60,
    marginBottom: 30,
    color: theme.palette.primary.main,
    backgroundColor: "#fff",
    border: `2px solid ${theme.palette.primary.main}`,
    letterSpacing: 0.8,
    textTransform: "capitalize",
    transition: "0.5s",
    "&:hover": {
      boxShadow: "-5px 10px 15px rgba(91, 137, 158, 0.8)",
      color: theme.palette.primary.main,
      border: `2px solid ${theme.palette.primary.main}`,
      backgroundColor: "#fff",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
      fontWeight: 600,
      width: "100%",
      marginTop: 30,
    },
  },
  header: {
    fontWeight: 900,
    fontSize: 25,
    textAlign: "center",
  },
  body: {
    textAlign: "right",
    flexDirection: "right",
    margin: "0 10px",
  },
  footer: {
    textAlign: "right",
    fontWeight: 900,
  },
}));

function RegistrationReceipt(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  // DIALOG
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handlePrint = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const femalSexe = "للسيدة";
  const malSexe = "للسيد";
  return (
    <div className={classes.root} dir='rtl'>
      <Button className={classes.myButton} onClick={handlePrint}>
        طباعة وصل التسجيل
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={props.condidate.success === "success" && open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'>
        <div
          style={{
            display: "flex",
            boxShadow: "0px 0px 8px rgba(91, 137, 158, 0.3)",
            alignItems: "center",
            marginBottom: 20,
          }}>
          <IconButton onClick={handleClose} style={{ marginLeft: 20 }}>
            <CloseIcon />
          </IconButton>
          <DialogTitle
            style={{ textAlign: "center" }}
            id='responsive-dialog-title'>
            {" طباعة وصل تسجيل بمشروع أڨريبوست"}
          </DialogTitle>
        </div>
        <DialogContent>
          <div ref={ref} style={{ display: "block", margin: "0 auto" }}>
            <img src={banner} style={{ width: "100%" }} alt='Agriboost' />
            <p className={classes.header}>{"وصل تسجيل بمشروع  أڨريبوست"}</p>
            <p className={classes.body}>
              تمت عملية التسجيل الأولي بمشروع أڨريبوست بنجاح
            </p>
            <p className={classes.body}>
              {props.condidate.data.sexe === "أنثى" ? femalSexe : malSexe}
              <span style={{ fontWeight: 600, margin: "0 10px" }}>
                {props.condidate.printData.firstName} {"  "}{" "}
                {props.condidate.printData.lastName}{" "}
              </span>
              <span className={classes.body}>
                {"صاحب  بطاقة  التعريف الوطنية رقم"}
              </span>
              <span style={{ fontWeight: 600, margin: "0 10px" }}>
                {props.condidate.printData.cin}{" "}
              </span>
            </p>
            <p className={classes.body}>
              <span dir='ltr'>
                {moment(new Date()).format("YYYY-MM-DD HH:MM:SS")}{" "}
              </span>
              بتاريخ
            </p>
          </div>
          <Pdf
            targetRef={ref}
            filename={`وصل تسجيل بمشروع أڨريبوست  للسيد(ة) ${props.condidate.printData.firstName}  ${props.condidate.printData.lastName}`}
            scale={fullScreen ? 1.6 : 1.4}
            x={fullScreen ? 40 : 0}
            y={10}>
            {({ toPdf }) => (
              <Button className={classes.myButton} onClick={toPdf}>
                <PrintIcon
                  style={{
                    verticalAlign: "middle",
                    marginRight: 20,
                    marginTop: -5,
                  }}
                />{" "}
                طباعة
              </Button>
            )}
          </Pdf>
        </DialogContent>
      </Dialog>
    </div>
  );
}
const mapStateToProps = (state) => ({
  condidate: state.condidate,
});

export default connect(mapStateToProps, null)(RegistrationReceipt);
