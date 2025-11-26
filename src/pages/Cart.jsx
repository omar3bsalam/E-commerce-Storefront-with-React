import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';
import '../styles/cart.css';

export function Cart() {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCart();
  const total = getTotalPrice();

  if (items.length === 0) {
    return (
      <div className="flex-grow-1 container-lg py-5 text-center">
        <ShoppingCart size={48} style={{ margin: '0 auto', opacity: 0.5, display: 'block' }} className="mb-3" />
        <h1 className="fw-bold mb-3">Your cart is empty</h1>
        <p className="text-muted mb-4">Start shopping to add items to your cart!</p>
        <Link
          to="/products"
          className="btn btn-primary"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-grow-1 container-lg py-5">
      <h1 className="fw-bold mb-5">Shopping Cart</h1>

      <div className="row g-4">
        <div className="col-12 col-lg-8">
          <div className="card border-0 shadow-sm">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h5 className="cart-item-name">{item.name}</h5>
                  <p className="cart-item-category">{item.category}</p>
                  <p className="cart-item-price">${item.price}</p>
                </div>
                <div className="d-flex flex-column align-items-center gap-3 ms-auto">
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <p className="cart-item-total">${(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="remove-btn"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <div className="order-summary sticky-top" style={{ top: '100px' }}>
            <h5 className="order-summary-title">Order Summary</h5>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span style={{ color: '#10b981', fontWeight: '600' }}>FREE</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>${(total * 0.1).toFixed(2)}</span>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <span className="total-amount">${(total * 1.1).toFixed(2)}</span>
            </div>

            <Link
              to="/checkout"
              className="checkout-btn"
              style={{ textDecoration: 'none', display: 'inline-block', width: '100%' }}
            >
              Proceed to Checkout
            </Link>

            <Link
              to="/products"
              className="continue-shopping-btn"
              style={{ textDecoration: 'none', display: 'inline-block', width: '100%' }}
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
