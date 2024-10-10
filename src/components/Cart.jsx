import { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext'
import { currencyFormatter } from '../util/formatting'
import Button from './UI/Button'
import UserProgressContext from '../store/UserProgressContext'
import CartItem from './CartItem'

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
                    <CartItem
                        key={item.id}
                        name={item.name}
                        qty={item.quantity}
                        price={item.price}
                        onIncrease={cartCtx.addItem}
                        onDecrease={cartCtx.removeItem}
                    />
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
