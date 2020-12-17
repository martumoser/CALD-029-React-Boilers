import React, { Component } from 'react'
import propTypes from 'prop-types';
import Item from './Item';
import './Table.css'

class Table extends Component { 
    render() {
        return (
            <div className='table'>
                <table>
                    <thead>
                        <tr>
                            <th id='id'>ID</th>
                            <th id='description' >Description</th>
                            <th id='boilertype'>Boiler Type</th>
                            <th id='building'>Building</th>
                            <th id='maintenance'>Maintenance Period</th>
                            <th id='cost1'>Hour Maintenance Cost</th>
                            <th id='cost2'>Hour Eventual Cost</th>
                            <th id='actions'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.boilers.map((boiler) => (
                        <Item key={boiler.id} boiler={boiler} delItem={this.props.delItem} selectItem={this.props.selectItem} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

// PropTypes
Table.propTypes = {
    boilers: propTypes.array.isRequired
}

export default Table 