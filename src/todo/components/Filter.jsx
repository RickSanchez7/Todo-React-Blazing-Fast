import React from 'react';
import { RenderCounter } from '../../components';

import styles from './Filter.module.css';

export const Filter = ({ filter, onFilter }) => {
  return (
    <div className={styles.filter}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type='radio'
          name='filter'
          checked={filter === 'all'}
          onChange={() => onFilter('all')}
        />
        <span className={styles.text}>All</span>
      </label>
      <label className={styles.label}>
        <input
          className={styles.input}
          type='radio'
          name='filter'
          checked={filter === 'active'}
          onChange={() => onFilter('active')}
        />
        <span className={styles.text}>Active</span>
      </label>
      <label className={styles.label}>
        <input
          className={styles.input}
          type='radio'
          name='filter'
          checked={filter === 'completed'}
          onChange={() => onFilter('completed')}
        />
        <span className={styles.text}>Completed</span>
      </label>
      <RenderCounter className={styles.counter} label='filter' />
    </div>
  );
};

export const FilterMemo = React.memo(Filter);
