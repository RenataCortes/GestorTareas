import './App.css'
import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Modal from "./components/Modal";

const App = () => {
  // Cargar tareas desde localStorage al inicializar
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [filter, setFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // Sincronizar tareas con localStorage
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    if (newTasks.length === 0) {
      localStorage.removeItem("tasks"); // Si ya no hay tareas, limpiamos localStorage
    }
  };

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="flex justify-center p-6 min-h-screen bg-pink-100">
      <div className="bg-white justify-center p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="flex justify-center text-3xl text-[#d59f9f] font-bold mb-8">Gestor de tareas</h1>
        <div className="flex justify-center items-center space-x-4 mb-6">
          <button
            onClick={() => {
              setSelectedTask(null);
              setIsModalOpen(true);
            }}
            className="bg-[#a5a5a5] text-white px-4 py-2 rounded-xl font-medium"
          >
            Agregar tarea
          </button>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border rounded-xl"
          >
            <option className="text-neutral-500 font-medium" value="all">Todas</option>
            <option className="text-neutral-500 font-medium" value="pending">Pendientes</option>
            <option className="text-neutral-500 font-medium" value="completed">Completadas</option>
          </select>
        </div>
        <TaskList
          tasks={filteredTasks}
          onToggleStatus={toggleTaskStatus}
          onEditTask={(task) => {
            setSelectedTask(task);
            setIsModalOpen(true);
          }}
          onDeleteTask={deleteTask}
        />
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <TaskForm
              onSubmit={selectedTask ? updateTask : addTask}
              task={selectedTask}
              onClose={() => setIsModalOpen(false)}
            />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default App;
