import { useEffect, useRef } from "react";

export default function VideoModal({ url, title, onClose }) {
  const backdropRef = useRef(null);

  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") onClose(); }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  function handleBackdrop(e) {
    if (e.target === backdropRef.current) onClose();
  }

  return (
    <div className="video-modal-backdrop" ref={backdropRef} onClick={handleBackdrop}>
      <div className="video-modal">
        <div className="video-modal-header">
          <span className="video-modal-title">{title}</span>
          <button className="video-modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="video-modal-body">
          <video
            src={url}
            controls
            autoPlay
            className="video-modal-player"
          >
            Your browser does not support video playback.
          </video>
        </div>
      </div>
    </div>
  );
}
