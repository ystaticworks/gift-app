import { useEffect, useState } from "react";

type Props = {
    text: string;
    speed?: number;
};

export function Typewriter({ text, speed = 50 }: Props) {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        let i = 0;

        const interval = setInterval(() => {
            setDisplayed((prev) => {
                if (i >= text.length) {
                    clearInterval(interval);
                    return prev;
                }
                const next = text.slice(0, i + 1);
                i++;
                return next;
            });
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return <span>{displayed}</span>;
}