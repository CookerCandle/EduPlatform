import { useEffect, useRef } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

const VideoBlock = ({ src }) => {
    const videoRef = useRef(null);

    const base = import.meta.env.BASE_URL === "/" ? "/LPlatform" : import.meta.env.BASE_URL;
    const videoSrc = `${base.replace(/\/$/, "")}${src}`;
    const posterSrc = `${base.replace(/\/$/, "")}/posters/main-poster.png`;

    useEffect(() => {
        const player = new Plyr(videoRef.current, {
            controls: [
                "play-large",
                "play",
                "progress",
                "current-time",
                "mute",
                "volume",
                "settings",
                "fullscreen"
            ],
            settings: ["quality", "speed"],
            autoplay: false,
            seekTime: 10,
        });

        return () => player.destroy();
    }, []);

    return(
        <div className="mx-auto mt-2 shadow-lg border border-white/10 rounded-4 overflow-hidden bg-dark d-flex align-items-center justify-content-center"
            style={{ maxWidth: "900px", width: "100%", aspectRatio: "16 / 9", position: "relative", }}>
            <video
                ref={videoRef}
                className="w-full rounded-2xl"
                poster={posterSrc}
                style={{objectFit: "contain", backgroundColor: "black",}}
            >
                <source src={videoSrc} type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoBlock;