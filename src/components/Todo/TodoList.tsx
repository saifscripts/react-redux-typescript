import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoProvider';
import { ACTIONS, ITodoContext } from '../../interfaces/todo';

const TodoList = () => {
  const { state: todos, dispatch } = useContext(TodoContext) as ITodoContext;
  return (
    <ul>
      {todos.map((item) => (
        <li
          key={item.id}
          onClick={() =>
            dispatch({
              type: ACTIONS.TOGGLE_COMPLETE_STATUS,
              payload: { id: item.id },
            })
          }
          className={`cursor-pointer ${item.isCompleted ? 'line-through' : ''}`}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
