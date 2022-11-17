import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { BsFillExclamationCircleFill, BsCheck, BsFillCheckCircleFill } from "react-icons/bs";
import { GoAlert } from "react-icons/go";
import EmployeeAvatar from "../../../assets/employee.png";
import BusinessmanAvatar from "../../../assets/businessman.jpg";
import ThinkingAvatar from "../../../assets/thinking.png";
import OrientationModal from './OrientationModal';


const useStyles = makeStyles((theme)=>({
    container: {
      margin: "10px 0 10px 0",
      padding: "0px",
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.only("xs")]: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: "0px 25px"
      },
    },
    mapping: {
      display: "flex",
      flexDirection: "row-reverse",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column",
        width: "97vw",
      },
      [theme.breakpoints.down("xs")]: {
        width: "100vw",
      },
    },
    text: { 
      textAlign: "right",
      fontSize: "2rem",
      fontWeight: 500,
      padding: "28px 0px",
    },
    card: { 
      position: "relative",
      height: "480px",
      [theme.breakpoints.down("xs")]: {
        height: "500px",
      },
      borderColor: "#00a35c",
    },
    cardHeader: { 
      height: "90px",
      borderBottom: "4px solid #00a35c",
      padding :"8px 0px 12px 0px",
      margin: "0 0 10px 0",
    },
    title: { 
      textAlign: "right",
      fontSize: "1.6rem",
      fontWeight: 400,
    },
    cardLogoContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "70px",
        width: "70px",
        borderRadius: "50%",
    },
    cardLogo: {
        height: "100%",
        width: "100%",
        objectFit: "fill",
    },
    cardBottom: { 
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
            alignItems: "flex-start",
          },
        justifyContent: "flex-end",
        padding: "8px 0 0 0",
    },
    caution: { 
        textAlign: "right",
        fontSize: "1.5rem",
        fontWeight: 400,
        paddingRight: "15px",
    },
    icon: { 
        display: "flex",
        alignItems: "center",
        fontSize: "1.5rem",
        [theme.breakpoints.down("xs")]: {
            alignItems: "flex-start",
            paddingTop: "5px",
          },
    },
    itemContent: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
            alignItems: "flex-start",
          },
        gap: "8px",
        justifyContent: "flex-end",
        margin: "2px 0 0 0"
    },
    itemContentLong: {
        display: "flex",
        alignItems: "flex-start",
        gap: "8px",
        justifyContent: "flex-end",
        margin: "2px 0 0 0"
    },
    itemTitle: {
        textAlign: "right",
        fontSize: "1.2rem",
        fontWeight: 300,
    },
    itemIcon: {
        [theme.breakpoints.down("xs")]: {
            marginTop: "5px",
          },
    },
    itemIconLong: {
        marginTop: "5px",
    },
  }));

