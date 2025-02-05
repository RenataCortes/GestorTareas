import { useState, useEffect } from "react"

const TaskForm = ({ onSubmit, task, onClose }) => {
    const [name, setName] = useState(task ? task.name : "")
    const [description, setDescription] = useState(task ? task.description : "")
    const [error, setError] = useState("")

    useEffect(() => {
        if (task) {
            setName(task.name)
            setDescription(task.description)
        }
    }, [task])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name.trim()) {
            setError("El nombre de la tarea es obligatorio")
            return
        }

        setError("")
        const updatedTask = {
            id: task ? task.id : Date.now(),
            name,
            description,
            completed: task ? task.completed : false,
        }
        onSubmit(updatedTask)
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="p-6">
                <h2 className="text-2xl text-center font-bold text-[#d59f9f] mb-6">{task ? "Editar tarea" : "Agregar tarea"}</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre de la tarea"
                    className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#d59f9f]"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Descripción"
                    className="w-full p-2 mb-6 border rounded focus:outline-none focus:ring-2 focus:ring-[#d59f9f]"
                />
                <div className="flex justify-center space-x-2">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 bg-[#d2d2d2] font-medium text-neutral-700 rounded hover:bg-[#acacac] transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-[#d59f9f] text-white rounded hover:bg-[#c48e8e] transition-colors"
                    >
                        {task ? "Actualizar" : "Agregar"}
                    </button>
                </div>
            </div>
        </form>
    )
}

export default TaskForm;
