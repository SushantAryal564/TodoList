import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import Creators from "../actions/task";
import CloseIcon from "@mui/icons-material/Close";
function Input({ changeAddTask }) {
  const dispatch = useDispatch();
  const { addTask } = Creators;
  const taskSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addTask({ task: task, date: date }));
  };
  const [task, setTask] = useState();
  const [date, setDate] = useState();
  return (
    <div class="flex items-start pt-10 justify-start absolute w-[40%] z-50 bg-white h-[50%] left-[50%] top-[50%] px-8 border rounded-3xl shadow-inner translate-x-[-50%] translate-y-[-50%]">
      <div class="mx-auto w-full max-w-[550px]">
        <form onSubmit={taskSubmitHandler}>
          <div class="mb-5">
            <label
              for="guest"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              What need's to be done?
            </label>
            <input
              type="text"
              required={true}
              onChange={(e) => setTask(e.target.value)}
              class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label
                  for="date"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Date
                </label>
                <input
                  type="date"
                  required={true}
                  onChange={(e) => setDate(e.target.value)}
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div>
            <button class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
      <CloseIcon
        className="absolute top-3 right-3 cursor-pointer"
        onClick={() => {
          changeAddTask(false);
        }}
      />
    </div>
  );
}

export default Input;
