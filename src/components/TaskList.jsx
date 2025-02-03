import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggleStatus, onEditTask, onDeleteTask }) => {
    return (
        <div className="rounded-lg border-2 border-[#d59f9f] mt-6">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggleStatus={onToggleStatus}
                    onEditTask={onEditTask}
                    onDeleteTask={onDeleteTask}
                />
            ))}
        </div>
    );
};

export default TaskList;