import React, { useState } from 'react';

function ToDoForm() {
    const [input, setInput] = useState('');

    const handleChange = e => {
      setInput(e.target.value)
    };

    const handleSubmit = e => {
      e.preventDefault();

      // props.onSubmit({
      //   id: Math.floor(math.random() * 10000),
      //   text: input,
      // });
      setInput('');
    };


  return (
    <form className='todo' onSubmit={handleSubmit}>
      <input type="text" 
      placeholder='Add task'
      value={input}
      name='text'
      className='todo-input'
      onChange={handleChange}
      />
      <button className='todo-button'>Add task</button>
    </form>
  )
}

export default ToDoForm;