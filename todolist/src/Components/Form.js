import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Creators from "../actions/task";
function Form() {
  const dispatch = useDispatch();
  const [selectedPanel, changeSelectedPanel] = useState("uncomplete");
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
  console.log(uncompletedTask);
  return (
    <Fragment>
      <div
        className={` bg-[#a6a2f7] p-3 border h-[40vh] rounded-2xl ${
          selectedPanel == "uncomplete" ? "shadow-2xl" : ""
        } scrollbar`}
      >
        <h1 className="font-bold text-lg mb-4 ">Uncomplete Task</h1>
        <div className="grid grid-cols-3 gap-2 ">
          {uncompletedTask.map((task) => {
            return (
              <div class=" max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {task.detail.task}
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  {task.detail.date}
                </p>
                <input
                  type="checkbox"
                  checked={false}
                  className="w-5 h-5"
                  onChange={() => {
                    dispatch(completeTask({ id: task.id, completed: true }));
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={` bg-[#a6a2f7] p-3 border h-[40vh] rounded-2xl mt-5 ${
          selectedPanel == "complete"
        }:"shadow-xl":""} scrollbar`}
      >
        <h1 className="font-bold text-lg ">Finished Task</h1>
        <div className="grid grid-cols-3 gap-2 ">
          {completedTask.map((task) => {
            return (
              <div class=" max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {task.detail.task}
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  {task.detail.date}
                </p>
                <input
                  type="checkbox"
                  checked={true}
                  className="w-5 h-5"
                  onChange={() => {
                    dispatch(completeTask({ id: task.id, completed: false }));
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default Form;
