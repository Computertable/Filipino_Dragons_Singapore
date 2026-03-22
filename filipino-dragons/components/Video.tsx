"use client";
import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useInView } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function VideoSection() {
    const containerRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isManualPause, setIsManualPause] = useState(false);

    const isInView = useInView(containerRef, { amount: 0.5 });

    const shouldPlay = isInView && !isManualPause;

    return (
        <section ref={containerRef} className="relative w-full bg-black overflow-hidden group">
            <div className="w-full aspect-video pointer-events-none scale-105">
                <ReactPlayer
                    src="https://www.youtube.com/watch?v=PMmG52TrrGA"
                    width="100%"
                    height="100%"
                    playing={shouldPlay}
                    muted={isMuted}
                    loop={true}
                    config={{
                        youtube: {
                            controls: 0,
                            modestbranding: 1,
                            playsinline: 1,
                            cc_load_policy: 0,
                            iv_load_policy: 3,
                            cc_lang_pref: 'en',
                            hl: 'en',
                        } as any
                    }}
                />
            </div>

            <div
                onClick={() => setIsManualPause(!isManualPause)}
                className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center bg-black/0 hover:bg-black/10 transition-all pointer-events-auto"
            >
                {isManualPause && (
                    <div className="bg-white/20 backdrop-blur-md p-6 rounded-full text-white animate-in zoom-in-75 duration-300">
                        <Play size={48} fill="white" />
                    </div>
                )}
            </div>

            <div className="absolute bottom-6 right-6 z-20 flex gap-4 pointer-events-auto">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsManualPause(!isManualPause);
                    }}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-4 rounded-full transition-all active:scale-90"
                >
                    {isManualPause ? <Play size={24} fill="currentColor" /> : <Pause size={24} fill="currentColor" />}
                </button>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted(!isMuted);
                    }}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-4 rounded-full transition-all active:scale-90"
                >
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
            </div>
        </section>
    );
}