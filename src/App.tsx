import React from "react";
import "./App.css";

function App() {

  const [newTask, setNewTask] = React.useState("");
  return (
   <div className="">
    <div className="">Todo</div>
    <div className="">
      <input className="border text-xl p-2" type="text" placeholder="Adicionar tarefa" value={newTask} onChange={e => setNewTask(e.target.value)}/>
      <button>Adicionar</button>
    </div>
   </div>
  );
}

export default App;
