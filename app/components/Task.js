var React = require('react');
var TaskActions = require('../actions/TaskActions');

var Task = React.createClass({

  handleComplete: function(){
    TaskActions.completeTask(this.props.task);
    this.handleRemove();
  },

  handleRemove: function(){
    TaskActions.removeTask(this.props.index);
  },

  handleEdit: function(){
    TaskActions.editTask();
  },

  render: function() {
    return (
      <tr>
        <td>{ this.props.task.name }</td>
        <td>{ this.props.task.created }</td>
        <td>
          <a className="btn btn-xs btn-info" onClick={this.handleComplete}>Completed</a>
          <a className="btn btn-xs btn-danger" onClick={this.handleRemove}>Remove</a>
          <a className="btn btn-xs btn-warning" onClick={this.handleEdit}>Edit</a>
        </td>
      </tr>
    );
  },
});

module.exports = Task;