import { createReducer } from "reduxsauce";
import { createSlice } from "@reduxjs/toolkit";
import { Types } from "../actions/task";

const initialState = {
  task: [
    {
      id: 1,
      detail: {
        task: "Frontend Task",
        date: "2023-03-01",
      },
      completed: false,
    },
    {
      id: 2,
      detail: {
        task: "Frontend Task 2",
        date: "2023-03-01",
      },
      completed: false,
    },
    {
      id: 3,
      detail: {
        task: "Frontend Task 3",
        date: "2023-03-01",
      },
      completed: false,
    },
    {
      id: 4,
      detail: {
        task: "Frontend Task 4",
        date: "2023-03-01",
      },
      completed: false,
    },
    {
      id: 5,
      detail: {
        task: "Frontend Task 5",
        date: "2023-03-01",
      },
      completed: false,
    },
    {
      id: 6,
      detail: {
        task: "Frontend Task 5",
        date: "2023-03-01",
      },
      completed: false,
    },
  ],
};
// const TaskSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     taskAdd(state, action) {
//       state.task.push(action.payload);
//     },
//     taskCompleted(state, action) {
//       const { id, completed } = action;
//       state.task[id].completed = completed;
//     },
//   },
// });
// const { taskAdd: handleTaskAdd, taskCompleted: handleTaskComplete } =
//   TaskSlice.actions;
const handleTaskAdd = (state, { payload }) => {
  const task = [
    ...state.task,
    { id: state?.task?.length + 1, detail: payload, completed: false },
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
