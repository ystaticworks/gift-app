import { useEffect, useState } from "react";
import {Play, Smartphone, ChevronLeft, X} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FlowerRain } from "./components/flower.tsx";

const albums = [
    {
        id: 1,
        title: "Musashi Miyamoto",
        image: "https://i.pinimg.com/736x/5f/38/9e/5f389ee6fd2c80c3cd24376b3b7d050a.jpg",
        description:
            "Musashi Miyamoto adalah pendekar legendaris Jepang.\n\n" +
            "Dikenal sebagai 'Kensei' (dewa pedang), ia tidak pernah kalah dalam 60 duel. Album ini terinspirasi dari filosofi 'Gorin no Sho' (Kitab Lima Cincin). Setiap track mewakili elemen: Tanah, Air, Api, Angin, dan Kekosongan.\n\n" +
            "Perjalanan musik ini mengajak pendengar merenungkan strategi, kesabaran, dan keberanian. Produksi album memakan waktu tiga tahun, melibatkan musisi dari Kyoto dan Tokyo. Hasilnya adalah fusi antara koto tradisional dan synthesizer modern. Cocok untuk meditasi, belajar, atau sekadar melarikan diri dari hiruk-pikuk kota.\n\n" +
            "Konon, Miyamoto sendiri pernah menulis bahwa 'kemenangan sejati adalah kemenangan atas diri sendiri'. Album ini berusaha menangkap esensi itu melalui dinamika yang naik turun seperti ombak. Ada saat-saat hening yang menusuk, ada pula ledakan energi yang membangkitkan semangat.\n\n" +
            "Para kritikus musik menyebutnya 'masterpiece yang mengubah cara pandang tentang musik samurai'. Tidak heran jika album ini menduduki puncak tangga lagu independen selama 12 minggu berturut-turut. Jangan lewatkan pula kolaborasinya dengan paduan suara anak-anak dari Nagasaki yang memberikan nuansa haru di track terakhir.\n\n" +
            "Nikmati kedalaman makna di setiap nada. Dan ingatlah, 'Jalan pejuang adalah jalan kesendirian' — tapi melalui album ini, kau tidak akan pernah merasa sendiri.",
    },
    {
        id: 2,
        title: "Aizen Sosuke",
        image: "https://i.pinimg.com/1200x/48/b9/74/48b97417c9c5fab854228227d3c20369.jpg",
        description:
            "Aizen Sosuke — nama yang mengguncang dunia Soul Society. Album ini bukan sekadar musik, melainkan ilusi sempurna yang dirancang untuk membius pendengarnya.\n\n" +
            "Seperti kemampuan 'Kyouka Suigetsu' (Cermin Air Bunga Bulan) miliknya, setiap track dalam album ini memanipulasi persepsi. Kamu akan mendengar melodi yang tampaknya indah, tapi di baliknya tersembunyi nada-nada gelap yang mengiris hati. Sebuah pengalaman auditif yang membuatmu meragukan realitas.\n\n" +
            "Aizen sendiri berkata: 'Kesempurnaan tidak ada di dunia ini. Namun album ini adalah pengecualian.' Proses rekaman melibatkan paduan suara yang direkam terbalik (reverse), kemudian diputar normal — menciptakan harmoni yang tidak wajar tapi memikat.\n\n" +
            "Track pertama berjudul 'Pengkhianatan Lembut', diiringi suara biola yang melengking seperti tawa sinis. Track kelima, 'Kursi Kosong', hanya berisi hening selama 4 menit 44 detik — sebuah penghormatan pada kekosongan kekuasaan yang ia tinggalkan.\n\n" +
            "Para penggemar setia mengaku mendengar bisikan 'Bagus sekali...' di akhir album. Apakah itu suara Aizen atau sekadar sugesti? Tidak ada yang tahu. Yang jelas, setelah mendengarkan album ini, kamu tidak akan pernah melihat dunia dengan cara yang sama.\n\n" +
            "Album ini dilarang diputar di Soul Society karena dinilai terlalu berbahaya bagi moral para shinigami. Tapi bagi manusia biasa, ini adalah karya seni yang menggugah batas antara baik dan jahat. Dengarkan dengan hati-hati — karena sekali terhipnotis, tidak ada jalan kembali.",
    },
    {
        id: 3,
        title: "Thorfinn Karlsefni",
        image: "https://i.pinimg.com/736x/42/7b/2f/427b2fa4087e01254a8aa5325e376f72.jpg",
        description:
            "Thorfinn Karlsefni — seorang pejuang yang berubah menjadi petualang damai. Album ini adalah catatan perjalanan dari Vinland yang sesungguhnya: bukan tentang tanah, tapi tentang ketenangan batin.\n\n" +
            "Dulu Thorfinn haus balas dendam. Setiap nada di track awal terdengar pahit, cepat, dan penuh amarah — seperti dentuman tinju di atas kapal panjang Viking. Tapi perlahan, album ini bertransformasi. Melodi berubah menjadi lebih lambat, lebih hijau, seperti padang rumput Vinland.\n\n" +
            "'A true warrior needs no sword' — filosofi itu menjadi jantung album. Di track ketujuh, tidak ada alat musik selain suara angin, air sungai, dan langkah kaki di tanah. Sebuah 'field recording' dari Islandia yang direkam langsung oleh Thorfinn sendiri (konon).\n\n" +
            "Album ini mengajarkan bahwa kekuatan sejati bukanlah menghancurkan musuh, tapi membangun perdamaian. Setiap kali mendengarkan, kamu diajak melepaskan satu persatu beban masa lalu. Banyak pendengar yang menangis di track terakhir, 'Tidak Ada Musuh di Vinland'.\n\n" +
            "Produser album ini adalah Einar, petani sekaligus musisi yang merekam sesi di gudang jerami. Hasilnya sangat organik, hangat, dan terasa seperti pelukan dari sahabat lama. Tidak heran album ini menjadi soundtrack wajib bagi mereka yang sedang mencari makna hidup.\n\n" +
            "Thorfinn berpesan: 'Kamu tidak perlu pergi jauh untuk menemukan Vinland. Vinland ada di dalam dirimu.' Dengarkan album ini saat matahari terbenam, dengan secangkir madu hangat. Biarkan amarahmu luruh, dan sambut kedamaian yang selama ini kau cari.",
    },
];

