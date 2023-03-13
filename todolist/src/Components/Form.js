import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Creators from "../actions/task";
function Form() {
  const dispatch = useDispatch();
  const { completeTask } = Creators;
  const task = useSelector((state) => {
    return state.task.task;
  });
  const uncompletedTask = task.filter((task) => {
    return task.completed == false;
  });
  const completedTask = task.filter((task) => {
    return task.completed == true;
  });
  return (
    <Fragment>
      <div>
        <h1>Uncompleted Task</h1>
        {uncompletedTask.map((task) => {
          return (
            <div>
              <div>{task.detail.task}</div>
              <div>{task.detail.date}</div>
              <input
                type="checkbox"
                onChange={() => {
                  dispatch(completeTask({ id: task.id, completed: true }));
                }}
              />
            </div>
          );
        })}
      </div>
      <div>
        <h1>Completed Task</h1>
        {completedTask.map((task) => {
          return (
            <div>
              <div>{task.detail.task}</div>
              <div>{task.detail.date}</div>
              <input type="checkbox" />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default Form;
