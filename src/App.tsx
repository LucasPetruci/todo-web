import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Views/login";
import Register from "./Views/register";
import Todo from "./Views/todo";
// import ListTodo from "./Views/list_todo";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={() => {}} />} />
        <Route path="/register" element={<Register onRegister={() => {}} />} />
        <Route path="/todo" element={<Todo onTodo={() => { } } />} />
        
      </Routes>
    </Router>
  );
};

export default App;
