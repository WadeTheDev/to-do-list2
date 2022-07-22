import React from "react";
import './App.css';
import Form from './components/Form'
import List from './components/List'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      tasks: [],
      filter: "to do"
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

  handleButtonStatus = (status) => {
    this.setState({filter: status})
  }



  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <button onClick={() => this.handleButtonStatus('All')}>All</button>
        <button onClick={() => this.handleButtonStatus('To do')}>To do</button>
        <button onClick={() => this.handleButtonStatus ('Doing')}>Doing</button>
        <button onClick={() => this.handleButtonStatus ('Done')}>Done</button>
        <Form addTask={this.addTask}/>
        {this.state.tasks.filter((task) => task.status === this.state.filter)}
        <List tasks={this.state.tasks}
         deleteTask={this.deleteTask}
        changeStatus={this.handleChangeStatus}
        modifyBox={this.handleModifyTask}
        changeDescription={this.handleChangeDescription}
        filter={this.state.filter}
        test={this.test}
        />
      </div>
    );
  }
}

export default App;