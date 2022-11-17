import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardModal from './CardModal';

const useStyles = makeStyles({
  root: {
    borderColor: '#00a35c'
  },
  title: {
    fontSize: 28,
    textAlign: 'right',
    marginBottom: 12,
  },
  subtitle: {
    textAlign: 'right',
    fontSize: 20,
  },
  text: {
    textAlign: 'right',
    fontSize: 16,
  },
});

const ReservationCard = ({session, period, remaining}) => {
  const classes = useStyles();

  return (
    <Card 
      className={classes.root} 
      variant="outlined"
    >
      <CardContent>
        <Typography className={classes.title}>
        {session}
        </Typography>
        {!remaining ? <></> 
        : remaining>10 ?
        <Typography className={classes.subtitle}>
          {`(متبقي ${remaining} مقعدا)`}
        </Typography>
        : 1 <remaining < 11 ?
        <Typography className={classes.subtitle}>
          {`(متبقي ${remaining} مقاعد)`}
        </Typography>
        : remaining === 1 ?
        <Typography className={classes.subtitle}>
         {`(متبقي ${remaining} مقعد وحيد)`}
        </Typography>
        :
        <Typography className={classes.subtitle}>
          {`(لا يمكن التسجيل بهذه الدورة)`}
        </Typography>
        }
        <Typography 
          className={classes.text} 
          variant="body2" 
          component="p"
        >
          {period} 
        </Typography>
      </CardContent>
      <CardActions>
        <CardModal session={session} remaining={remaining}/>
      </CardActions>
    </Card>
  );
}

export default ReservationCard