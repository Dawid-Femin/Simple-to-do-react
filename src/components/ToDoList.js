import React, { useState } from 'react';
import ToDoForm from './ToDoForm';

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
      if(!task.text) { //Spacebar validation
          return;
      }
      const newTasks = [task, ...tasks];
      setTasks(newTasks);
      console.log(...tasks);
  }
  
    return (
    <div>
        <h1>Add some tasks!</h1>
        <ToDoForm onSubmit={addTask} />
    </div>
  )
}

export default ToDoList;