var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var TaskActions = {
  addTask: function(task){
    console.log('TaskActions: addTask()');
    AppDispatcher.handleAction({
      actionType: AppConstants.ADD_TASK,
      data: task
    });
  }
};

module.exports = TaskActions;
