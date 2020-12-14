import React, { Component } from 'react'
import propTypes from 'prop-types';
import Item from './Item';

class Table extends Component { 
    render() {
        return (
            <table className='table' style={{padding:'15px 15px'}} >
                <thead >
                    <tr style={{width: '50%'}} >
                        <th style={{width: '25%'}}>ID</th>
                        <th style={{width: '100%'}}>Description</th>
                        <th style={{width: '25%'}}>Boiler Type</th>
                        <th style={{width: '25%'}}>Building</th>
                        <th style={{width: '25%'}}>Maintenance Period</th>
                        <th style={{width: '25%'}}>Hour Maintenance Cost</th>
                        <th style={{width: '25%'}}>Hour Eventual Cost</th>
                        <th style={{width: '25%'}}>Actions</th>
                    </tr>
                </thead>
                <tbody style={tBodyStyle} >
                    {this.props.boilers.map((boiler) => (
                        <tr>
                            <td>{boiler.id}</td>
                            <td>{boiler.description}</td>
                            <td>{boiler.boilerType}</td>
                            <td>{boiler.building}</td>
                            <td>{boiler.maintenancePeriod}</td>
                            <td>{boiler.hourMaintenanceCost}</td>
                            <td>{boiler.hourEventualCost}</td>
                            <td><Item key={boiler.id} boiler={boiler} delItem={this.props.delItem}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}
const tBodyStyle = {
    textAling: 'center',
    fontSize: '12px',
    borderBottom:'1px #ccc dotted'
}

// PropTypes
Table.propTypes = {
    boilers: propTypes.array.isRequired
}

export default Table 