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
                <form className="flex py-12 justify-center gap-4 items-center" onSubmit={this.handleSubmit}>
                <input className="w-96 px-5 h-8 font-semibold border border-slate-300 text-black rounded" type="text" onChange={this.handleTaskDescriptionChange} placeholder="Votre tache" required></input>
                <button className="h-9 px-5 font-semibold rounded bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black" type="submit">Ajouter</button>
                </form>
			</div>
		)
  }
}

export default Form