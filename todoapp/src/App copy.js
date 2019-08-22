import React from 'react';
import Todos from "./Todos";
import AddTodo from "./AddTodo"


class App extends React.Component {
  state = {
    todos: [
      { 
        id: 1,
        content: "milk"
      },
      {
        id: 2,
        content: "ham"
      }
    ]
  }

  AddTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
    // this.setState({
    //   ...this.state
    // })
  }

  deleteTodo = (id) => {
    const leftoverTodos = this.state.todos.filter( todo => {
      return todo.id !== id; 
    })
    this.setState({
      todos: leftoverTodos
    })
    console.log(id);
  }




  render() {
    return (
      <div className="todo-app container">
        <header className="App-header">
          <h1 className="center blue-text">Todo list</h1>
          
        </header>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.AddTodo}/>
      </div>
    );
  }
  
}

export default App;
