import React, { Component } from 'react'
import '../components/AddItem/AddItem.css';

export class EditItem extends Component {
    state = {
        id: '',
        description: '',
        boilerType: '',
        building: '',
        maintenancePeriod: '',
        hourMaintenanceCost: '',
        hourEventualCost: '',
    }

    componentDidUpdate (prevProps) { 
        if (this.props.boiler !== prevProps.boiler) {
            // console.log ('cambiaron las propiedades')
            this.setState({
                id: this.props.boiler.id,
                description: this.props.boiler.description,
                boilerType: this.props.boiler.boilerType,
                building: this.props.boiler.building,
                maintenancePeriod: this.props.boiler.maintenancePeriod,
                hourMaintenanceCost: this.props.boiler.hourMaintenanceCost,
                hourEventualCost: this.props.boiler.hourEventualCost
            })
        } 
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        console.log ('submit form', this.state)
        this.props.updateItem(
            this.state
        )
    }

    onChange = (e) => this.setState({ 
        [e.target.name]: e.target.value
    });
    
    render() {
        return (
            <div className='container'>
                <div className='form-title'>
                    <h2>
                        Edit Boiler
                    </h2>
                </div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Description</label>
                        <input 
                            type='text' 
                            name='description' 
                            value = {this.state.description}
                            onChange = {this.onChange}
                        />
                    </div>
                    <div>
                        <label>Boiler Type</label>
                        <input 
                            type='text' 
                            name='boilerType' 
                            value = {this.state.boilerType}
                            onChange = {this.onChange}
                        />
                    </div>
                    <div>
                        <label>Building</label>
                        <input 
                            type='text' 
                            name='building' 
                            value = {this.state.building}
                            onChange = {this.onChange}
                        />
                    </div>
                    <div>
                        <label>Maintenance Period</label>
                        <input 
                            type='text' 
                            name='maintenancePeriod' 
                            value = {this.state.maintenancePeriod}
                            onChange = {this.onChange}
                        />
                    </div>
                    <div>
                        <label>Hour Maintenance Cost</label>
                        <input 
                            type='text' 
                            name='hourMaintenanceCost'
                            value = {this.state.hourMaintenanceCost} 
                            onChange = {this.onChange}
                        />
                    </div>
                    <div>
                        <label>Hour Eventual Cost </label>
                        <input 
                            type='text' 
                            name='hourEventualCost'
                            value = {this.state.hourEventualCost} 
                            onChange = {this.onChange}
                        />
                    </div>
                    <div>
                        <input 
                            type='submit' 
                            value='Submit'
                            className='btn'
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default EditItem
