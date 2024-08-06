// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPlus,
//   faTimes,
//   faCheck,
//   faTrash,
//   faPen,
// } from "@fortawesome/free-solid-svg-icons";

// export interface Task {
//   id: number;
//   description: string;
//   completed: boolean;
// }

// export interface TodoProps {
//   onTodo: () => void;
//   name: string;
//   tasks: Task[];
//   addTask: (task: Task) => void;
//   deleteTask: (index: number) => void;
//   updateTask: (index: number, description: string) => void;
// }

// const Todo: React.FC<TodoProps> = ({
//   name,
//   tasks,
//   addTask,
//   deleteTask,
//   updateTask,
// }) => {
//   const [newTask, setNewTask] = React.useState("");
//   const [showInput, setShowInput] = React.useState(false);
//   const [editingTaskIndex, setEditingTaskIndex] = React.useState<number | null>(
//     null
//   );
//   const [editingTaskContent, setEditingTaskContent] = React.useState("");

//   const user = "Ana";

//   const handleClick = () => {
//     setShowInput(true);
//   };

//   const handleCancel = () => {
//     setShowInput(false);
//     setNewTask("");
//     setEditingTaskIndex(null);
//     setEditingTaskContent("");
//   };

//   const handleAddTask = () => {
//     if (newTask.trim() !== "") {
//       const newTaskObj: Task = {
//         id: tasks.length + 1,
//         description: newTask,
//         completed: false,
//       };
//       addTask(newTaskObj);
//       setNewTask("");
//       setShowInput(false);
//     }
//   };

//   const handleSaveEdit = () => {
//     if (editingTaskContent.trim() !== "" && editingTaskIndex !== null) {
//       updateTask(editingTaskIndex, editingTaskContent);
//       handleCancel();
//     }
//   };

//   return (
//     <div className="pl-20 pt-20 pr-20">
//       <div className="text-2xl font-bold mb-4">Boa tarde, {user}!</div>

//       <div className="flex flex-col items-start ">
//         <ul className="w-full">
//           {tasks.map((task, index) => (
//             <li key={index} className="mb-3">
//               <div className="flex items-center border border-gray-300 rounded-lg p-3 w-full">
//                 <input type="checkbox" checked={task.completed} />
//                 {editingTaskIndex === index ? (
//                   <input
//                     className="pl-3 flex-grow border rounded-lg p-2"
//                     type="text"
//                     value={editingTaskContent}
//                     onChange={(e) => setEditingTaskContent(e.target.value)}
//                   />
//                 ) : (
//                   <div className="pl-3 flex-grow">{task.description}</div>
//                 )}
//                 <div className="flex space-x-2 ml-auto">
//                   {editingTaskIndex === index ? (
//                     <>
//                       <button
//                         onClick={handleSaveEdit}
//                         className="text-green-500"
//                       >
//                         <FontAwesomeIcon icon={faCheck} />
//                       </button>
//                       <button onClick={handleCancel} className="text-red-500">
//                         <FontAwesomeIcon icon={faTimes} />
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <button
//                         onClick={() => setEditingTaskIndex(index)}
//                         className="text-black-500"
//                       >
//                         <FontAwesomeIcon icon={faPen} />
//                       </button>
//                       <button
//                         onClick={() => deleteTask(index)}
//                         className="text-red-500"
//                       >
//                         <FontAwesomeIcon icon={faTrash} />
//                       </button>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>

//         {showInput && (
//           <div className="relative w-full mb-3">
//             <input
//               className="border text-xl rounded-lg shadow-md w-full pr-10 p-3"
//               type="text"
//               placeholder="Adicionar tarefa"
//               value={newTask}
//               onChange={(e) => setNewTask(e.target.value)}
//             />
//             <div className="absolute inset-y-0 right-0 flex items-center space-x-2 pr-2">
//               <FontAwesomeIcon
//                 icon={faTimes}
//                 className="absolute text-2xl text-red-500 cursor-pointer right-5"
//                 onClick={handleCancel}
//               />
//               <FontAwesomeIcon
//                 icon={faCheck}
//                 className="absolute text-2xl text-green-500 cursor-pointer right-12"
//                 onClick={handleAddTask}
//               />
//             </div>
//           </div>
//         )}
//         <div className="border border-gray-300 border-1 rounded-lg p-1 w-full bg-gray-300">
//           <FontAwesomeIcon
//             icon={faPlus}
//             className="text-x1 text-brand-900 cursor-pointer pl-2"
//             onClick={handleClick}
//           />
//           <span className="pl-3 text-xl text-brand-900">Novo Item</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Todo;
