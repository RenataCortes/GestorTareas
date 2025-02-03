const TaskItem = ({ task, onToggleStatus, onEditTask, onDeleteTask }) => {
    return (
        <div className="flex justify-between items-center p-4 border-b border-[#d59f9f]">
            <div>
                <h3 className={`text-lg text-[#838383] font-bold ${task.completed ? "line-through" : ""}`}>{task.name}</h3>
                <p className="text-sm text-[#8d8d8d] font-medium">{task.description}</p>
            </div>
            <div>
                <button
                    onClick={() => onToggleStatus(task.id)}
                    className={`px-4 py-2 rounded ${task.completed ? "bg-[#b4e76b]" : "bg-[#e7e16b]"} text-white font-semibold`}
                >
                    {task.completed ? "Completada" : "Pendiente"}
                </button>
                <button
                    onClick={() => onEditTask(task)}
                    className="ml-2 px-4 py-2 bg-[#95b9df] text-white font-medium rounded"
                >
                    Editar
                </button>
                <button
                    onClick={() => onDeleteTask(task.id)}
                    className="ml-2 px-4 py-2 bg-[#ea7962] text-white font-medium rounded"
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default TaskItem;