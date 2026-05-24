import { Envelope } from "../ui/envelope";

interface Props {
    onOpen: () => void;
}

export function Hero({ onOpen }: Props) {
    return (
        <div className="relative z-10 mt-auto flex h-screen w-full overflow-hidden">
            <div className="mt-auto w-1/3">
                <img
                    src="hero.png"
                    alt="hero"
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="flex flex-1 items-center justify-center">
                <Envelope onOpen={onOpen} />
            </div>
        </div>
    );
}
