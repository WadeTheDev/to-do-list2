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
            {this.props.all && this.props.tasks.map((task,i) =>{
            return (
                <div className="flex justify-center" key={i}>
                { task.modify === false ? (
                    <li className="border-2 px-6 py-2 border-black mb-4" key={i}>
                    <h2 className="text-teal-500 font-bold pb-3 text-center">Tache {i + 1}</h2>
                    <p className="p-1 italic border">{task.description}</p>
                    <div className="pt-4 flex gap-6">
                    <input className="border italic text-sm" placeholder="Modifier" onChange={(event) => this.props.changeDescription(i,event)} type='text' ></input>
                        <select className="bg-slate-100 px-2"  onClick={(event) => this.props.changeStatus(event,i)}>
                        <option value="To do">To do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                        </select>
                        <button className="bg-slate-100 px-2" onClick={()=> this.props.modifyBox(i)}>Modifier</button>
                        <button className="bg-slate-100 px-2"  onClick={() => this.props.deleteTask(i)}>Supprimer</button>
                    </div>
                    </li>
                ) : 
                (<div>      
                 <ul>
                 <li className="border-2 px-6 py-2 border-black mb-4" key={i}>
                    <h2 className="text-teal-500 font-bold pb-3 text-center">Tache {i + 1}</h2>
                    <p className="p-1 italic border">{task.description}</p>
                    <div className="pt-4 flex gap-6">
                        <input className="border italic text-sm" placeholder="Modifier" onChange={(event) => this.props.changeDescription(i,event)} type='text' ></input>
                        <select className="bg-slate-100 px-2"  onClick={(event) => this.props.changeStatus(event,i)}>
                        <option value="To do">To do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                        </select>
                        <button className="bg-slate-100 px-2"  onClick={()=> this.props.modifyBox(i)}>Valider</button>
                        </div>
                    </li>
                </ul>             
                </div>)
                    }
                </div>
                )
            })}
            {!this.props.all && this.props.tasks.filter(task => task.status === this.props.filter)
            .map((task,i) =>{
            return (
                <div className="flex justify-center" key={i}>
                { task.modify === false ? (
                    <li className="border-2 px-6 py-2 border-black mb-4" key={i}>
                    <h2 className="text-teal-500 font-bold pb-3 text-center">Tache {i + 1}</h2>
                    <p className="p-1 italic border">{task.description}</p>
                    <div className="pt-4 flex gap-6">
                    <input className="border italic text-sm" placeholder="Modifier" onChange={(event) => this.props.changeDescription(i,event)} type='text' ></input>
                        <select className="bg-slate-100 px-2"  onClick={(event) => this.props.changeStatus(event,i)}>
                        <option value="To do">To do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                        </select>
                        <button className="bg-slate-100 px-2" onClick={()=> this.props.modifyBox(i)}>Modifier</button>
                        <button className="bg-slate-100 px-2"  onClick={() => this.props.deleteTask(i)}>Supprimer</button>
                    </div>
                    </li>
                ) : 
                (<div>      
                 <ul>
                 <li className="border-2 px-6 py-2 border-black mb-4" key={i}>
                    <h2 className="text-teal-500 font-bold pb-3 text-center">Tache {i + 1}</h2>
                    <p className="p-1 italic border">{task.description}</p>
                    <div className="pt-4 flex gap-6">
                        <input className="border italic text-sm" placeholder="Modifier" onChange={(event) => this.props.changeDescription(i,event)} type='text' ></input>
                        <select className="bg-slate-100 px-2"  onClick={(event) => this.props.changeStatus(event,i)}>
                        <option value="To do">To do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                        </select>
                        <button className="bg-slate-100 px-2"  onClick={()=> this.props.modifyBox(i)}>Valider</button>
                        </div>
                    </li>
                </ul>             
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