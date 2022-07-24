import React from "react";
import './App.css';
import Form from './components/Form'
import List from './components/List'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      tasks: [],
      filter: "",
      all: true,
      displayModify:false
    }
  }

  addTask = (taskName) => {
    const task = {description: taskName, status: 'To do',modify: false}
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
    this.setState({tasks: taskClone, displayModify:true})
  }

  handleChangeDescription = (index, e) => {
    const taskClone = [...this.state.tasks]
    taskClone[index].description = e.target.value
    this.setState({tasks: taskClone})
  }

  handleButtonStatus = (status) => {
    this.setState({filter: status, all: false})
  }

  handleButtonAll = () =>{
    this.setState({all: true})
  }

  render() {
    
    return (
      <div>
        <h1 className="p-9 text-center text-black-700 font-bold text-5xl">TO DO LIST</h1>
        <div className="flex gap-4 justify-center" >
          <button className="px-7 h-10 uppercase font-semibold border-2 border-black bg-teal-100 text-black hover:bg-white" onClick={this.handleButtonAll}>All</button>
          <button className="px-7 h-10 uppercase font-semibold border-2 border-black bg-teal-200 text-black hover:bg-white" onClick={() => this.handleButtonStatus('To do')}>To do</button>
          <button className="px-7 h-10 uppercase font-semibold border-2 border-black bg-teal-300 text-black hover:bg-white" onClick={() => this.handleButtonStatus ('Doing')}>Doing</button>
          <button className="px-7 h-10 uppercase font-semibold border-2 border-black bg-teal-400 text-black hover:bg-white" onClick={() => this.handleButtonStatus ('Done')}>Done</button>
        </div>
        <Form addTask={this.addTask}/>
        <List 
        tasks={this.state.tasks}
         deleteTask={this.deleteTask}
        changeStatus={this.handleChangeStatus}
        modifyBox={this.handleModifyTask}
        changeDescription={this.handleChangeDescription}
        filter={this.state.filter}
        test={this.test}
        all={this.state.all}
        displayModify={this.state.modify}
        />
      </div>
    );
  }
}

export default App;