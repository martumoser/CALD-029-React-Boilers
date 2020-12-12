import React, { Component } from 'react';
import ListItems from './components/ListItems';
import AddItem from './components/AddItem';
import Header from './components/layout/header';

import './App.css';

class App extends Component {
  state = {
    listitems: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }
  
  // Toggle complete
  markComplete = (id) => {
    this.setState( { listitems: this.state.listitems.map(listitem => {
      if (listitem.id === id) {
        listitem.completed = !listitem.completed
      }
      return listitem;
    })})
  }

  // Delete Item
  delItem = (id) => {
    this.setState({listitems: [...this.state.listitems.filter(listitem => listitem.id
    !== id)] });
  }
  
  // Add New Item
  addItem = (title) => {
    const newItem = {
      id: 4,
      title,
      completed: false
    }
    this.setState({ listitems: [...this.state.listitems, newItem] })
  }
  render() {
    return (
        <div className="App">
            <Header />
            <AddItem  addItem={this.addItem} />
            <ListItems listitems={this.state.listitems} markComplete={this.markComplete} 
            delItem = {this.delItem} />
        </div>
    );
  }
}

export default App;
