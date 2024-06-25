import { ReactNode, createContext, useReducer } from 'react';
import { ACTIONS, IAction, ITodo, ITodoContext } from '../interfaces/todo';

export const TodoContext = createContext<ITodoContext | undefined>(undefined);

const initialState: ITodo[] = [];

const reducer = (currentState: ITodo[], action: IAction) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...currentState, action.payload];

    case ACTIONS.TOGGLE_COMPLETE_STATUS:
      return currentState.map((item) =>
        item.id === action.payload.id
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );

    default:
      return currentState;
  }
};

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const values = { state, dispatch };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
