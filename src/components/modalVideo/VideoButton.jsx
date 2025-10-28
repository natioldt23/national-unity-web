import { useState } from "react";
import ModalVideo from "./modalVide";

const VideoButton = ({ buttonText = "Ver Video", className = "", onClick}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

 

    return (
        <>
            <button 
                className={`video-button ${className}`}
                onClick={onClick ? onClick : () => setIsModalOpen(true)}
                style={{
                    background: '#007bff',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.background = '#0056b3'}
                onMouseOut={(e) => e.target.style.background = '#007bff'}
            >
                 {buttonText}
            </button>
        </>
    );
};

export default VideoButton;