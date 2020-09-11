import React from 'react';
import './Modal.css';

const Modal = ({ onClose, children, isOpen }) => {
    
    const styles = {
        display: isOpen ? 'block' : 'none'
    }
    return (
        <div style={styles}>
            <div className="modal-bg"></div>
            <div className="modal-wrapper">
                <span className="modal-close" onClick={onClose}>X</span>
                <div className="modal-item">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;