import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Login from "./Views/login";
import Register from "./Views/register";
import Todo, { taskLoader } from "./Views/todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login onLogin={() => {}} />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/todo",
    element: <Todo onTodo={() => {}} />,
    loader: taskLoader,
  },
]);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
