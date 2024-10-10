import { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import { currencyFormatter } from '../util/formatting'
import Button from './UI/Button'
import UserProgressContext from '../store/UserProgressContext'

export default function Cart() {
    const cartCtx = useContext(CartContext)
    const cartTotal = cartCtx.items.reduce((total, item) => total + item.price * item.quantity, 0)
    const userProgressCtx = useContext(UserProgressContext)

    function handleCloseCart() {
        userProgressCtx.hideCart()
    }

    return (
        <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item) => (
                    <li key={item.id}>
                        <div>
                            <h3>{item.name}</h3>
                            <p>
                                {item.quantity} x {item.price}
                            </p>
                        </div>
                        <div>
                            <button>-</button>
                            <button>+</button>
                        </div>
                    </li>
                ))}
            </ul>
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseCart}>
                    Close
                </Button>
                <Button onClick={handleCloseCart}>Go to checkOut</Button>
            </p>
        </Modal>
    )
}
