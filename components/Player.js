"use client"; // ถ้าใช้ App Router ให้ใส่บรรทัดนี้

import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function Player({ streamUrl }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(streamUrl);
        hls.attachMedia(videoRef.current);

        return () => {
          hls.destroy();
        };
      } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        // Safari รองรับ m3u8 โดยตรง
        videoRef.current.src = streamUrl;
      }
    }
  }, [streamUrl]);

  return (
    <video
      ref={videoRef}
      controls
      autoPlay
      style={{ width: "100%", maxWidth: "800px", background: "#000" }}
    />
  );
}
