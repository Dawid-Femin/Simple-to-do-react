import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
      if(!task.text) {
          return;
      }
      const newTasks = [task, ...tasks];
      setTasks(newTasks);
  };

  const removeTask = id => {
    const removeArr = [...tasks].filter(task => task.id !== id)
    setTasks(removeArr);
  };

  const updateTask = (taskId, newValue) => {
    if(!newValue.text) {
        return;
  }
  setTasks(prev => prev.map(item => (item.id === taskId ? newValue : item)))
};

  const completeTask = id => {
      let updatedTasks = tasks.map(task => {
          if(task.id === id) {
              task.isComplete = !task.isComplete
          }
          return task;
      });
  };
  
    return (
    <div>
        <h1>Add some tasks!</h1>
        <ToDoForm onSubmit={addTask} />
        <ToDo tasks={tasks} completeTask={completeTask} removeTask={removeTask} updateTask={updateTask}/>
        {removeTask}
        {updateTask}
    </div>
  )
};

export default ToDoList;