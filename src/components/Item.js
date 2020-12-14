import React, { Component } from 'react';
import propTypes from 'prop-types';

export class Item extends Component {
    render() {
        const {id} = this.props.boiler;
        return (
                <tr>
                    <td>{this.props.boiler.id}</td>
                    <td>{this.props.boiler.description}</td>
                    <td>{this.props.boiler.boilerType}</td>
                    <td>{this.props.boiler.building}</td>
                    <td>{this.props.boiler.maintenancePeriod}</td>
                    <td>{this.props.boiler.hourMaintenanceCost}</td>
                    <td>{this.props.boiler.hourEventualCost}</td>
                    <td>
                        <button onClick={this.props.delItem.bind(this,id)} style={btnStyle} > 
                            X 
                        </button>
                        <button > 
                            EDIT
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