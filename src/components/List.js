import React from "react"
 
class List extends React.Component {
    constructor(){
        super()
    }
    afficherBouton = () =>{
        console.log(this.props.tasks)
    }
    render() { 
        return (
        <div>
            <ul>
            {this.props.tasks.map((task,i) =>{
            return (
                    <li key={i}>
                    <h2>Tache {i}</h2>
                    <p>{task.description}</p>
                    <button onClick={() => this.props.deleteTask(i)}>Supprimer</button>
                    </li>
                )
                // console.log(this.props.tasks[i])
            })}
            </ul>
        </div>
		)
  }
}

export default List 