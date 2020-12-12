import React, { Component } from 'react';
import Item from './Item';
import propTypes from 'prop-types';

class ListItems extends Component {
    render() {
      //console.log(this.props.todos)
    return this.props.listitems.map((listitem)=>(
        <Item key={listitem.id} listitem= {listitem} markComplete =
        {this.props.markComplete} delItem={this.props.delItem} />
    ))
  }
}

// PropTypes
ListItems.propTypes = {
    listitems: propTypes.array.isRequired
}


export default ListItems;
