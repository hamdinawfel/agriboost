import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
//mui icons
import DevicesIcon from "@material-ui/icons/Devices";
import SearchIcon from "@material-ui/icons/Search";
import FormatListNumberedRtlIcon from "@material-ui/icons/FormatListNumberedRtl";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import GradeIcon from "@material-ui/icons/Grade";

import Title from "../../../utils/Title";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    top: -680,
    padding: 100,
    [theme.breakpoints.down("md")]: {
      top: -500,
      padding: 10,
    },
    [theme.breakpoints.down("sm")]: {
      top: "-70px",
      width: "100%",
      padding: 0,
    },
  },
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  stepTitle: {
    textAlign: "right",
    fontSize: "1.5rem",
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  stepSubtitle: {
    textAlign: "right",
  },
  stepNumber: {
    fontSize: "1.8rem",
    fontWeight: 600,
    marginLeft: 10,
    backgroundColor: "rgba(0,0,0,0.3)",
    color: "#fff",
    height: "32px",
    width: "32px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const steps = [
  {
    stepNumber: 1,
    stepTitle: "التسجيل",
    stepSubtitle: "من 13 إلى 30 نوفمبر 2021",
    stepIcon: <DevicesIcon fontSize='large' />,
  },
  {
    stepNumber: 2,
    stepTitle: "التنقيط",
    stepSubtitle: "إحتساب وترتيب المترشحين حسب ما تم التصريح به",
    stepIcon: <FormatListNumberedRtlIcon fontSize='large' />,
  },
  {
    stepNumber: 3,
    stepTitle: "النتائج الأولية",
    stepSubtitle: "الإعلان عن قائمة المقبولين أوليا و قائمة الإنتظار",
    stepIcon: <StarHalfIcon fontSize='large' />,
  },
  {
    stepNumber: 4,
    stepTitle: "إيداع الوثائق",
    stepSubtitle:
      "إيداع الوثائق من قبل المقبولين أوليا للتثبت من صحة المعلومات المصرح بها",
    stepIcon: <SearchIcon fontSize='large' />,
  },
  {
    stepNumber: 5,
    stepTitle: "النتائج النهائية",
    stepSubtitle: "التصريح بالقائمة النهائية للمقبولين",
    stepIcon: <GradeIcon fontSize='large' />,
  },
  {
    stepNumber: 6,
    stepTitle: "التعاقد",
    stepSubtitle: "إبرام العقود مع المقبولين نهائيا",
    stepIcon: <BusinessCenterIcon fontSize='large' />,
  },
];
function StepItem({ step }) {
  const classes = useStyles();

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color='primary' variant='outlined'>
          {step.stepIcon}
        </TimelineDot>
        {step.stepNumber !== 6 ? <TimelineConnector /> : null}
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant='h6' component='h1' className={classes.stepTitle}>
            <span className={classes.stepNumber}>{step.stepNumber}</span>
            {step.stepTitle}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            className={classes.stepSubtitle}>
            {step.stepSubtitle}
          </Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function ProjectTimeline() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title title='مراحل المشروع' />
      <Timeline align='alternate' style={{ marginTop: 40 }}>
        {steps.map((item) => (
          <StepItem step={item} key={item.stepNumber} />
        ))}
      </Timeline>
    </div>
  );
}
