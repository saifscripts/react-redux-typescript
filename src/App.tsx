import TodoForm from './components/Toto/TodoForm';
import TodoList from './components/Toto/TodoList';
import TodoProvider from './contexts/TodoProvider';

function App() {
  return (
    <div>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
