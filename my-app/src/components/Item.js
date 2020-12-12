import React, { Component } from 'react';
import propTypes from 'prop-types';


export class Item extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.listitem.completed ? 'line-through': 'none'
        }
    }
    render() {
        const {id, title } = this.props.listitem;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input 
                        type= "checkbox"  
                        onChange={this.props.markComplete.bind(this, id)} 
                    /> {' '}
                    {title} 
                    <button onClick={this.props.delItem.bind(this,id)} style={btnStyle} > 
                        X 
                    </button>
                </p>
            </div>
    )
  }
}

Item.propTypes = {
    listitem: propTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default Item;