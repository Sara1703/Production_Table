import { useEffect } from "react";
import "./Video.css"

const VideoModal = ({ videoId, titulo, onClose }) => {
  // Cerrar con la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="video-titulo"
      style={{ zIndex: 1100 }} 
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '900px', padding: 0, backgroundColor: '#000' }}>
        
        <header className="modal-header" style={{ padding: '1rem 1.5rem', backgroundColor: '#fff' }}>
          <h2 id="video-titulo" className="modal-titulo">{titulo}</h2>
          <button className="btn-cerrar" onClick={onClose}>
            Cerrar video
          </button>
        </header>

        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
          {/* Intentamos incrustar el video */}
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
            title={titulo}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* 👇 Mensaje de respaldo por si el video no se deja incrustar 👇 */}
        <div className="video-respaldo">
            <p className="texto-requiere-internet">
            La reproducción requiere internet.
          </p>

          <a 
            href={`https://www.youtube.com/watch?v=${videoId}`} 
            target="_blank" 
            rel="noreferrer"
            className="enlace-youtube"
          >
            Abrir en YouTube (nueva pestaña)
          </a>
        </div>

      </div>
    </div>
  );
};

export default VideoModal;