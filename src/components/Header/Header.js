import React, { Component } from 'react';

// Material-UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

class Nav extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className={classes.nav} position="fixed">
          <Toolbar>
            <Typography className={classes.title} variant="h4">
              Beery_Query
            </Typography>
  
            <div className={classes.grow} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
};

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  image: {
    height: '2.125rem',
    marginRight: 10
  },
  nav: {
    overflow: 'hidden',
    backgroundColor: 'maroon',
  },
  title: {
    color: 'white',
    display: 'inline-block'
  }
};



export default withStyles(styles)(Nav);
