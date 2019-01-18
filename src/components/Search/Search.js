import React, { Component } from 'react';
import './Search.css';
import axios from 'axios';

// Material-UI
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';

class Search extends Component {

  state = {
    search: '',
    results: null,
    selectedBeer: null
  }

  handleSubmit = () => {
    axios.get(`https://api.punkapi.com/v2/beers/?beer_name=${this.state.search}`)
    .then((response) => {
      console.log(response);
      this.setState({
        results: response.data
      })
    })
    .catch((error) => {
      console.log(error);
    })
    this.setState({
      search: '',
      selectedBeer: null
    })
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleClick = (beer) => {
    this.setState({
      results: null,
      selectedBeer: beer
    })
  }

  render() {

    const { classes } = this.props;

    return (
      <div>
        <div className='center'>
          <form onSubmit={this.handleSubmit}>
          <TextField  
          variant='outlined' 
          className={classes.root}
          type='search'
          placeholder='Search for a beer by name'
          onChange={this.handleChange}
          value={this.state.search}
          name='search'
          />
          </form>
          <Button onClick={this.handleSubmit} variant='outlined'>Submit</Button>
        </div>
        <div className='bottom'>
          {this.state.results &&
            <div className={classes.selection}>
              {this.state.results.map(beer => (
                <Paper key={beer.name}>
                  <Card  
                  className={classes.card} 
                  onClick={() => this.handleClick(beer)}
                  >
                      <h2>{beer.name}</h2>
                  </Card>
                </Paper>
              ))}
            </div>
          }
        </div>
        <div>
          {this.state.selectedBeer &&
          <div>
            <img src={this.state.selectedBeer.image_url} height="200" width="auto"/>
            <ul>
              <li>{this.state.selectedBeer.name}</li>
              <li>{this.state.selectedBeer.abv}</li>
              {/* <li>{this.state.selectedBeer}</li>
              <li>{this.state.selectedBeer}</li> */}
            </ul>
          </div>
          }
        </div>
      </div>
    );
  }
};

const styles = {
  root: {
    width: 500,
  },
  card: {
    width: 200,
    height: 200,
    backgroundColor: 'gray'
  },
  list: {
    display: 'flex',
    justifyContent: 'flexStart'
  },
  selection: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  }

};


export default withStyles(styles)(Search);
