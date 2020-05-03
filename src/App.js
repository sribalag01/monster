import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import Search from './components/Search/Search';

class App extends Component {
  state = {
    monster: [],
    searchField: ''
  }
  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(user => this.UpdateApi(user))
  }
  UpdateApi = (user) => {
    this.setState({
      monster: user,

    });
  }
  handleChange = (e) => {
    this.setState({
      searchField: e.target.value,
    })
  }
  render() {
    const { monster, searchField } = this.state;
    const filter = monster.filter(fil => {
      return fil.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="container">
        <Search handleChange={this.handleChange}></Search>
        <CardList transfer={filter}></CardList>
      </div>

    )
  }
}

export default App;
