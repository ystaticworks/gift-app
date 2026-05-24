export function Background(){
    return (
        <>
            <div className="absolute inset-0 z-0">
                <img
                    src="bg.jpeg"
                    alt="hero"
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="absolute inset-0 z-0 bg-black/50" />
        </>
    );
}