import { createPortal } from 'react-dom'
import Button from './Button'
import { useEffect, useRef } from 'react'

export default function Modal({ children, open, className = '' }) {
    const dialog = useRef()

    useEffect(() => {
        if (open) {
            dialog.current.showModal()
        } else {
            //document.body.style.overflow = 'auto'
        }
    }, [open])

    return (
        createPortal(
            <dialog className={`modal ${className}`} ref={dialog}>
                <div className="modal-content">{children}</div>
                <div className="modal-actions">
                    <Button onClick={onClose}>Close</Button>
                </div>
            </dialog>
        ),
        document.getElementById('modal')
    )
}
