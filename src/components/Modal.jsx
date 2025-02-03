import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const Modal = ({ children, onClose }) => {
    return createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex justify-center items-center bg-[#bfbfbf]/75 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                className="bg-white p-4 rounded-lg"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </motion.div>
        </motion.div>,
        document.body
    );
};

export default Modal;