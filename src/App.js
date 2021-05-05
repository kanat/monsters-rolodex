import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: '',
    };
    
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  
  handleChange = event => {
    const userInput = event.target.value.toLowerCase();
    this.setState({ searchField: userInput });
  };
  
  render() {
    const { monsters } = this.state;
    const userInput = this.state.searchField.toLowerCase();
    const filteredMonsters = monsters.filter(monster => {
        return monster.name.toLowerCase().includes(userInput);
      },
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters" handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
      
      </div>
    );
  }
  
}

export default App;
