import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
//icons
import DevicesIcon from '@material-ui/icons/Devices';
import SearchIcon from '@material-ui/icons/Search';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import StarsIcon from '@material-ui/icons/Stars';
import WorkIcon from '@material-ui/icons/Work';
import SpeedIcon from '@material-ui/icons/Speed';
import ReorderIcon from '@material-ui/icons/Reorder';
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import GradeIcon from '@material-ui/icons/Grade';
//
import Title from '../../../utils/Title'

const useStyles = makeStyles((theme) => ({
  root:{
    position:'relative',
    top:-680,
    padding:100,
    [theme.breakpoints.down('md')]: {
      top:-500,
       padding:10
      },
  [theme.breakpoints.down('sm')]: {
      top:'-70px',
      width:'100%',
     padding:0
    },
  },
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  stepTitle:{ 
    textAlign: 'right',
    
    fontSize:'1.5rem'
  },
  stepSubtitle:{ 
    textAlign: 'right'
  }
}));

export default function ProjectTimeline() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title title="مراحل المشروع" />
      <Timeline align="alternate" style={{marginTop:40}}>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  <DevicesIcon  fontSize="large"/>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1" className={classes.stepTitle}>
                  التسجيل
                  </Typography>
                  <Typography variant="body2" color="textSecondary" className={classes.stepSubtitle}>
                  من 15  إلى 31 أوت 2021
                </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  <FormatListNumberedRtlIcon fontSize="large" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1" className={classes.stepTitle}>
                  التنقيط
                  </Typography>
                  <Typography  color="textSecondary" className={classes.stepSubtitle}>
                  إحتساب وترتيب النقاط حسب ما تم التصريح به
                </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  <StarHalfIcon  fontSize="large"/>
                </TimelineDot>
                <TimelineConnector  />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1" className={classes.stepTitle}>
                  النتائج الأولية
                  </Typography>
                  <Typography  color="textSecondary" className={classes.stepSubtitle}>
                  الإعلان عن قائمة المقبولين أوليا و قائمة الإنتظار
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  <SearchIcon  fontSize="large"/>
                </TimelineDot>
                <TimelineConnector  />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1" className={classes.stepTitle}>
                  إداع الوثائق
                  </Typography>
                  <Typography  color="textSecondary" className={classes.stepSubtitle}>
                  إداع الوثائق من قبل القائمة الأولية للتثت من صحة المصرح به
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary"  variant="outlined">
                  <GradeIcon fontSize="large"/>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1" className={classes.stepTitle}>
                  النتائج النهائية
                  </Typography>
                  <Typography  color="textSecondary" className={classes.stepSubtitle}>
                  قبول أصحاب الوثائق المدعمة للملفات
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  <BusinessCenterIcon fontSize="large"/>
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1" className={classes.stepTitle}>
                  التعاقد
                  </Typography>
                  <Typography  color="textSecondary" className={classes.stepSubtitle}>
                  إبرام العقود مع المقبولين نهائيا
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
         
    </div>
  );
}
