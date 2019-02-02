import React, { Component } from 'react';
import './App.css';

import Createtask from './todo/createtask/create';
import Display from './todo/displaytask/display';

const style = {
  height:'200px',
  width:'100px',
  backgroundColor:'green'
}

class App extends Component 
{
  state = {
    todos:[]
  }

  getTodoFromCreate(todo)
  {
    let todos = this.state.todos;
    todos.push(todo);

    this.setState({ todos:todos })
  }

  deleteTodo = (index)=>
  {
    let todos = this.state.todos;

    todos.splice(index,1);

    this.setState({todos});
  }

  render()
  {
    return(
            <div>
              <Createtask saveTodo={this.getTodoFromCreate.bind(this)} /> 
              <Display deleteTodo={this.deleteTodo} array={this.state.todos}/>
            </div>
    )   
  }  
}

export default App;
