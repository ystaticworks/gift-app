import {useState} from "react";
import {Dialog} from "./components/dialog.tsx";
import {Typewriter} from "./components/typewriter.tsx";

function App(){
    const [open, setOpen] = useState(false);

    return (
        <div className="relative max-w-xl mx-auto flex items-center justify-center h-screen">
            <div className="absolute top-0 right-4 md:right-1/4 flex justify-center items-start pt-10 z-[999]">
                <div className="relative bg-white text-black h-44 w-44 flex items-center justify-center text-center rounded-full border-2 border-black shadow-lg pointer-events-auto">
                    <span className="inline-flex font-bold text-sm leading-tight p-4">
                      <Typewriter
                          key={open ? "open" : "close"}
                          text={
                              open
                                  ? "Nah gitu dong..\n\nSekarang buka kadonya"
                                  : "Pencet Tombolnya Yaa Sayaang!!"
                          }
                          speed={80}
                      />
                    </span>

                    <div className="absolute bottom-1 rotate-35 left-5 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px] border-t-white">
                    </div>

                    <div className="absolute -bottom-[1px] rotate-35 left-5 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[18px] border-t-black -z-10">
                    </div>
                </div>
            </div>

            <div className="relative">
                <img
                    src="img2.png"
                    alt="hero"
                    className="max-w-full h-auto"
                />

                <div className="absolute bottom-3 w-full flex font-medium justify-center p-2">
                    <button  onClick={() => setOpen(true)} className="bg-pink-500 text-white px-6 py-2 rounded-md">
                        Try it
                    </button>
                </div>
            </div>

            <Dialog open={open} onClose={() => setOpen(false)} />
        </div>
    )
}

export default App