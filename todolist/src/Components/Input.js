import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import Creators from "../actions/task";
function Input() {
  const dispatch = useDispatch();
  const { addTask } = Creators;
  const taskSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addTask({ task: task, date: date }));
  };
  const [task, setTask] = useState();
  const [date, setDate] = useState();
  return (
    <div>
      <form>
        <div>
          <div>
            <label htmlFor="Date"> Date: </label>
            <input
              type="date"
              id="start-date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Task">Task</label>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <button onClick={taskSubmitHandler}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Input;
