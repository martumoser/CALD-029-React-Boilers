import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Table.css'

export class Item extends Component {
    render() {
        const {id} = this.props.boiler;
        return (
                <tr className='rows'>
                    <td>{this.props.boiler.id}</td>
                    <td>{this.props.boiler.description}</td>
                    <td>{this.props.boiler.boilerType}</td>
                    <td>{this.props.boiler.building}</td>
                    <td>{this.props.boiler.maintenancePeriod}</td>
                    <td>{this.props.boiler.hourMaintenanceCost}</td>
                    <td>{this.props.boiler.hourEventualCost}</td>
                    <td>
                        <button onClick={() =>this.props.delItem(id)} style={btnStyle} > 
                            X 
                        </button>
                        <button onClick={() =>this.props.selectItem(id)} > 
                            UPDATE
                        </button>
                    </td>
                </tr>
        )
    }
}

Item.propTypes = {
    boiler: propTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    margin: '10px'
}

export default Item;