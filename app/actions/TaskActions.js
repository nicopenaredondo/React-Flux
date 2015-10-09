var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var TaskActions = {
  addTask: function(task){
    console.log('TaskActions: addTask()');
    AppDispatcher.handleAction({
      actionType: AppConstants.ADD_TASK,
      data: task
    });
  },

  completeTask: function(task){
    console.log('TaskActions: completeTask()');
    AppDispatcher.handleAction({
      actionType: AppConstants.COMPLETE_TASK,
      data: task
    });
  },

  removeTask: function(index){
    console.log('TaskActions: removeTask()');
    AppDispatcher.handleAction({
      actionType: AppConstants.REMOVE_TASK,
      data: index
    });
  }
};

module.exports = TaskActions;
