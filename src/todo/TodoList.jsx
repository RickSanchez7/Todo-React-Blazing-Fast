import { useState } from 'react';
import { ColorPicker, RenderCounter } from '../components';
import { Todo, AddTodo, Filter } from './components';
import { renders } from '../hooks/useRenderCounter';
import styles from './TodoList.module.css';
import { todoListMock } from './utils/mocks';

export const TodoList = () => {
  const [color, setColor] = useState('#045975');
  const [filter, setFilter] = useState('all');
  const [todos, setTodos] = useState(todoListMock);

  const handleDone = id => {
    const idx = todos.findIndex(x => x.id === id);
    const copyTodo = [...todos];
    copyTodo[idx].isDone = !todos[idx].isDone;
    setTodos(copyTodo);
  };

  const handleAdd = text => {
    if (!text) return;
    const copyTodo = [
      ...todos,
      {
        id: todos.length + '-' + text,
        text,
        isDone: false,
      },
    ];
    setTodos(copyTodo);
  };

  const bgGradient = `linear-gradient(
    209.21deg,
    rgb(8, 126, 164) 13.57%,
    ${color} 98.38%
    )`;

  const filteredTodos = (() => {
    const filterState = {
      completed: true,
      active: false,
    };
    renders.count('filtered');

    return filter === 'all'
      ? structuredClone(todos)
      : todos.filter(x => x.isDone === filterState[filter]);
  })();

  return (
    <div className={styles.todoList}>
      <RenderCounter className={styles.counter} label='list' />
      <div className={styles.text}>
        Filter was called{' '}
        <span className={styles.count}>{renders.get('filtered')}</span>
        times
      </div>
      <div className={styles.listBlock} style={{ background: bgGradient }}>
        <div className={styles.top}>
          <ColorPicker color={color} onChange={setColor} />
          <Filter filter={filter} onFilter={setFilter} />
        </div>
        {filteredTodos.length ? (
          <ul className={styles.list}>
            {filteredTodos.map(todo => (
              <Todo
                key={todo.id}
                id={todo.id}
                isDone={todo.isDone}
                text={todo.text}
                onChange={handleDone}
              />
            ))}
          </ul>
        ) : (
          <div className={styles.noTodos}>No todos found :(</div>
        )}
        <AddTodo onSubmit={handleAdd} />
      </div>
    </div>
  );
};
