import React, { Component } from 'react';
import AddItem from './components/AddItem';
import Header from './components/layout/header';
import Table from './components/Table'
import boilersData from './data/boilers'

import './App.css';

class App extends Component {
  state = {
    boilers: boilersData
  }

  // Delete Item
  delItem = (id) => {
    this.setState({
      boilers: [...this.state.boilers.filter(boiler => boiler.id !== id)] 
    });
  }

  render() {
    return (
        <div className="App">
            <Header />
            <AddItem addItem={this.addItem} />
            <Table boilers={this.state.boilers} delItem={this.delItem} />
        </div>
    );
  }
}
export default App;
