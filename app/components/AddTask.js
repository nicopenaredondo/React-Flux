var React = require('react');

var AddTask = React.createClass({

  getInitialState: function(){
    return {
      newTask: '',
      placeholder: 'Ex. Turn your cat into dog'
    }
  },

  updateNewTask: function(e){
    this.setState({
      newTask: e.target.value
    })
  },

  handleAddNew: function(e){

    var newTask = {
      name : this.state.newTask,
      created: new Date().toLocaleString()
    };

    this.props.addTask(newTask);
    this.clearText();
  },

  handleKeyDown: function(e){
    if(e.keyCode == 13){
      this.handleAddNew();
    }
  },

  clearText: function(){
    this.setState({
      newTask: ''
    });
  },

  render: function() {
    return (

      <div>
        <div className="col-md-8">
          <input type="text" value={this.state.newTask} className="form-control" placeholder={this.state.placeholder} onChange={this.updateNewTask} onKeyDown={this.handleKeyDown} />
        </div>

        <div className="col-md-4">
          <button type="submit" className="btn btn-block btn-success" onClick={this.handleAddNew}>Add Task</button>
        </div>
      </div>
    );
  },
});

module.exports = AddTask;