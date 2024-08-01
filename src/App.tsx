import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [newTask, setNewTask] = React.useState("");
  const [showInput, setShowInput] = React.useState(false);
  const [tasks, setTasks] = React.useState<string[]>([]);
  const user = "Ana";
  const handleClick = () => {
    setShowInput(true);
  };

  const handleCancel = () => {
    setShowInput(false);
    setNewTask("");
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
      setShowInput(false);
    }
  };
  return (
    <div className="pl-20 pt-20 pr-20">
      <div className="text-2xl font-bold mb-4">Boa tarde, {user}! </div>

      <div className="flex flex-col items-start ">
        <ul className="  w-full">
          {tasks.map((task, index) => (
            <li key={index} className="mb-3">
              <div className="flex items-center border border-gray-300 rounded-lg p-3 w-full ">
                <input type="checkbox"></input>
                <div className="pl-3">
                {task}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {showInput && (
          <div className="relative w-full mb-3">
            <input
              className="border text-xl rounded-lg shadow-md w-full pr-10 p-3"
              type="text"
              placeholder="Adicionar tarefa"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center space-x-2 pr-2">
              <FontAwesomeIcon
                icon={faTimes}
                className="absolute text-2xl text-red-500 cursor-pointer right-5"
                onClick={handleCancel}
              />
              <FontAwesomeIcon
                icon={faCheck}
                className="absolute text-2xl text-green-500 cursor-pointer right-12"
                onClick={handleAddTask}
              />
            </div>
          </div>
        )}
        <div className="border border-gray-300 border-1 rounded-lg p-1 w-full bg-gray-300">
          <FontAwesomeIcon
            icon={faPlus}
            className="text-x1 text-brand-900 cursor-pointer pl-2"
            onClick={handleClick}
          />
          <span className="pl-3 text-xl text-brand-900">Novo Item</span>
        </div>
      </div>
    </div>
  );
}

export default App;
