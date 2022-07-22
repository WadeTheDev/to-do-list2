import React from "react";
import './App.css';
import Form from './components/Form'
import List from './components/List'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      tasks: [],
    }
  }

  addTask = (taskName) => {
    const task = {description: taskName, status: "to do"}
    const taskClone = [task,...this.state.tasks]
    this.setState({tasks : taskClone})
  }

  deleteTask = (index) => {
    const taskClone = [...this.state.tasks]
    taskClone.splice(index, 1)
    this.setState({tasks: taskClone})
  }

  render() {
    console.log(this.state.tasks)
    return (
      <div>
        <h1>Todo List</h1>
        <Form addTask={this.addTask}/>
        <List tasks={this.state.tasks} deleteTask={this.deleteTask}/>
      </div>
    );
  }
}

export default App;