import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const AuthModalContext = React.createContext();

export function AuthModalProvider({ children }) {
    const modalRef = useRef();
    const [value, setValue] = useState();

    useEffect(() => {
        setValue(modalRef.current);
    }, [])

    return (
        <>
            <AuthModalContext.Provider value={value}>
                {children}
            </AuthModalContext.Provider>
            <div ref={modalRef} />
        </>
    );
}

export function AthModal({ onClose, children }) {
    const modalNode = useContext(AuthModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="auth-modal">
            <div id="auth-modal-background" onClick={onClose} />
            <div id="auth-modal-content">
                {children}
            </div>
        </div>,
        modalNode
    );
}