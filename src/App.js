import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: [{id:Date.now(), taskName: 'play', checkDone: true , isUpdated: true},{id:Date.now()+1, taskName: 'read', checkDone: false, isUpdated: false}],
      defultUpdateValue : "",
    };
  }

  setNewTask = (event) => {
    event.preventDefault();
    this.setState((previousState) => {
      return {
        newTask: [...previousState.newTask,{id:Date.now() , taskName: event.target[0].value , checkDone: false, isUpdated: false}],
      };
    });
  };
  setCheckTask = ( id) => {
    this.setState((previousState) => {
      const updateCheckArr = previousState.newTask.map(item =>{
        if(item.id ===id) {
          item.checkDone  = !item.checkDone
        }
        return item
      });
      return {
        newTask : updateCheckArr,
      };
    });
  };

  setDeleteTask = (id) => {
    this.setState((previousState) => {
      const deleted = previousState.newTask.filter(
        (item) => item.id !== id
      );
      return {
        newTask: deleted,
      };
    });
  };

  setUpdatebtns = (id) => {
    this.setState((previousState) => {
      const updatedArr = previousState.newTask.map(item =>{
        if(item.id ===id) {
          item.isUpdated  = !item.isUpdated
        }
        return item
      });
      return {
        newTask : updatedArr,
      };
    });
  };

  handleUpdateInput = (event, id) => {
    this.setState((previousState) => {
      const updatedArr = previousState.newTask.map(item =>{
        if(item.id ===id) {
          item.taskName = event.target.value
        }
        return item
      });
      return {
        newTask : updatedArr,
      };
    });
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>ToDo List</h1>
          <form onSubmit={this.setNewTask}>
            <label>
              New Task
              <input type="text" name="newTask" />
              <input type="submit" value="add" />
            </label>
            <div className="Tasks">
              <ul>
                {this.state.newTask.map((task, index) => {
                  return (
                    <li key={index}>
                      <label htmlFor="checkTask">
                        <input
                          type="checkbox"
                          id="checkTask"
                          name="checkTask"
                          value="checkTask"
                          checked={task.checkDone}
                          onChange={()=>this.setCheckTask(task.id)}
                        />
                      </label>
                      {task.taskName}

                      <button
                        type="button"
                        onClick={() => this.setDeleteTask(task.id)}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        onClick={() => this.setUpdatebtns(task.id)}
                        className="updateBtn"
                      >
                        Update
                      </button>
                      {task.isUpdated && (
                        <div>
                          <input
                            type="text"
                            name="updatedTask"
                            onChange={(e)=>this.handleUpdateInput(e,task.id)}
                            value={task.taskName}
                            className="input-display"
                          />
                          <button
                            type="button"
                            onClick={() => this.setUpdatebtns(task.id)}
                            className="input-display"
                          >
                            Close
                          </button>
                        </div>
                      )}
                    </li>
                  );
                })}

              </ul>
            </div>
          </form>
        </header>
      </div>
    );
  }
}
