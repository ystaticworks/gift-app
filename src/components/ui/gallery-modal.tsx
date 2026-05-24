import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { albums } from "../../constants/gallery";
import type { Album } from "../../types/gallery.ts";
import { AlbumGrid } from "./album-grid.tsx";
import { AlbumDetail } from "./album-detail.tsx";

interface Props {
    show: boolean;
    selectedAlbum: Album | null;
    onClose: () => void;
    onSelectAlbum: (album: Album) => void;
    onBack: () => void;
}

export function GalleryModal({
    show,
    selectedAlbum,
    onClose,
    onSelectAlbum,
    onBack,
}: Props) {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
                >
                    <div className="absolute top-6 right-6">
                        <button onClick={onClose} className="text-white">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="relative flex w-full items-center justify-center gap-5">
                        {!selectedAlbum ? (
                            <AlbumGrid
                                albums={albums}
                                onSelect={onSelectAlbum}
                            />
                        ) : (
                            <AlbumDetail
                                album={selectedAlbum}
                                onBack={onBack}
                            />
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
