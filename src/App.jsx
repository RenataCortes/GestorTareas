import "./App.css"
import { useState, useEffect, useMemo } from "react"
import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"
import Modal from "./components/Modal"
import { Plus } from "lucide-react"
import StatusModal from "./components/StatusModal"
import DeleteModal from "./components/DeleteModal"

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks")
    return storedTasks ? JSON.parse(storedTasks) : []
  })

  const [filter, setFilter] = useState("all")
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task) => {
    setTasks([...tasks, task])
    setIsAddModalOpen(false)
  }

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)))
    setIsEditModalOpen(false)
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    setIsDeleteModalOpen(false)
  }

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filter === "completed") return task.completed
      if (filter === "pending") return !task.completed
      return true
    })
  }, [tasks, filter])

  return (
    <div className="flex justify-center p-6 min-h-screen bg-pink-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="mt-4 text-4xl text-[#d59f9f] font-bold mb-8 text-center">Gestor de tareas</h1>
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-[#d59f9f] text-white p-2 rounded-full hover:bg-[#c48e8e] transition-colors"
          >
            <Plus size={24} />
          </button>
          <div className="flex items-center">
            <p className="font-medium mr-3 text-gray-500">Filtrar por: </p>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="p-2 border rounded-xl bg-white text-[#d59f9f] border-[#d59f9f] focus:outline-none focus:ring-2 focus:ring-[#d59f9f]"
            >
              <option value="all">Todas</option>
              <option value="pending">Pendientes</option>
              <option value="completed">Completadas</option>
            </select>
          </div>
        </div>
        <TaskList
          tasks={filteredTasks}
          onToggleStatus={toggleTaskStatus}
          onEditTask={(task) => {
            setSelectedTask(task)
            setIsEditModalOpen(true)
          }}
          onDeleteTask={(task) => {
            setSelectedTask(task)
            setIsDeleteModalOpen(true)
          }}
          onShowStatus={(task) => {
            setSelectedTask(task)
            setIsStatusModalOpen(true)
          }}
        />
        {isAddModalOpen && (
          <Modal onClose={() => setIsAddModalOpen(false)}>
            <TaskForm onSubmit={addTask} onClose={() => setIsAddModalOpen(false)} />
          </Modal>
        )}
        {isEditModalOpen && (
          <Modal onClose={() => setIsEditModalOpen(false)}>
            <TaskForm onSubmit={updateTask} task={selectedTask} onClose={() => setIsEditModalOpen(false)} />
          </Modal>
        )}
        {isStatusModalOpen && <StatusModal task={selectedTask} onClose={() => setIsStatusModalOpen(false)} />}
        {isDeleteModalOpen && (
          <DeleteModal
            task={selectedTask}
            onConfirm={() => deleteTask(selectedTask.id)}
            onCancel={() => setIsDeleteModalOpen(false)}
          />
        )}
      </div>
    </div>
  )
}

export default App;