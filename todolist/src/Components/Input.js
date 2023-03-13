import React from "react";
import { useDispatch } from "react-redux";
function Input() {
  const dispatch = useDispatch();
  const taskSubmitHandler = () => {};
  return (
    <div>
      <form>
        <div>
          <div>
            <label htmlFor="Date"> Date: </label>
            <input type="date" id="start-date" />
          </div>
          <div>
            <label htmlFor="Task">Task</label>
            <input type="text" />
          </div>
          <button onClick={taskSubmitHandler}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Input;
