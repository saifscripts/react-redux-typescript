export const ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_COMPLETE_STATUS: 'TOGGLE_COMPLETE_STATUS',
} as const;

export interface ITodo {
  id: string;
  title?: string;
  isCompleted?: boolean;
}

export interface IAction {
  type: keyof typeof ACTIONS;
  payload: ITodo;
}

export interface ITodoContext {
  state: ITodo[];
  dispatch: React.Dispatch<IAction>;
}
