import React from "react";
import './App.css';
import Form from './components/Form'
import List from './components/List'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      tasks: [],
      modify: false
    }
  }

  addTask = (taskName) => {
    const task = {description: taskName, status: "To do"}
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

  handleModifyTask = () => {
    if (this.state.modify) {
      this.setState({modify: false})
    }else{
      this.setState({modify: true})
    }
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
        <Form addTask={this.addTask}/>
        <List tasks={this.state.tasks}
         deleteTask={this.deleteTask}
        changeStatus={this.handleChangeStatus}
        modify={this.state.modify}
        modifyBox={this.handleModifyTask}
        changeDescription={this.handleChangeDescription}
        test={this.test}
        />
      </div>
    );
  }
}

export default App;