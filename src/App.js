import React, { Component } from 'react';
import AddItem from './components/AddItem/AddItem';
import Header from './components/Header/Header';
import Table from './components/Table/Table'
import boilersData from './data/boilers'
import EditItem from './components/EditItem'

import './App.css';

class App extends Component {
  state = {
    boilers: boilersData,
    boiler: {}
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
      id: Math.floor(Math.random() * 1000),
      description,
      boilerType,
      building,
      maintenancePeriod,
      hourMaintenanceCost,
      hourEventualCost
    }
    this.setState({ boilers: [...this.state.boilers, newItem] });
  }

  // Select Item
  selectItem = (id) => {
    const boilersEdit = this.state.boilers.find(boiler => boiler.id === id)
    this.setState({ boiler: boilersEdit });
    console.log(this.state.boiler)
  }

  // Update Item
  updateItem = (boilerUpdated) => {
    console.log ('update item executed', boilerUpdated)
    const boilerPosition = this.state.boilers.map((boiler) => 
      boiler.id
    ).indexOf(boilerUpdated.id)
    const boilersUpdated = this.state.boilers;
    boilersUpdated[boilerPosition]=boilerUpdated;
    this.setState({boilers: boilersUpdated})
    console.log ('boiler position', boilerPosition)
  }

  render() {
    return (
        <div className="App">
          <Header />
          <Table boilers={this.state.boilers} delItem={this.delItem} selectItem={this.selectItem}/>
          <AddItem addItem={this.addItem} />
          <EditItem boiler={this.state.boiler} updateItem={this.updateItem} />
        </div>
    );
  }
}
export default App;
