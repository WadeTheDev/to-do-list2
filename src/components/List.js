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
                <div>
                { this.props.modify === false ? (
                    <li key={i}>
                    <h2>Tache {i}</h2>
                    <p>{task.description}</p>
                    <input type='text'></input>
                    <select onClick={(event) => this.props.changeStatus(event,i)}>
                    <option value="To do">To do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                    </select>
                    <button onClick={this.props.modifyBox}>Modifier</button>
                    <button onClick={() => this.props.deleteTask(i)}>Supprimer</button>
                    </li>
                ) : 
                (<div key={i}>
                <input onChange={(event) => this.props.changeDescription(i,event)} type='text'></input>
                <button onClick={this.props.modifyBox}>Valider</button>
                </div>)
                    }
                </div>
                )
                // console.log(this.props.tasks[i])
            })}
            </ul>
        </div>
		)
  }
}

export default List 