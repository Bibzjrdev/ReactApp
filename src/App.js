import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
// import { v4 } from "uuid";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({todos: res.data}));
  }
  //Mark Complete

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>

    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    })
  );
  };

  //Add Todo
  AddTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed:false
    }).then(res => this.setState({ todos: [...this.state.todos, res.data] }));
    // this.setState({ todos: [...this.state.todos] });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <React.Fragment>
                  <div className="container">
                  <AddTodo AddTodo={this.AddTodo} />
                     <Todos
                      todos={this.state.todos}
                      markComplete={this.markComplete}
                      delTodo={this.delTodo}
                    />
                  </div>
                </React.Fragment>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
