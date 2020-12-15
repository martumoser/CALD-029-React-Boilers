import React, { Component } from 'react'

export class AddItem extends Component {
    state = {
        description: '',
        boilerType: '',
        building: '',
        maintenancePeriod: '',
        hourMaintenanceCost: '',
        hourEventualCost: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem([
            this.state.description, 
            this.state.boilerType, 
            this.state.building, 
            this.state.maintenancePeriod, 
            this.state.hourMaintenanceCost, 
            this.state.hourEventualCost
        ])
        this.setState({
            description: '',
            boilerType: '',
            building: '',
            maintenancePeriod: '',
            hourMaintenanceCost: '',
            hourEventualCost: '',
        });
    }

    onChange = (e) => this.setState({ 
        [e.target.name]: e.target.value
    });
    
    render() {
        return (
            <div>
                <h2>
                    Add new Boiler
                </h2>
                
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
                            style={{flex: '1'}}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default AddItem
