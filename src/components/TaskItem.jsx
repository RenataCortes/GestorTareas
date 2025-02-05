import { Edit, Trash2, Circle, CheckCircle } from "lucide-react"

const TaskItem = ({ task, onToggleStatus, onEditTask, onDeleteTask, onShowStatus }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                    <button onClick={() => onToggleStatus(task.id)} className="text-[#d59f9f] hover:text-[#c48e8e]">
                        {task.completed ? <CheckCircle size={24} /> : <Circle size={24} />}
                    </button>
                    <div>
                        <h3 className={`text-lg text-[#838383] font-bold ${task.completed ? "line-through" : ""}`}>{task.name}</h3>
                        <p className="text-sm text-[#8d8d8d] font-medium mt-1">{task.description}</p>
                    </div>
                </div>
                <button
                    onClick={() => onShowStatus(task)}
                    className={`text-sm font-medium px-2 py-1 rounded ${task.completed ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                        }`}
                >
                    {task.completed ? "Completada" : "Pendiente"}
                </button>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
                <button onClick={() => onEditTask(task)} className="text-[#95b9df] hover:text-[#7da8d3]">
                    <Edit size={20} />
                </button>
                <button onClick={() => onDeleteTask(task)} className="text-[#ea7962] hover:text-[#d66a54]">
                    <Trash2 size={20} />
                </button>
            </div>
        </div>
    )
}

export default TaskItem
