import React, { useState } from 'react';
import { RenderCounter } from '../../components';

import styles from './AddTodo.module.css';

export const AddTodo = ({ onSubmit }) => {
  const [todo, setTodo] = useState('');

  console.log('AddTodo');

  const handleSubmit = () => {
    onSubmit(todo);
    setTodo('');
  };

  return (
    <div className={styles.add}>
      <input
        className={styles.input}
        onChange={e => setTodo(e.target.value)}
        value={todo}
        placeholder='Type'
      />
      <button type='submit' className={styles.button} onClick={handleSubmit}>
        Add
      </button>
      <RenderCounter className={styles.counter} label='addTodo' />
    </div>
  );
};

export const AddTodoMemo = React.memo(AddTodo);
