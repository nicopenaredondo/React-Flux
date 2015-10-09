var React = require('react');
var Task = require('./Task');
var TaskList = React.createClass({

  render: function() {
    var listOfTasks = this.props.tasks.map(function(task, index){
      return (
        <Task
          key={index}
          index={index}
          task={task}
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