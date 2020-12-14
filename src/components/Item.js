import React, { Component } from 'react';
import propTypes from 'prop-types';

export class Item extends Component {
    render() {
        const {id} = this.props.boiler;
        return (
            <div>
                <p>
                    <button onClick={this.props.delItem.bind(this,id)} style={btnStyle} > 
                        X 
                    </button>
                    <button > 
                        Edit
                    </button>
                </p>
            </div>
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
}

export default Item;