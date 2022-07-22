import React from "react";
import './App.css';
import Form from './components/Form'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      tasks: [],
      task : ""
    }
  }

  addTask = (e) => {
    this.setState({task: e.target.value})
    console.log(this.state.task)
  }

  render() {
    return (
      <div>
        <h1 className="text-primary">Todo List</h1>
        <Form addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;