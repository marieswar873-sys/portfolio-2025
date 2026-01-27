import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipForward, SkipBack, Music, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Using GitHub Raw links from a popular open-source music player demo (reliable hosting)
const playlist = [
    { title: "Mecanolith", url: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3" },
    { title: "Szymon", url: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3" },
    { title: "Skylike", url: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/3.mp3" },
    { title: "Sweet Dreams", url: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/4.mp3" },
    { title: "Kontekst", url: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/5.mp3" },
    { title: "Unicorn Heads", url: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/6.mp3" },
    { title: "Broken", url: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/7.mp3" },
    { title: "Adventure", url: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/8.mp3" },
    { title: "Last Night", url: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3" }
];

const Visualizer = ({ isPlaying }) => {
    return (
        <div className="flex items-end gap-1 h-4">
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-1 bg-accent rounded-full"
                    animate={{
                        height: isPlaying ? [4, 16, 8, 12] : 4,
                    }}
                    transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.1,
                    }}
                />
            ))}
        </div>
    );
};

const MusicController = ({ shouldPlay }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [showPlaylist, setShowPlaylist] = useState(false);
    const [showNowPlaying, setShowNowPlaying] = useState(false);
    const [autoplayFailed, setAutoplayFailed] = useState(false);
    const audioRef = useRef(null);

    const currentTrack = playlist[currentTrackIndex];

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.catch(e => {
                        console.log("Audio play failed:", e);
                        setAutoplayFailed(true);
                    });
                }
            }
            setIsPlaying(!isPlaying);
            setAutoplayFailed(false); // Reset error on manual interaction
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const playNext = () => {
        setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
        setIsPlaying(true);
    };

    const playPrev = () => {
        setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
        setIsPlaying(true);
    };

    const handleTrackError = () => {
        console.warn(`Track failed to load: ${currentTrack.title}. Skipping...`);
        // Prevent infinite loop if all fail
        if (currentTrackIndex < playlist.length - 1) {
            setTimeout(() => playNext(), 1000);
        } else {
            console.error("All tracks failed to load.");
        }
    };

    // Handle External Play Trigger (Click to Enter)
    useEffect(() => {
        if (shouldPlay && audioRef.current && !isPlaying) {
            audioRef.current.volume = 0.4;
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setIsPlaying(true);
                        setShowNowPlaying(true);
                        setTimeout(() => setShowNowPlaying(false), 3000);
                    })
                    .catch(e => {
                        console.log("Autoplay blocked even after click:", e);
                        setAutoplayFailed(true);
                    });
            }
        }
    }, [shouldPlay]);

    // Handle Autoplay and Now Playing Popup
    useEffect(() => {
        if (audioRef.current && isPlaying) {
            audioRef.current.play().catch(() => setIsPlaying(false));
        }
    }, [currentTrackIndex]);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
            <audio
                ref={audioRef}
                src={currentTrack.url}
                onEnded={playNext}
                onError={handleTrackError}
                crossOrigin="anonymous"
            />

            {/* Autoplay Failed Warning */}
            <AnimatePresence>
                {autoplayFailed && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="bg-red-500/90 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg mb-2 cursor-pointer"
                        onClick={togglePlay}
                    >
                        <AlertCircle size={14} /> Click to Start Music
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Now Playing Popup */}
            <AnimatePresence>
                {showNowPlaying && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="bg-accent/90 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg mb-2"
                    >
                        <Visualizer isPlaying={true} />
                        Now Playing: {currentTrack.title}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Playlist UI */}
            <AnimatePresence>
                {showPlaylist && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="bg-card-bg/90 glass p-4 rounded-2xl border border-white/10 shadow-2xl w-64 max-h-64 overflow-y-auto mb-2"
                    >
                        <h4 className="text-sm font-bold mb-2 flex items-center gap-2"><Music size={14} /> Playlist</h4>
                        <ul className="space-y-1">
                            {playlist.map((track, i) => (
                                <li
                                    key={i}
                                    onClick={() => { setCurrentTrackIndex(i); setIsPlaying(true); }}
                                    className={`text-xs p-2 rounded cursor-pointer transition-colors ${i === currentTrackIndex ? 'bg-accent/20 text-accent' : 'hover:bg-white/5 text-text-secondary'}`}
                                >
                                    {i + 1}. {track.title}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Controls */}
            <motion.div
                className="flex items-center gap-2 bg-card-bg/80 glass p-2 rounded-full border border-white/10 shadow-lg backdrop-blur-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <button
                    onClick={() => setShowPlaylist(!showPlaylist)}
                    className="p-2 rounded-full hover:bg-white/10 text-text-secondary transition-colors"
                >
                    <Music size={18} />
                </button>

                <div className="w-[1px] h-6 bg-white/10 mx-1" />

                <button onClick={playPrev} className="p-2 rounded-full hover:bg-white/10 text-white transition-colors">
                    <SkipBack size={18} />
                </button>

                <motion.button
                    onClick={togglePlay}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-full text-white shadow-lg ${autoplayFailed ? 'bg-red-500 animate-pulse' : 'bg-accent shadow-accent/20'}`}
                >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </motion.button>

                <button onClick={playNext} className="p-2 rounded-full hover:bg-white/10 text-white transition-colors">
                    <SkipForward size={18} />
                </button>

                <div className="w-[1px] h-6 bg-white/10 mx-1" />

                <button
                    onClick={toggleMute}
                    className="p-2 rounded-full hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
                >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
            </motion.div>
        </div>
    );
};

export default MusicController;
