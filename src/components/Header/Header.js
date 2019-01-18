import React, { Component } from 'react';

// Material-UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

class Header extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar className={classes.bar} position="fixed">
          <Toolbar>
            <Typography className={classes.title} variant="h4">
              Beery_Query
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
};

const styles = {
  bar: {
    overflow: 'hidden',
    backgroundColor: 'maroon',
  },
  title: {
    color: 'white',
    display: 'inline-block'
  }
};



export default withStyles(styles)(Header);
