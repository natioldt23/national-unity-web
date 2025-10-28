import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./modalVideo.css";

const ModalVideo = ({ videoId, isOpen, onClose, title, showOnFirstVisit = false }) => {
    const { t } = useTranslation();
    const [showModal, setShowModal] = useState(false);

    
    useEffect(() => {
        if (showOnFirstVisit) {
            // Verificar si es la primera vez que visita la página
            const hasVisited = localStorage.getItem('hasVisitedPage');
            if (!hasVisited) {
                setShowModal(true);
                localStorage.setItem(`hasVisitedPage ${videoId}`, 'true');
            }
        } else {
            setShowModal(isOpen);
        }
    }, [isOpen, showOnFirstVisit]);

    const handleClose = () => {
        setShowModal(false);
        if (onClose) {
            onClose();
        }
    };

    // Manejar tecla Escape
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape' && showModal) {
                handleClose();
            }
        };

        if (showModal) {
            document.addEventListener('keydown', handleEscape);
            // Prevenir scroll del body cuando el modal está abierto
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [showModal]);

    if (!showModal) return null;

    return (
        <div className="modal-video-overlay" onClick={handleClose}>
            <div className="modal-video-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-video-close" onClick={handleClose} aria-label="Cerrar modal">
                    &times;
                </button>
                <div className="modal-video-wrapper">
                    <h3 className="modal-video-title">{title || 'Video Informativo'}</h3>
                    <video width="100%" height="auto" controls autoPlay muted>
                        <source src={`/videos/${videoId}.mp4`} type="video/mp4" />
                        Tu navegador no soporta la reproducción de video.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default ModalVideo;
