var React = require('react');

var Task = React.createClass({

  handleComplete: function(){
    var task = {
      index: this.props.index,
      data: this.props.task
    };

    this.props.complete(task);
  },

  handleRemove: function(){
    this.props.remove(this.props.index);
  },

  render: function() {
    return (
      <tr>
        <td>{ this.props.task.name }</td>
        <td>{ this.props.task.created }</td>
        <td>
          <a className="btn btn-xs btn-success" onClick={this.handleComplete}>Completed</a>
          <a className="btn btn-xs btn-danger" onClick={this.handleRemove}>Remove</a>
        </td>
      </tr>
    );
  },
});

module.exports = Task;