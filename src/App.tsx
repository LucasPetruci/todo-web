import React from "react";
import "./App.css";
import Login from "./Views/login";
import Todo from "./Views/todo";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? <Todo /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;