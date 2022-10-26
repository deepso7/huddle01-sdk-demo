import { useEffect, useRef, useState } from "react";

const VideoContainer = () => {
  const [track, setTrack] = useState<MediaStreamTrack>();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        video.srcObject = stream;
        setTrack(stream.getTracks()[0]);
      });
    }
  }, []);

  return <video ref={videoRef} autoPlay className="w-full h-full" />;
};

export default VideoContainer;
