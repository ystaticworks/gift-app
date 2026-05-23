import { motion } from "framer-motion";

const flowers = Array.from({ length: 40 });

export function FlowerRain() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {flowers.map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        y: -100,
                        x: Math.random() * window.innerWidth,
                        rotate: 0,
                        opacity: 0.8,
                    }}
                    animate={{
                        y: window.innerHeight + 100,
                        rotate: 360,
                        opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                        duration: 6 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear",
                    }}
                    className="absolute top-0"
                >
                    <Flower />
                </motion.div>
            ))}
        </div>
    );
}

function Flower() {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 100 100"
            fill="none"
        >
            {/* Petals */}
            <circle cx="50" cy="20" r="18" fill="#ff69b4" />
            <circle cx="80" cy="50" r="18" fill="#ff69b4" />
            <circle cx="50" cy="80" r="18" fill="#ff69b4" />
            <circle cx="20" cy="50" r="18" fill="#ff69b4" />

            {/* Center */}
            <circle cx="50" cy="50" r="15" fill="#ffd700" />
        </svg>
    );
}