import React from 'react';
import './App.css';



export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      newTask : [],
    };
  }


  setNewTask = (event) =>{
    event.preventDefault()
    this.setState((previousState)=>{
      return {
        newTask: [...previousState.newTask, event.target[0].value]
      }
    });
  }

  setDeleteTask = (index, event)=>{
      this.setState((previousState )=>{
        const deleted = previousState.newTask.filter(( item,itemindex)=>itemindex !== index)
        return {
          newTask : deleted,
        }

    })
 
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>ToDo List</h1>
          <form onSubmit={this.setNewTask}>
            <label>
              New Task
              <input type="text" name ="newTask" />
              <input type="submit" value="add" />
            </label>  
            <div className="Tasks">
              <ul>
                  {
                    this.state.newTask.map((task, index)=>{
                      return <li key={index}>
                        {task}
                        <button type="button" onClick={(e)=>this.setDeleteTask(index,e)}>Delete</button>
                        </li>
                    })
                  }
              </ul>
            </div>
          </form>
        </header>
      </div>
    );
  }
}
