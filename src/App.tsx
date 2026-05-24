import { useState } from "react";
import type { Album } from "./types/gallery.ts";
import { FlowerRain } from "./components/ui/flower.tsx";
import { useOrientation } from "./hooks/useOrientation.ts";
import { RotateDevice } from "./components/ui/rotate.tsx";
import { Hero } from "./components/ui/hero.tsx";
import { Background } from "./components/ui/background.tsx";
import { MusicBadge } from "./components/ui/music-badge.tsx";
import { GalleryModal } from "./components/ui/gallery-modal.tsx";

function App() {
    const isPortrait = useOrientation();
    const [showModal, setShowModal] = useState(false);
    const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

    const openModal = () => {
        setShowModal(true);
        setSelectedAlbum(null);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedAlbum(null);
    };

    const backToGallery = () => {
        setSelectedAlbum(null);
    };

    if (isPortrait) {
        return <RotateDevice />;
    }

    return (
        <div className="relative h-screen">
            <Background />
            <FlowerRain />
            <MusicBadge />
            <Hero onOpen={openModal} />
            <GalleryModal
                show={showModal}
                selectedAlbum={selectedAlbum}
                onClose={closeModal}
                onSelectAlbum={setSelectedAlbum}
                onBack={backToGallery}
            />
        </div>
    );
}

export default App;
