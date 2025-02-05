import Modal from "./Modal"

const DeleteModal = ({ task, onConfirm, onCancel }) => {
    return (
        <Modal onClose={onCancel}>
            <div className="p-6 max-w-sm mx-auto">
                <h2 className="text-2xl font-bold text-center text-[#d59f9f] mb-6">Confirmar eliminación</h2>
                <p className="text-lg text-center text-neutral-700 font-medium mb-8">¿Estás segurx de querer eliminar la tarea "{task.name}"?</p>
                <div className="flex justify-center space-x-6">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-[#d2d2d2] text-neutral-700 font-medium rounded hover:bg-[#acacac] transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-[#dc583d] text-white font-medium rounded hover:bg-[#c8381a] transition-colors"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default DeleteModal;