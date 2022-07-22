import React from "react"
 
class Form extends React.Component {
    constructor(){
        super()
this.state = {
	task: ""
}
}
    handleTaskDescriptionChange = (e) =>{
        this.setState({task : e.target.value})
        // console.log(this.state.task)

    }
    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.addTask(this.state.task)
        console.log(this.state.task)
        this.setState({task: ""})
    }
     render() {
    return (
			<div className="big-container">
                <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleTaskDescriptionChange} placeholder="Votre tache"></input>
                <button type="submit">Ajouter</button>
                </form>
			</div>
		)
  }
}

export default Form