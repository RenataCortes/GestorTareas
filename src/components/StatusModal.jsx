import Modal from "./Modal"

const StatusModal = ({ task, onClose }) => {
    return (
        <Modal onClose={onClose}>
            <div className="p-6 max-w-sm mx-auto">
                <h2 className="text-2xl font-bold text-[#d59f9f] mb-4">Estado de la tarea</h2>
                <p className="text-lg mb-2">
                    <span className="font-bold">Nombre:</span> {task.name}
                </p>
                <p className="text-lg mb-2">
                    <span className="font-bold">Descripción:</span> {task.description}
                </p>
                <p className="text-lg mb-4">
                    <span className="font-bold">Estado:</span>{" "}
                    <span className={task.completed ? "text-green-600" : "text-yellow-600"}>
                        {task.completed ? "Completada" : "Pendiente"}
                    </span>
                </p>
                <button
                    onClick={onClose}
                    className="w-full bg-[#d59f9f] text-white font-medium px-4 py-2 rounded hover:bg-[#c48e8e] transition-colors"
                >
                    Cerrar
                </button>
            </div>
        </Modal>
    )
}

export default StatusModal;
