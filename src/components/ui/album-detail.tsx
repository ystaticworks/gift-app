import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import type { Album } from "../../types/gallery.ts";

interface Props {
    album: Album;
    onBack: () => void;
}

export function AlbumDetail({ album, onBack }: Props) {
    return (
        <div className="relative flex w-full max-w-3xl flex-row items-start gap-6 p-6">
            <button
                onClick={onBack}
                className="absolute -top-4 right-10 flex items-center gap-1 rounded-full bg-white/20 px-3 py-1.5 text-white"
            >
                <ChevronLeft size={18} />
                <span className="text-xs">Kembali</span>
            </button>

            <motion.div
                layoutId={`album-${album.id}`}
                initial={false}
                animate={{
                    y: [0, 5, -5, 0],
                }}
                transition={{
                    layout: {
                        duration: 0.3,
                    },
                    y: {
                        delay: 0.5,
                        duration: 5.5,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    },
                }}
                className="flex -rotate-1 flex-col items-center rounded-sm bg-white p-2"
            >
                <div className="h-50 w-50">
                    <img
                        src={album.image}
                        alt={album.title}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="flex items-center gap-0.5 pt-1">
                    <span className="text-center text-xs">{album.title}</span>

                    {album?.icon && (
                        <div className="h-5 w-5">
                            <img
                                src={album.icon}
                                alt={album.title}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    )}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="max-h-[70vh] flex-1 overflow-y-auto pr-2 text-white"
            >
                <div className="text-xs leading-relaxed whitespace-pre-wrap text-neutral-200">
                    {album.description}
                </div>
            </motion.div>
        </div>
    );
}
