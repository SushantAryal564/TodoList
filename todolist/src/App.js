import "./App.css";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Form from "./Components/Form";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
function App() {
  const [showAddTask, changeAddTask] = useState(false);
  console.log(showAddTask);
  return (
    <div className="h-screen">
      <div>
        {showAddTask ? (
          <div className="absolute  w-[100%] h-[100%] z-[25] backdrop-brightness-[0.6] "></div>
        ) : null}
        <div className=" px-20">
          <Header />
          {showAddTask ? null : (
            <AddIcon
              onClick={() => {
                changeAddTask(true);
              }}
              className="absolute top-3 right-24  bg-[#5550c1] rounded-full "
              style={{ fontSize: 60, color: "white" }}
            />
          )}
          {showAddTask ? <Input changeAddTask={changeAddTask} /> : ""}
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
