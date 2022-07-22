import React from "react"
 
class from extends React.Component {
  render() {
    return (
			<div className="big-container">
                <form>
                <input type="text" onChange={this.props.addTask} placeholder="Votre tache"></input>
                <button type="submit" >Ajouter</button>
                </form>
			</div>
		)
  }
}

export default from