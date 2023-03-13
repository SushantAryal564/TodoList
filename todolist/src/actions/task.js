import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions({
  addTask: ["payload"],
  completeTask: ["payload"],
});

export default Creators;
