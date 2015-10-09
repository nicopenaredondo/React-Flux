var React = require('react');
var Task = require('./Task');
var TaskList = React.createClass({

  completeTask: function(task) {
    this.props.completeTask(task.data);
    this.props.removeTask(task.index);
  },

  removeTask: function(index){
    this.props.removeTask(index);
  },

  render: function() {
    var listOfTasks = this.props.tasks.map(function(task, index){
      return (
        <Task
          key={index}
          index={index}
          task={task}
          complete={this.completeTask}
          remove={this.removeTask}
        />
      )
    },this);
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Task</th>
            <th>Created At</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { listOfTasks }
        </tbody>
      </table>
    );
  },
});

module.exports = TaskList;