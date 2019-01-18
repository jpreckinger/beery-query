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

  //on form submission, axios calls the API using the search property
  //in state, then sets the response to the results property in state
  //and clears te search bar and sets the selected beer property back to null
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

  // when something is typed in the search bar, this makes the input
  // controlled by state.
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  //when the user clicks on one of the results return by the API,
  //this clears the results property and sets the selectedBeer property
  //to the beer that has been clicked
  handleClick = (beer) => {
    this.setState({
      results: null,
      selectedBeer: beer
    })
  };

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
                <Paper key={beer.name} style={{margin: '10px'}}>
                  <Card  
                  className={classes.card} 
                  onClick={() => this.handleClick(beer)}
                  >
                      <h2 style={{display: 'flex', justifyContent: 'center', margin: '10px' }}>{beer.name}</h2>
                  </Card>
                </Paper>
              ))}
            </div>
          }
        </div>
        <div className='position'>
          {this.state.selectedBeer &&
          <div className='selected'>
            <Paper>
              <Card className={classes.single}>
                <img 
                src={this.state.selectedBeer.image_url}
                alt={this.state.selectedBeer.description} 
                height="200" width="auto" style={{margin: 'auto', marginTop: '15px'}}/>
                <ul>
                  <li>{this.state.selectedBeer.name}</li>
                  <li>"{this.state.selectedBeer.tagline}"</li>
                  <li>Abv: {this.state.selectedBeer.abv}</li>
                  <li>First Brewed: {this.state.selectedBeer.first_brewed}</li>
                </ul>
              </Card>
            </Paper>
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
    height: 150,
    backgroundColor: 'blanchedalmond'
  },
  selection: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  single: {
    backgroundColor: 'blanchedalmond',
    minWidth: 300,
    display: 'inline-grid',
    justifyContent: 'center'
  }

};


export default withStyles(styles)(Search);
