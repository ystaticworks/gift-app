import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function MusicBadge() {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audio = new Audio(`${import.meta.env.BASE_URL}audio.mpeg`);

        audio.loop = true;
        audio.volume = 0.7;

        audioRef.current = audio;

        const handleStartMusic = () => {
            audio
                .play()
                .then(() => {
                    setIsPlaying(true);
                })
                .catch(() => {
                    setIsPlaying(false);
                });
        };

        window.addEventListener("start-music", handleStartMusic);

        return () => {
            audio.pause();

            window.removeEventListener("start-music", handleStartMusic);
        };
    }, []);

    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <button
            onClick={toggleMusic}
            className="absolute top-6 right-6 z-50 rounded-full border border-white/20 p-1 backdrop-blur-sm"
        >
            <div className="flex items-center gap-3 rounded-full bg-white/20 px-3 py-1.5">
                {isPlaying ? (
                    <Pause size={20} fill="white" color="white" />
                ) : (
                    <Play size={20} fill="white" color="white" />
                )}

                <div className="mr-2 flex flex-col text-left">
                    <span className="text-xs font-bold text-white">JVKE</span>

                    <span className="text-xs text-neutral-400">
                        A Thousand Years
                    </span>
                </div>
            </div>
        </button>
    );
}
