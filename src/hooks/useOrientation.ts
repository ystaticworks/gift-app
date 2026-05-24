import { useEffect, useState } from "react";

export const useOrientation = () => {
    const [isPortrait, setIsPortrait] = useState(false);

    useEffect(() => {
        const checkOrientation = () => {
            const isMobile = window.innerWidth < 768;

            setIsPortrait(isMobile && window.innerHeight > window.innerWidth);
        };

        checkOrientation();

        window.addEventListener("resize", checkOrientation);

        return () => {
            window.removeEventListener("resize", checkOrientation);
        };
    }, []);

    return isPortrait;
};
