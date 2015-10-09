var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants  = require('../constants/AppConstants');
var objectAssign  = require('react/lib/Object.assign');
var EventEmitter  = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  tasks: [],
  completedTasks: [],
  editMode: false
};

var addTask = function(task){
  console.log('TaskStores: addTask()');
  _store.tasks.push(task);
};

var completeTask = function(task){
  console.log('TaskStores: completeTask()');
  _store.completedTasks.push(task);
};

var removeTask = function(index){
  console.log('TaskStores: removeTask()');
  _store.tasks.splice(index, 1);
};

var editMode = function(){
  console.log('TaskStores: editMode()');
  _store.editMode = true;
};

var TaskStores = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    console.log('TaskStores: addChangeListener()');
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener: function(cb){
    console.log('TaskStores: removeChangeListener()');
    this.on(CHANGE_EVENT, cb);
  },

  getTasks: function(){
    return _store.tasks;
  },

  getCompletedTasks: function(){
    return _store.completedTasks;
  },

  isEditMode: function(){
    return _store.editMode;
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

      case AppConstants.COMPLETE_TASK:
        console.log('TaskStores: App Dispatcher Complete Task');
        completeTask(action.data);
      break;

      case AppConstants.REMOVE_TASK:
        console.log('TaskStores: App Dispatcher Remove Task');
        removeTask(action.data);
      break;

      case AppConstants.EDIT_TASK:
        console.log('TaskStores: App Dispatcher Edit Task');
        editMode();
      break;



      default:
        return true;
  }

  TaskStores.emit(CHANGE_EVENT);
});

module.exports = TaskStores;