import type { Album } from "../../types/gallery";
import { AlbumCard } from "./album-card.tsx";

interface Props {
    albums: Album[];
    onSelect: (album: Album) => void;
}

export function AlbumGrid({ albums, onSelect }: Props) {
    const rotations = ["-rotate-3", "rotate-1", "-rotate-1"];

    return (
        <div className="flex flex-wrap justify-center gap-5">
            {albums.map((album, index) => (
                <div
                    key={album.id}
                    className={rotations[index % rotations.length]}
                >
                    <AlbumCard album={album} onClick={() => onSelect(album)} />
                </div>
            ))}
        </div>
    );
}
