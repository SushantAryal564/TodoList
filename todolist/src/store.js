import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import taskReducer from "./reducers/task";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    task: taskReducer,
  },
  middleware: () => [sagaMiddleware],
});
export default store;
