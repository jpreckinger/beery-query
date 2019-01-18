import React, { Component } from 'react';
import './Search.css';

// Material-UI
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class Search extends Component {

  render() {

    const { classes } = this.props;

    return (
      <div className='center'>
        <TextField  
        variant='outlined' 
        className={classes.root}
        type='search'
        placeholder='Search'
        />
        <Button variant='outlined'>Submit</Button>
      </div>
    );
  }
};

const styles = {
  root: {
    width: 500,
  },
};


export default withStyles(styles)(Search);
