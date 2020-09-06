import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// material ui components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

// custom components
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import Nofund from './components/Nofound/Nofund';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function App() {
  const classes = useStyles();

  return (
    <>
      <Router>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Link to="/" style={{ color: '#fff' }}>
                <Button color="inherit">Home</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </div>
        {/* navbar end */}

        <div className='container'>
          <Switch>
            <Route exact path="/post-details/:postId">
              <PostDetails></PostDetails>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Router path='*'>
              <Nofund></Nofund>
            </Router>
          </Switch>
        </div>
        
      </Router>
      <footer style={{ textAlign: 'center', background: '#bdbdbd', padding: '10px', marginTop: '20px' }}>
        <p>&copy; copyright AR-Arzu</p>
      </footer>
    </>
  );
}

export default App;
