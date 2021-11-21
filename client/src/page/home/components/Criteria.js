import React from "react";
//Mui
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Title from "../../../utils/Title";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DateRangeIcon from "@material-ui/icons/DateRange";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

//Start Item
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    top: -600,
    padding: 100,
    [theme.breakpoints.down("md")]: {
      top: -500,
      padding: 10,
    },
    [theme.breakpoints.down("sm")]: {
      top: "-50px",
      width: "100%",
      padding: 0,
    },
  },
  cardGrid: {
    padding: theme.spacing(2),
  },
  card: {
    display: "flex",
    margin: "0 auto",
    height: "100%",
    textAlign: "center",
    flexDirection: "column",
    maxWidth: 300,
  },
  title: {
    fontWeight: 600,
    opacity: "0.95",
    textAlign: "center",
  },
  description: {
    fontSize: "1.2em",
  },
}));
function Item(props) {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={4} style={{ margin: "40px 0 80px 0" }}>
      <Card className={classes.card} variant='outlined'>
        <div
          syle={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          {props.icon}
        </div>
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='h2'
            className={classes.title}>
            {props.title}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
            className={classes.description}>
            {props.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
//end item
const cereteriaList = [
  {
    id: 1,
    title: "الفئة العمرية",
    description: "من 18 إلي 35 سنة",
    icon: <DateRangeIcon style={{ margin: 20, fontSize: 50 }} />,
  },
  {
    id: 2,
    title: "الوضعية الإجتماعية",
    description:
      "عاطل عن العمل ، وضعية إجتماعية خاصة, أبناء على مقاعد الدراسة ٠٠٠",
    icon: (
      <SentimentVeryDissatisfiedIcon style={{ margin: 20, fontSize: 50 }} />
    ),
  },
  {
    id: 3,
    title: "مكان الإقامة",
    description: "القيروان  الشمالية و الجنوبية ، بوحجلة أو حفوز",
    icon: <LocationOnIcon style={{ margin: 20, fontSize: 50 }} />,
  },
];

export default function Criteria() {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Title title='شروط الترشح' />
      <Grid container style={{ marginTop: 50 }}>
        {cereteriaList.map((item) => (
          <Item
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </Grid>
    </Grid>
  );
}
