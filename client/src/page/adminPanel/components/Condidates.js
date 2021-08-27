import React , {  useEffect } from 'react';
import MaterialTable from 'material-table';
//M-UI
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
//utlils
import Navbar from './Navbar'
//Redux
import { connect } from 'react-redux';
// import { getSubscribers, deleteSubscriber } from './actions';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
    //   height: '100vh',
      overflow: 'auto',
      position:'relative',
      zIndex:2
    },
    container: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(4),
      
    },
  }));
function Condidates(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: 'Date', field: 'createdAt', render: rowData => <p>{rowData.createdAt.split('T')[0]}</p> },
      { title: 'Email',  field: 'email', editable: 'never' },
    ]
  });

//    useEffect(() => {
//        props.getSubscribers();
//    }, []);

  const handleDelete = (userId) => {
    // props.deleteSubscriber(userId);
  };
 

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <MaterialTable
                  title="List des Abonneés"
                  options={{ 
                    pageSize: 10,
                  }}
                  
                  isLoading={props.subscribers.loading}
                  columns={state.columns}
                  data={props.subscribers.data}
                  editable={{
                      onRowDelete: oldData =>
                      new Promise(resolve => {
                          handleDelete(oldData._id)
                          resolve();
                      }),
                  }}
          />
            </Container>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
//   subscribers : state.subscribers,
});
const mapActionsToProps = {
//   getSubscribers,
//   deleteSubscriber
};
export default connect(
    mapStateToProps,
    mapActionsToProps
  )(Condidates);