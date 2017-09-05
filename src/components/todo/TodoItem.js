import React from 'react';

export const TodoItem = (props) => (
    <li>
        <span className='delete-item'><a href='#' onClick={(evt) => props.handleRemove(props.id, evt)}>x</a></span>
        <input type='checkbox' onChange={ ()=> props.handleToggle(props.id)} checked={props.isComplete} /> {props.name}
    </li>
);


TodoItem.propTypes = {
    name: React.PropTypes.string.isRequired,
    isComplete:  React.PropTypes.bool,
    id: React.PropTypes.number.isRequired
}