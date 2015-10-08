var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants  = require('../constants/AppConstants');
var objectAssign  = require('react/lib/Object.assign');
var EventEmitter  = require('events').EventEmitter;

var CHANGE_EVENT = 'czhange';

var _store = {
  tasks: []
};

var addTask = function(task){
  console.log('TaskStores: addTask()');
  _store.tasks.push(task);
};

var TaskStores = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    console.log('TaskStores: addChangeListener()');
    this.on(CHANGE_EVENT, cb);
  },

  getTasks: function(){
    return _store.tasks;
  }
});

AppDispatcher.register(function(payload){
  console.log('TaskStores: AppDispatcher.register()');
  var action = payload.action;

  switch(action.actionType){
      case AppConstants.ADD_TASK:
        console.log('TaskStores: App Dispatcher Add Task');
        addTask(action.data);
      break;

      default:
      return true;
  }

  TaskStores.emit(CHANGE_EVENT);
});

module.exports = TaskStores;