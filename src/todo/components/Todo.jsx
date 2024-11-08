import React from 'react';
import { RenderCounter } from '../../components';
import styles from './Todo.module.css';

export const Todo = ({ id, text, isDone, onChange }) => {
  console.log('TODO');

  return (
    <li className={styles.item}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type='checkbox'
          checked={isDone}
          onChange={() => onChange(id)}
        />
        <span className={styles.checkmark} />
        <span className={styles.text}>{text}</span>
      </label>
      <RenderCounter className={styles.counter} label={id} />
    </li>
  );
};

export const TodoMemo = React.memo(Todo);
