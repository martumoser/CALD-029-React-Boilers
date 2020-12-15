import React, { Component } from 'react';
import AddItem from './components/AddItem';
import Header from './components/Header';
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

  // Add New Item
  addItem = ([description,boilerType, building, maintenancePeriod, hourMaintenanceCost, hourEventualCost]) => {
    const newItem = {
      id: Math.floor(Math.random() * 100),
      description,
      boilerType,
      building,
      maintenancePeriod,
      hourMaintenanceCost,
      hourEventualCost
    }
    this.setState({ boilers: [...this.state.boilers, newItem] });
  }


  render() {
    return (
        <div className="App">
          <Header />
          <Table boilers={this.state.boilers} delItem={this.delItem} />
          <AddItem addItem={this.addItem} />
        </div>
    );
  }
}
export default App;
