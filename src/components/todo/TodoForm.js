import React from 'react';

const TodoForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <input type='text' onChange={props.handleInputChange} value={props.currentTodo} />
   </form>
);


TodoForm.propTypes = {
    currentTodo: React.PropTypes.string.isRequred,
    handleInputChange: React.PropTypes.func.isRequred,
    handleSubmit: React.PropTypes.func.isRequred,

}

export default TodoForm;