import { AnimatePresence, motion } from "framer-motion";
import {Gift} from "lucide-react";
import {useState} from "react";

type DialogProps = {
    open: boolean;
    onClose: () => void;
};

export function Dialog({ open, onClose }: DialogProps) {
    const [showCards, setShowCards] = useState(false);

    const handleGiftClick = () => {
        setShowCards(true);
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 flex flex-col items-center gap-4 justify-center bg-black/50 z-50"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative flex items-center justify-center"
                    >
                    {!showCards && (
                        <motion.div
                            onClick={handleGiftClick}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0,  opacity: 0 }}
                            className="bg-white rounded-xl shadow-lg h-20 w-20 text-center relative text-pink-500"
                        >
                            <Gift size={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
                        </motion.div>
                    )}
                    {showCards && (
                        <>
                            <motion.div
                                initial={{ scale: 0.8, x: 0, y: 0, opacity: 0 }}
                                animate={{ scale: 1, x: -110, y: 10, opacity: 1, rotate: -10 }}
                                transition={{ delay: 0.3 }}
                                className="absolute bg-white rounded-xl shadow-lg h-32 w-24"
                            />
                            <motion.div
                                initial={{ scale: 0.8, x: 0, y: 0, opacity: 0 }}
                                animate={{ scale: 1, x: 0, y: 0, opacity: 1 }}
                                className="absolute bg-white rounded-xl shadow-lg h-32 w-24"
                            />
                            <motion.div
                                initial={{ scale: 0.8, x: 0, y: 0, opacity: 0 }}
                                animate={{ scale: 1, x: 110, y: 10, opacity: 1, rotate: 10 }}
                                transition={{ delay: 0.3 }}
                                className="absolute bg-white rounded-xl shadow-lg h-32 w-24"
                            />
                        </>
                    )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}