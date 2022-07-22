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
    const task = {description: taskName, status: "To do",modify: false}
    const taskClone = [task,...this.state.tasks]
    this.setState({tasks : taskClone})
  }

  deleteTask = (index) => {
    const taskClone = [...this.state.tasks]
    taskClone.splice(index, 1)
    this.setState({tasks: taskClone})
  }

  handleChangeStatus = (e, index) => {
    const taskClone = [...this.state.tasks]
    taskClone[index].status = e.target.value
    this.setState({tasks: taskClone})
    console.log(this.state.tasks)
  }

  test = (e) => {
    console.log(e.target.value)
  }

  handleModifyTask = (index) => {
    const taskClone = [...this.state.tasks]
    if (this.state.tasks[index].modify) {
      taskClone[index].modify = false
    }else{
      taskClone[index].modify = true    
    }
    this.setState({tasks: taskClone})
  }

  handleChangeDescription = (index, e) => {
    const taskClone = [...this.state.tasks]
    taskClone[index].description = e.target.value
    this.setState({tasks: taskClone})
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <button>All</button>
        <button>To do</button>
        <button>Doing</button>
        <button>Done</button>
        <Form addTask={this.addTask}/>
        <List tasks={this.state.tasks}
         deleteTask={this.deleteTask}
        changeStatus={this.handleChangeStatus}
        modifyBox={this.handleModifyTask}
        changeDescription={this.handleChangeDescription}
        test={this.test}
        />
      </div>
    );
  }
}

export default App;