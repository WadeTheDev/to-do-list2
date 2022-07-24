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
                    <li className="border-2 px-10 py-2 border-black mb-4" key={i}>
                    <h2 className="text-teal-500 font-bold pb-3 text-center">Tache {i+ 1}</h2>
                    <p className="p-1 italic border w-96">{task.description}</p>
                    <div className="flex gap-7 justify-center">
                    <button className="h-7 font-semibold bg-teal-500 text-white px-2 mt-4  hover:bg-white hover:text-teal-500 hover:border-2 hover:border-teal-500" onClick={()=> this.props.modifyBox(i)}>Modifier</button>
                        {this.props.displayModify && (
                              <div className="pt-4 flex gap-6">                      
                              <input className="border italic text-sm" placeholder="Modifier" onChange={(event) => this.props.changeDescription(i,event)} type='text' ></input>
                              <select className="bg-slate-100 px-2"  onChange={(e) => this.props.changeStatus(e,i)}>
                              <option value="">{task.status}</option>
                              <option value="To do">To do</option>
                              <option value="Doing">Doing</option>
                              <option value="Done">Done</option>
                              </select>
                              </div>
                        )}
                        <button className="h-7 font-semibold bg-teal-500 text-white px-2 mt-4  hover:bg-white hover:text-teal-500 hover:border-2 hover:border-teal-500"  onClick={() => this.props.deleteTask(i)}>Supprimer</button>
                    </div>
                     </li>
                ) : 
                (<div>      
                 <ul>
                 <li className="border-2 px-10 py-2 border-black mb-4" key={i}>
                    <h2 className="text-teal-500 font-bold pb-3 text-center">Tache {i + 1}</h2>
                    <p className="p-1 italic border w-96">{task.description}</p>
                    <div className="pt-4 flex gap-6">
                        <input className="border italic text-sm" placeholder="Modifier" onChange={(event) => this.props.changeDescription(i,event)} type='text' ></input>
                        <select className="bg-slate-100 px-2"  onChange={(event) => this.props.changeStatus(event,i)}>
                        <option value="">{task.status}</option>
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
                   <li className="border-2 px-10 py-2 border-black mb-4" key={i}>
                   <h2 className="text-teal-500 font-bold pb-3 text-center">Tache {i+ 1}</h2>
                   <p className="p-1 italic border w-96">{task.description}</p>
                   <div className="flex gap-5 justify-center">
                   <button className="h-7 font-semibold bg-teal-500 text-white px-2 mt-4  hover:bg-white hover:text-teal-500 hover:border-2 hover:border-teal-500" onClick={()=> this.props.modifyBox(i)}>Modifier</button>
                       {this.props.displayModify && (
                             <div className="pt-4 flex gap-6">                      
                             <input className="border italic text-sm" placeholder="Modifier" onChange={(event) => this.props.changeDescription(i,event)} type='text' ></input>
                             <select className="bg-slate-100 px-2"  onChange={(e) => this.props.changeStatus(e,i)}>
                             <option value="">{task.status}</option>
                             <option value="To do">To do</option>
                             <option value="Doing">Doing</option>
                             <option value="Done">Done</option>
                             </select>
                             </div>
                       )}
                       <button className="h-7 font-semibold bg-teal-500 text-white px-2 mt-4  hover:bg-white hover:text-teal-500 hover:border-2 hover:border-teal-500"  onClick={() => this.props.deleteTask(i)}>Supprimer</button>
                       </div>
                    </li>
                ) : 
                (<div>      
                 <ul>
                 <li className="border-2 px-10 py-2 border-black mb-4" key={i}>
                    <h2 className="text-teal-500 font-bold pb-3 text-center">Tache {this.props.tasks.length - i}</h2>
                    <p className="p-1 italic border w-96">{task.description}</p>
                    <div className="pt-4 flex gap-6">
                    <input className="border italic text-sm" placeholder="Modifier" onChange={(event) => this.props.changeDescription(i,event)} type='text' ></input>
                    <select className="bg-slate-100 px-2"  onChange={(event) => this.props.changeStatus(event,i)}>
                        <option value="">{task.status}</option>
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