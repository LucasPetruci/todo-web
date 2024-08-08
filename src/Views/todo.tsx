import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faTimes,
  faCheck,
  faTrash,
  faPen,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { taskService } from "../service/taskService";
import { ITask } from "../types/types";
import { useAppDispatch } from "../store/hooks";
import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { removeTokenFromLocalStorage, setTokenToLocalStorage } from "../helpers/localStorage.helper";
import { logout } from "../store/user/userSlice";
import instance from "../api/axios.api";


interface Task {
  description: string;
  completed: boolean;
}

interface TodoProps {
  onTodo: () => void;
}

export const taskLoader = async () => {
    const {data} = await instance.get('/tasks')
    return data
  }

const Todo: React.FC<TodoProps> = () => {
  const [newTask, setNewTask] = React.useState("");
  const [showInput, setShowInput] = React.useState(false);
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [editingTaskIndex, setEditingTaskIndex] = React.useState<number | null>(
    null
  );
  const [editingTaskContent, setEditingTaskContent] = React.useState("");
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    setShowInput(true);
  };

  const taskBank = useLoaderData() as ITask[];

  const user = "Ana";


  const handleDelete = async(idTask: number) => {
    await instance.delete(`/tasks/${idTask}`)
    window.location.reload();
    console.log('Task deletada com sucesso')
  };

  const handleUpdate = (index: number) => {
    setEditingTaskIndex(index);
    setEditingTaskContent(tasks[index].description);
  };

  const handleCancel = () => {
    setShowInput(false);
    setNewTask("");
    setEditingTaskIndex(null);
    setEditingTaskContent("");
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObj: Task = {
        description: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask("");
      setShowInput(false);
    }
  };

  const handleSaveEdit = () => {
    if (editingTaskContent.trim() !== "" && editingTaskIndex !== null) {
      setTasks(
        tasks.map((task, i) =>
          i === editingTaskIndex
            ? { ...task, description: editingTaskContent }
            : task
        )
      );
      setEditingTaskIndex(null);
      setEditingTaskContent("");
      handleCancel();
    }
  };

  const handleToggleComplete = (index: number) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="pl-20 pt-20 pr-20">
      <div className="text-2xl font-bold mb-4">Boa tarde, {user}! </div>
        
      <div className="flex flex-col items-start ">
        <ul className="w-full">
          {taskBank.map((task, index) => (
            <li key={index} className="mb-3">
              <div className="flex items-center border border-gray-300 rounded-lg p-3 w-full">
                <input
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={() => handleToggleComplete(index)}
                />
                {editingTaskIndex === task.id ? (
                  <input
                    className="pl-3 flex-grow border rounded-lg p-2"
                    type="text"
                    value={editingTaskContent}
                    onChange={(e) => setEditingTaskContent(e.target.value)}
                  />
                ) : (
                  <div
                    className={`pl-3 flex-grow ${
                      task.isCompleted ? "line-through" : ""
                    }`}
                  >
                    {task.description}
                  </div>
                )}
                <div className="flex space-x-2 ml-auto">
                  {editingTaskIndex === index ? (
                    <>
                      <button
                        onClick={handleSaveEdit}
                        className="text-green-500"
                      >
                        <FontAwesomeIcon icon={faCheck} />
                      </button>
                      <button onClick={handleCancel} className="text-red-500">
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleUpdate(task.id)}
                        className="text-black-500"
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </button>
                      <button
                        onClick={() => handleDelete(task.id)}
                        className="text-red-500"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </>
                  )}
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
};

export default Todo;
 