const Orientation = () => {
    const classes = useStyles();
  return (
    <Grid 
              container 
              className={classes.container}
            >
                <Grid 
                  item 
                  lg={12}
                >
                    <Typography className={classes.text}>:حدّد قطاعك للمشاركة في جلسات التوجيه</Typography>
                    <Grid 
                      className={classes.mapping}
                      container 
                      spacing={8}
                    >
                        <Grid 
                          item 
                          lg={4} 
                          md={12}
                          sm={12}
                          xs={12}
                        >
                        <Card variant='outlined' className={classes.card}>
                            <CardContent>
                                <Grid container className={classes.cardHeader}>
                                    <Grid item lg={4} md={4} sm={4} xs={4}>
                                        <div className={classes.cardLogoContainer}>
                                            <img src={EmployeeAvatar} className={classes.cardLogo} alt="employee" />
                                        </div>
                                    </Grid>
                                    <Grid item lg={8} md={8} sm={8} xs={8} style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                                        <Typography className={classes.title}>
                                        أنا مهتم بالعمل التعاقدي
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item lg={12} md={12} sm={12} xs={12} className={classes.itemContent}>
                                        <Typography className={classes.itemTitle}>جلسة توجيه و تقييم</Typography>
                                        <div>
                                            <BsFillCheckCircleFill className={classes.itemIcon} />
                                        </div>
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12} className={classes.itemContent}>
                                        <Typography className={classes.itemTitle}> مهن مطلوبة لدى سوق الشغل كالآتي</Typography><Typography className={classes.itemTitle}>05</Typography>
                                        <div>
                                            <BsFillCheckCircleFill className={classes.itemIcon} />
                                        </div>
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12} className={classes.itemContentLong}>
                                        <Typography className={classes.itemTitle}>مختص أشجار مثمرة (تقليم أشجار، تسميد، مداواة)</Typography>
                                        <div>
                                            <BsCheck className={classes.itemIconLong} style={{paddingRight: "20px"}} />
                                        </div>
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12} className={classes.itemContent}>
                                        <Typography className={classes.itemTitle}>مختص تركيب و صيانة شبكات ري</Typography>
                                        <div>
                                            <BsCheck className={classes.itemIcon} style={{paddingRight: "20px"}} />
                                        </div>
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12} className={classes.itemContent}>
                                        <Typography className={classes.itemTitle}>مشغل آلة إنتاج</Typography>
                                        <div>
                                            <BsCheck className={classes.itemIcon} style={{paddingRight: "20px"}} />
                                        </div>
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12} className={classes.itemContent}>
                                        <Typography className={classes.itemTitle}>مسؤول تجاري في المواد الفلاحية</Typography>
                                        <div>
                                            <BsCheck className={classes.itemIcon} style={{paddingRight: "20px"}} />
                                        </div>
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12} className={classes.itemContent}>
                                        <Typography className={classes.itemTitle}>يحدد لاحقا</Typography>
                                        <div>
                                            <BsCheck className={classes.itemIcon} style={{paddingRight: "20px"}} />
                                        </div>
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12} className={classes.itemContent}>
                                        <Typography className={classes.itemTitle} style={{color:"red"}}> التسجيل ( 02 يومين )</Typography>
                                        <div>
                                            <BsFillCheckCircleFill className={classes.itemIcon} />
                                        </div>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardActions style={{position: "absolute", left: "3px", bottom: "3px"}}>
                                <OrientationModal sector="عام"/>
                            </CardActions>
                        </Card> 
                      </Grid>
                        <Grid 
                          item 
                          lg={4} 
                          md={12}
                          sm={12}
                          xs={12}
                        >
                        <Card variant='outlined' className={classes.card}>
                            <CardContent>
                                <Grid container className={classes.cardHeader}>
                                    <Grid item lg={4} md={4} sm={4} xs={4}>
                                        <div className={classes.cardLogoContainer}>
                                            <img src={BusinessmanAvatar} className={classes.cardLogo} alt="employee" />
                                        </div>
                                    </Grid>
                                    <Grid item lg={8} md={8} sm={8} xs={8} style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                                        <Typography className={classes.title}>
                                        أنا مهتم ببعث مشروع خاص
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item lg={12} md={12} sm={12} xs={12} className={classes.itemContent}>
                                        <Typography className={classes.itemTitle}>جلسة توجيه و تقييم</Typography>
                                        <div>
                                            <BsFillCheckCircleFill className={classes.itemIcon} />
                                        </div>
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12} className={classes.itemContent}>
                                        <Typography className={classes.itemTitle}>الشروع في ريادة الأعمال</Typography>
                                        <div>
                                            <BsFillCheckCircleFill className={classes.itemIcon} />
                                        </div>
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12} className={classes.itemContent}>
                                        <Typography className={classes.itemTitle} style={{color:"red"}}>التسجيل ( من 02 إلى 04 أيام )</Typography>
                                        <div>
                                            <BsFillCheckCircleFill className={classes.itemIcon} />
                                        </div>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardActions style={{position: "absolute", left: "3px", bottom: "3px"}}>
                                <OrientationModal sector="خاص" />
                            </CardActions>
                        </Card> 
                      </Grid>
                        <Grid 
                          item 
                          lg={4} 
                          md={12}
                          sm={12}
                          xs={12}
                        >
                        <Card variant='outlined' className={classes.card}>
                            <CardContent>
                                <Grid container className={classes.cardHeader}>
                                    <Grid item lg={4} md={4} sm={4} xs={4}>
                                        <div className={classes.cardLogoContainer}>
                                            <img src={ThinkingAvatar} className={classes.cardLogo} alt="employee" />
                                        </div>
                                    </Grid>
                                    <Grid item lg={8} md={8} sm={8} xs={8} style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                                        <Typography className={classes.title}>
                                        لا أعرف  
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item lg={12} md={12} sm={12} xs={12} className={classes.itemContent}>
                                        <Typography className={classes.itemTitle}>جلسة توجيه و تقييم</Typography>
                                        <div>
                                            <BsFillCheckCircleFill className={classes.itemIcon} />
                                        </div>
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12} className={classes.itemContent} style={{alignItems:"flex-start"}}>
                                        <Typography className={classes.itemTitle}>إذا كنت لا تعرف أي قطاع تختار، يمكنك المشاركة في جميع جلسات التوجيه المهنية لتوجيه اختيارك بشكل أفضل</Typography>
                                        <div>
                                            <BsFillCheckCircleFill className={classes.itemIcon} />
                                        </div>
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12} className={classes.itemContent}>
                                        <Typography className={classes.itemTitle} style={{color:"red"}}> التسجيل ( 06 أيام )</Typography>
                                        <div>
                                            <BsFillCheckCircleFill className={classes.itemIcon} />
                                        </div>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardActions style={{position: "absolute", left: "3px", bottom: "3px"}}>
                                <OrientationModal sector="لاحقا" />
                            </CardActions>
                        </Card> 
                      </Grid>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} className={classes.cardBottom} style={{marginTop: "20px"}}>
                        <Typography className={classes.caution}>حضور الجلسات التوجيهية إلزامي</Typography>
                        <div className={classes.icon} style={{color: "blue"}}>
                            <BsFillExclamationCircleFill />
                        </div>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} className={classes.cardBottom}>
                        <Typography className={classes.caution}>أي غياب يلغي تلقائيا مشاركة الشاب في برنامج الدعم</Typography>
                        <div className={classes.icon} style={{color: "red"}}>
                            <GoAlert />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
  )
}

export default Orientation