function App() {
    const [isPortrait, setIsPortrait] = useState(false);
    const [showModal, setShowModal] = useState(false); // buka/tutup modal
    const [selectedAlbum, setSelectedAlbum] = useState<null | typeof albums[0]>(null);

    useEffect(() => {
        const checkOrientation = () => {
            const isMobile = window.innerWidth < 768;
            setIsPortrait(isMobile && window.innerHeight > window.innerWidth);
        };
        checkOrientation();
        window.addEventListener("resize", checkOrientation);
        return () => window.removeEventListener("resize", checkOrientation);
    }, []);

    const openModal = () => {
        setShowModal(true);
        setSelectedAlbum(null); // reset pilihan
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedAlbum(null);
    };

    const selectAlbum = (album: typeof albums[0]) => {
        setSelectedAlbum(album);
    };

    const backToGallery = () => {
        setSelectedAlbum(null);
    };

    if (isPortrait) {
        return (
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
                <motion.div
                    animate={{
                        rotate: [0, 90, 90],
                        opacity: [1, 1, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 0.2,
                        times: [0, 0.3, 1],
                        ease: "easeOut",
                    }}
                    className="mb-6"
                >
                    <Smartphone strokeWidth={1} size={90} />
                </motion.div>
                <h1 className="text-2xl font-bold leading-tight">Rotate Your Device</h1>
                <p className="mt-1 text-neutral-500 text-center px-6">
                    Please rotate your screen to landscape mode
                </p>
            </div>
        );
    }

    return (
        <div className="h-screen relative">
            <div className="absolute inset-0 z-0">
                <img src="bg.jpeg" alt="hero" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 z-0 bg-black/50" />
            <FlowerRain />
            <div className="absolute top-6 right-6 border border-white/20 rounded-full p-1 z-50 backdrop-blur-sm">
                <div className="flex items-center gap-3 bg-white/20 rounded-full px-3 py-1.5">
                    <Play size={20} fill="white" color="white" />
                    <div className="flex flex-col mr-2">
                        <span className="text-xs text-white font-bold">Bad Omens</span>
                        <span className="text-[10px] text-neutral-400">Just Pretend</span>
                    </div>
                </div>
            </div>
            <div className="relative flex w-full mt-auto h-screen z-10 overflow-hidden">
                <div className="w-1/3 mt-auto">
                    <img src="hero.png" alt="hero" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                    <h1 className="text-3xl p-10 text-white font-black">Click Here!</h1>
                    <button onClick={openModal} className="bg-white/50 backdrop-blur-sm px-3 py-1.5">
                        Try it
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
                    >
                        {/*<div className="absolute inset-0" onClick={closeModal} />*/}
                        <div className="absolute top-6 right-6">
                            <button onClick={closeModal} className="text-white">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="relative w-full flex items-center justify-center gap-5">
                            {!selectedAlbum ? (
                                // TAMPILAN GALERI (SEMUA ALBUM)
                                <div className="flex gap-5 flex-wrap justify-center">
                                    {albums.map((album) => (
                                        <motion.div
                                            key={album.id}
                                            layoutId={`album-${album.id}`}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="bg-white p-2 flex flex-col items-center cursor-pointer rounded-sm"
                                            onClick={() => selectAlbum(album)}
                                        >
                                            <div className="h-50 w-50">
                                                <img
                                                    src={album.image}
                                                    alt={album.title}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                            <span className="text-xs text-center pt-1">{album.title}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="relative flex flex-col md:flex-row gap-6 items-start p-6 max-w-4xl w-full">
                                    <button
                                        onClick={backToGallery}
                                        className="absolute top-2 right-10 flex items-center gap-1 bg-white/20 rounded-full px-3 py-1.5 text-white"
                                    >
                                        <ChevronLeft size={18} />
                                        <span className="text-xs">Back</span>
                                    </button>

                                    <motion.div
                                        layoutId={`album-${selectedAlbum.id}`}
                                        className="bg-white p-2 flex flex-col items-center rounded-sm md:w-1/3"
                                    >
                                        <div className="w-full aspect-square">
                                            <img
                                                src={selectedAlbum.image}
                                                alt={selectedAlbum.title}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <span className="text-sm font-bold mt-2">{selectedAlbum.title}</span>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="flex-1 text-white overflow-y-auto max-h-[70vh] pr-2"
                                    >
                                        <h2 className="text-2xl font-black">{selectedAlbum.title}</h2>
                                        <div className="mt-2 text-neutral-200 leading-relaxed text-xs whitespace-pre-wrap">
                                            {selectedAlbum.description}
                                        </div>
                                    </motion.div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;