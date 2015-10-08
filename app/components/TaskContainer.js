var React = require('react');
var AddTask = require('./AddTask');
// var TaskList = require('./TaskList');
var TaskStores = require('../stores/TaskStores');
var TaskActions = require('../actions/TaskActions');

var TaskContainer = React.createClass({

  getInitialState: function(){
    return {
      title: 'Flux Exam'
    }
  },

  componentDidMount: function(){
    console.log('TaskContainer: componentDidMount()');
    TaskStores.addChangeListener(this._onChange);
  },

  addTask: function(task){
    TaskActions.addTask(task);
  },

  _onChange: function(){
    console.log('TaskContainer: _onChange()');
    this.setState({
      tasks: TaskStores.getTasks()
    });
    console.log(TaskStores.getTasks());
  },

  render: function() {
    return (
      <div>
        <div className="col-md-8">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">{ this.state.title }</h3>
            </div>
            <div className="panel-body">
              <div className="row">
                <AddTask addTask={this.addTask} />
              </div>
            </div>
            Task Lisk Component
          </div>
        </div>

        <div className="col-md-4">
          Current Task Component
        </div>
      </div>
    );
  },
});

module.exports = TaskContainer;