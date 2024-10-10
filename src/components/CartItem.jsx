import { currencyFormatter } from '../util/formatting'

export default function CartItem({ name, qty, price, onIncrease, onDecrease }) {
    return (
        <li className="cart-item">
            <p>
                {name} - {qty} x {currencyFormatter.format(price)}
            </p>
            <p className="cart-item-actions">
                <button onClick={onIncrease}>+</button>
                <span>{qty}</span>
                <button onClick={onDecrease}>-</button>
            </p>
        </li>
    )
}
