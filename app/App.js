var React = require('react');
var TaskContainer = require('./components/TaskContainer');

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row" sty>
          <TaskContainer />
        </div>
      </div>
    );
  },
});

React.render(<App />, document.getElementById('app'));