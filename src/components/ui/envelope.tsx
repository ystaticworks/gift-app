import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { albums } from "../../constants/gallery.ts";

export function Envelope({ onOpen }: { onOpen: () => void }) {
    const [isOpened, setIsOpened] = useState(false);

    const handleClickEnvelope = () => {
        if (isOpened) return;
        window.dispatchEvent(new Event("start-music"));
        setIsOpened(true);
    };

    const handleSuratClick = () => {
        if (isOpened) {
            onOpen();
        }
    };

    return (
        <motion.div
            className="group relative mt-8 h-18 w-32 cursor-pointer"
            onClick={handleClickEnvelope}
            style={{ perspective: 800 }}
            animate={
                !isOpened
                    ? {
                          rotate: [0, -2, 2, -2, 2, 0],
                      }
                    : {}
            }
            transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
            }}
        >
            <div className="absolute inset-0 bg-emerald-600" />

            <div
                className="absolute inset-0 z-60 bg-emerald-600"
                style={{
                    clipPath:
                        "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 50% 50%, 100% 0)",
                }}
            />

            {albums.map((album, index) => {
                const rotations = ["-rotate-12", "rotate-6", "-rotate-6"];

                return (
                    <motion.div
                        key={album.id}
                        onClick={handleSuratClick}
                        className={`absolute -top-1 left-1/2 z-30 h-16 w-24 -translate-x-1/2 overflow-hidden bg-white p-1 shadow-inner ${rotations[index % rotations.length]} `}
                        initial={{ opacity: 0 }}
                        animate={
                            isOpened
                                ? {
                                      opacity: 1,
                                      y: index * -8,
                                  }
                                : {
                                      opacity: 0,
                                  }
                        }
                        transition={{
                            delay: isOpened ? 0.4 + index * 0.08 : 0,
                            duration: 0.3,
                        }}
                    >
                        <img
                            src={album.image}
                            alt={album.title}
                            className="h-full w-full object-cover"
                        />
                    </motion.div>
                );
            })}

            <motion.div
                className="absolute inset-x-0 top-0 z-10 h-1/2 rounded-xl"
                style={{
                    transformOrigin: "50% 0%",
                    backfaceVisibility: "visible",
                    transformStyle: "preserve-3d",
                }}
                initial={false}
                animate={isOpened ? { rotateX: 180 } : { rotateX: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div
                    className="h-full w-full bg-emerald-500 shadow-md"
                    style={{
                        clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
                    }}
                />
            </motion.div>

            {!isOpened && (
                <motion.div className="absolute top-1/2 left-1/2 z-100 -translate-x-1/2 -translate-y-1/2 transform text-rose-500">
                    <Heart size={25} fill={"currentColor"} />
                </motion.div>
            )}
        </motion.div>
    );
}
