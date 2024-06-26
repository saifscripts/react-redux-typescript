import { FormEvent, useContext, useState } from 'react';
import { TodoContext } from '../../contexts/TodoProvider';
import { ACTIONS, ITodoContext } from '../../interfaces/todo';

const TodoForm = () => {
  const [task, setTask] = useState('');
  const { dispatch } = useContext(TodoContext) as ITodoContext;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: {
        id: Math.random().toString(36).substring(2, 10),
        title: task,
        isCompleted: false,
      },
    });
    setTask('');
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="border border-gray-400"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          name="task"
          id=""
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
