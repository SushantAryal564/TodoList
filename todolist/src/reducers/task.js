import { createReducer } from "reduxsauce";
import { Types } from "../actions/task";

const initialState = {
  task: [],
};

const handleTaskAdd = (state, { payload }) => {
  const task = [
    ...state.task,
    { id: state?.task?.length + 1, title: payload, completed: false },
  ];
  return { ...state, task };
};

const handleTaskComplete = (state, { payload: { id, completed } }) => {
  const tasks = state.task.map((item) =>
    item.id === +id ? { ...item, completed } : { ...item }
  );
  return { ...state, task: tasks };
};

const taskReducer = createReducer(initialState, {
  [Types.ADD_TASK]: handleTaskAdd,
  [Types.COMPLETE_TASK]: handleTaskComplete,
});

export default taskReducer;
