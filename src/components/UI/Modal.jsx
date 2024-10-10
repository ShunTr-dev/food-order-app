import { createPortal } from 'react-dom'
import Button from './Button'
import { useEffect, useRef } from 'react'

export default function Modal({ children, open, className = '' }) {
    const dialog = useRef()

    useEffect(() => {
        const modal = dialog.current
        if (open) {
            modal.showModal()
        }

        return () => {
            modal.close()
        }
    }, [open])

    return createPortal(
        <dialog className={`modal ${className}`} ref={dialog}>
            <div className="modal-content">{children}</div>
        </dialog>,
        document.getElementById('modal')
    )
}