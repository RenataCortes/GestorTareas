import { useState } from "react";

const TaskForm = ({ onSubmit, task, onClose }) => {
    const [name, setName] = useState(task ? task.name : "");
    const [description, setDescription] = useState(task ? task.description : "");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validar que el campo name no esté vacío
        if (!name.trim()) {
            setError("El nombre de la tarea es obligatorio");
            return;
        }

        setError(""); // Limpiar mensaje de error
        onSubmit({
            id: task ? task.id : Date.now(),
            name,
            description,
            completed: task ? task.completed : false,
        });
        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 max-w-sm mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">{task ? "Editar tarea" : "Agregar tarea"}</h2>

            {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Mostrar error */}

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre de la tarea"
                className="w-full p-2 border rounded mb-4"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descripción"
                className="w-full p-2 border rounded mb-4"
            />
            <div className="flex justify-center space-x-2">
                <button type="submit" className="bg-[#d59f9f] text-white font-medium px-4 py-2 rounded">
                    {task ? "Actualizar" : "Agregar"}
                </button>
                <button type="button" onClick={onClose} className="bg-[#a5a5a5] text-white font-medium px-4 py-2 rounded">
                    Cancelar
                </button>
            </div>
        </form>
    );
};

export default TaskForm;
