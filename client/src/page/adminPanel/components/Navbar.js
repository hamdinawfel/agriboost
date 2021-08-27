import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import clsx from 'clsx';
//notification
import io from 'socket.io-client';
//M-UI
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
//M-UI ICONS
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import StoreIcon from '@material-ui/icons/Store';

//assets
import notificationSound from '../assets/notification.mp3'

//Redux
import { connect } from 'react-redux';
import { logoutUser } from '../auth/actions';
const ENDPOINT = `${process.env.REACT_APP_API_URL}`; 
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    position:'relative',
    zIndex:2
  },
  container: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 150,
    // marginTop:200
  },
  badge:{

  },
  animation:{
    animation: `$animate  0.6s linear infinite`,
    // animationIterationCount: 1
  },
  "@keyframes animate": {
    '0%':{
      transform : 'scale(1)',
    },
    '50%':{
      transform : 'scale(1.5)',
        
    },
    '100%':{
      transform : 'scale(1)',
    }
  },
}));
//sound
const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
      // console.log(`${process.env.REACT_APP_SOCKET_IO_ENDPOINT}`) //FIXME:
    };
  }, []);

  return [playing, toggle];
};

function Navbar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
 
  const handleLogOut = () => {
    props.logoutUser()
  }
   //notification
   const [notifications, setNotifications] = useState(0);
   const [notify, setNotify] = useState(false) 
   const [playing, toggle] = useAudio(notificationSound);
 
   useEffect(() => {
     const socket = io(ENDPOINT); //
     console.log('io')
     socket.on("newOrder", data => {
       if(data)  {
         setNotifications('New')
         setNotify(true)
         toggle()
       }     
     });
   }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Link to='/' style={{ color:'inherit', textDecoration:'none'}} className={classes.title}>
            <Typography component="h1" variant="h6" color="inherit">
              Dinari Green Life
            </Typography>
          </Link>
          <Link to='/orders' style={{ color:'inherit', textDecoration:'none'}}>
            <IconButton color="inherit">
              <Badge badgeContent={notifications} color="secondary" className={clsx(classes.badge, {[classes.animation]:  notify})}>
                <NotificationsIcon />
              </Badge>
            </IconButton>
           </Link>
          <IconButton color="inherit" onClick={handleClick}>
            <Avatar>
              <PermIdentityIcon />
            </Avatar>
          </IconButton>
          <Menu
             style={{ marginTop : 50}}
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to='/profile' style={{ color:'inherit', textDecoration:'none'}}>
              <MenuItem onClick={() =>setOpen(false)}>Mon Profile</MenuItem>
             </Link>
            <MenuItem onClick={handleLogOut}>Déconnexion</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
            <Link to='/' style={{ color:'inherit', textDecoration:'none'}}>
                <ListItem button >
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
            </Link>
            <Link to='/orders' style={{ color:'inherit', textDecoration:'none'}}>
              <ListItem button>
                  <ListItemIcon>
                      <AttachMoneyIcon />
                  </ListItemIcon>
                  <ListItemText primary="Commandes" />
              </ListItem>
            </Link>
            <Link to='/catalog' style={{ color:'inherit', textDecoration:'none'}}>
                <ListItem button>
                    <ListItemIcon>
                        <LocalOfferIcon />
                    </ListItemIcon>
                    <ListItemText primary="Catalogue" />
                </ListItem>
            </Link>
            <Link to='/stock' style={{ color:'inherit', textDecoration:'none'}}>
                <ListItem button>
                    <ListItemIcon>
                        <StoreIcon />
                    </ListItemIcon>
                    <ListItemText primary="Gestion de stock" />
                </ListItem>
            </Link>
            <Link to='/category' style={{ color:'inherit', textDecoration:'none'}}>
              <ListItem button>
                  <ListItemIcon>
                      <TurnedInIcon />
                  </ListItemIcon>
                  <ListItemText primary="Categories" />
              </ListItem>
            </Link>
            <Link to='/subscribers' style={{ color:'inherit', textDecoration:'none'}}>
              <ListItem button>
                  <ListItemIcon>
                      <ContactMailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Abonnés" />
              </ListItem>
            </Link>
        </List>
        {props.user.user.root?
        <Link to='/users' style={{ color:'inherit', textDecoration:'none'}}>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Administrateur" />
        </ListItem>
   </Link>:null}
      </Drawer>
    </div>
  );
}
const mapStateToProps = (state) => ({
  orders : state.orders,
  user: state.user
});
const mapActionsToProps = {
  logoutUser,
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(Navbar);