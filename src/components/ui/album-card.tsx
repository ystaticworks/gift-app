import { motion } from "framer-motion";
import type { Album } from "../../types/gallery.ts";

interface Props {
    album: Album;
    onClick: () => void;
}

export function AlbumCard({ album, onClick }: Props) {
    return (
        <motion.div
            layoutId={`album-${album.id}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            className="flex cursor-pointer flex-col items-center rounded-sm bg-white p-2"
            onClick={onClick}
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
    );
}
