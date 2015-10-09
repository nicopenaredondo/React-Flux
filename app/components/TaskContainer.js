var React = require('react');
var AddTask = require('./AddTask');
var TaskList = require('./TaskList');
var TaskStores = require('../stores/TaskStores');
var TaskActions = require('../actions/TaskActions');

var TaskContainer = React.createClass({

  getInitialState: function(){
    return {
      title: 'Create new task form',
      tasks: TaskStores.getTasks(),
      completed: TaskStores.getCompletedTasks()
    }
  },

  componentDidMount: function(){
    console.log('TaskContainer: componentDidMount()');
    TaskStores.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    console.log('TaskContainer: componentWillUnmount()');
    TaskStores.removeChangeListener(this._onChange);
  },

  addTask: function(task){
    console.log('TaskContainer: addTask()');
    TaskActions.addTask(task);
  },

  completeTask: function(task){
    console.log('TaskContainer: completeTask()');
    TaskActions.completeTask(task);
  },


  removeTask: function(index){
    console.log('TaskContainer: removeTask()');
    TaskActions.removeTask(index);
  },

  _onChange: function(){
    console.log('TaskContainer: _onChange()');
    this.setState({
      tasks: TaskStores.getTasks(),
      completed: TaskStores.getCompletedTasks()
    });
    console.log('List of Completed Task');
    console.log(this.state.completed);
  },

  render: function() {
    var styles = {
      mt:{
        marginTop: 50
      }
    };

    return (
      <div style={styles.mt}>
        <div className="row">
          <div className="col-md-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">{ this.state.title }</h3>
              </div>
              <div className="panel-body">
                <div className="row">
                  <AddTask addTask={this.addTask} />
                  <TaskList tasks={this.state.tasks} removeTask={this.removeTask} completeTask={this.completeTask}/>
                </div>
              </div>

            </div>
          </div>

          <div className="col-md-4">

          </div>
        </div>
      </div>
    );
  },
});

module.exports = TaskContainer;