import TaskItem from "./TaskItem"

const TaskList = ({ tasks, onToggleStatus, onEditTask, onDeleteTask }) => {
    return (
        <div className="mt-6">
            {tasks.length === 0 ? (
                <p className="text-center py-4 text-gray-500">No hay tareas para mostrar</p>
            ) : (
                tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onToggleStatus={onToggleStatus}
                        onEditTask={onEditTask}
                        onDeleteTask={onDeleteTask}
                    />
                ))
            )}
        </div>
    )
}

export default TaskList;