import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todo/TodoForm';
import {TodoList} from './components/todo/TodoList';
import {Footer} from './components/todo/Footer';
import {addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo} from './lib/todoHelpers';

class App extends Component {
  state = {
    todos: [
      { id: 1, name: 'learn', isComplete: true },
      { id: 2, name: 'Build It', isComplete: false },
      { id: 3, name: 'Ship it', isComplete: false },
    ], 
    currentTodo: ''
  }

  handleRemove = (id, evt) => {
    evt.preventDefault();
    const updatedTodos = removeTodo(this.state.todos, id)
    this.setState({
      todos: updatedTodos,
    })
  }

  handleToggle = (id) => {
    const todo = findById(id, this.state.todos);
    const toggledTodo = toggleTodo(todo);
    const updatedTodos = updateTodo(this.state.todos, toggledTodo);
    this.setState({
      todos: updatedTodos,
    });
  }

  handleInputChange = (evt) => {
    this.setState({      
      currentTodo: evt.target.value
    });
  }

  handleSubmit = (evt) =>  {
    evt.preventDefault();
    const newTodo = {id: generateId(this.state.todos), name: this.state.currentTodo, isComplete: false };
    const updateTodo = addTodo(this.state.todos, newTodo);
    this.setState({ todos: updateTodo, currentTodo: '', errorMessage: '' });
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      errorMessage: "Please supply a todo",
    });
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Rain ToDo</h2>
        </div>   
        
        <div className="Todo-App">
        {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
         <TodoForm handleSubmit={submitHandler}
         handleInputChange={this.handleInputChange} 
         currentTodo={this.state.currentTodo} />

         <TodoList handleToggle= {this.handleToggle} 
                   todos={this.state.todos}
                   handleRemove={this.handleRemove} />
         <Footer/>          
        </div> 
      </div>
    );
  }
}

export default App;
