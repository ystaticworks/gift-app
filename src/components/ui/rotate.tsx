import { Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export function RotateDevice() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
            <motion.div
                animate={{
                    rotate: [0, 90, 90],
                    opacity: [1, 1, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 0.2,
                    times: [0, 0.3, 1],
                    ease: "easeOut",
                }}
                className="mb-6"
            >
                <Smartphone strokeWidth={1} size={90} />
            </motion.div>

            <h1 className="text-xl leading-tight font-bold">
                Putar Perangkat Anda
            </h1>

            <p className="mt-1 px-6 text-center text-sm text-neutral-300">
                Silakan putar layar ke mode landscape
            </p>
        </div>
    );
}
