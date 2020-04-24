import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            task_value:'',
            get_task:'NaN',
            task_list:[]
        };
        
        //Bind Functions
        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.addItem = this.addItem.bind(this);
        this.listItems = this.listItems.bind(this);
        this.getTask = this.getTask.bind(this);
        this.showTask = this.showTask.bind(this);
    }
    
    myChangeHandler = (e) => 
    {
        this.setState({task_value: e.target.value});
        console.log("Entered Value:"+this.state.task_value);
    }
    
    addItem = (e) => 
    {
        e.preventDefault();
        const tasks = this.state.task_list; //Getting all the Values in List
        const task = this.state.task_value; //Getting the User Input
        let flag = 0;
        
        //Preventing Empty string and also duplicate entries
        if(task !== "")
        {
            for(let i=0; i < tasks.length; i++)
            {
                if(task.toUpperCase() == tasks[i].toUpperCase())
                {
                    flag = 1;
                    break;
                }
                    
            }
            
            if(flag == 0)
            {
                tasks.push(task);
                console.log(tasks);
            }
        }
        
        this.setState({task_value:""}); //Setting the Input Field to Blank after Insertion
        console.log("Tasks Size:"+this.state.task_list.length);
    }
    
    listItems = () => 
    {
        let items = this.state.task_list;
        return (
            items.map((val, index) => {
            return (
              <h5 key={index}>
                { val }
              </h5>
            );
          })
        );
    }
    
    getTask = (e) =>
    {
        e.preventDefault();
        let items_length = this.state.task_list.length;
        let get_random = Math.floor(Math.random() * (items_length));
        console.log(get_random);
        
        this.setState({get_task:get_random})
    }
    
    showTask = () =>
    {
        const showTask = this.state.get_task;
        console.log(this.state.task_list[showTask]);
        if(this.state.get_task !== "NaN")
            return(<h4>{this.state.task_list[showTask]}</h4>);
    }
    
    render(){
        return(
              <div className="container">
              <div className="row">
                  <div className="col-md-2"></div>

                  <div className="col-md-8">
                      <div className="card">
                          <div className="card-body">
                              <div className="card-header-contents">
                                  <h3 className="card-title">Task Selector</h3>
                                  <p className="card-subtitle">Confused? Let Us select you a Task</p>
                              </div>

                              <div className="card-body-contents">
                                  <div className="row">
                                    <div className="col-md-4">
                                        <form>
                                            <fieldset className="border p-2">
                                                <legend className="w-auto">Add New Task</legend>
                                                <small className="text-muted">Duplicate Entries are Eliminated.</small>
                                                <input className="form-control form-control-sm" type="text" placeholder="Enter Task" value={this.state.task_value} onChange={this.myChangeHandler}></input>
                                                <br />
                                                <button className="btn btn-success btn-block btn-sm" onClick={this.addItem}>Add Task</button>
                                            </fieldset>
                                        </form>
                                    </div>
                                    <div className="col-md-8">
                                        <fieldset className="border p-2">
                                    <legend className="w-auto">Your Tasks:</legend>
                                            {this.listItems()}
                                  </fieldset>
                                        <br/>
                                        <button className="btn btn-success btn-block btn-sm" onClick={this.getTask}>What Should I do?</button>
                                        
                                        {this.showTask()}
                                    </div>
                                  </div>


                                  <br/>


                                </div>
                            </div>

                          </div>
                      </div>
                  <div className="col-md-2"></div>
                  </div>
          </div>
        );
    }
}

export default App;