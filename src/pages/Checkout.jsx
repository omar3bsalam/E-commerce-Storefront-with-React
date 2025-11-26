import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { Mail, Phone, MapPin } from 'lucide-react';
import '../styles/checkout.css';

export function Checkout() {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const total = getTotalPrice();
  const taxAmount = total * 0.1;
  const finalTotal = total + taxAmount;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
      clearCart();
    }
  };

  if (items.length === 0 && step !== 3) {
    return (
      <div className="flex-grow-1 container-lg py-5 text-center">
        <p className="text-muted fs-5 mb-3">Your cart is empty</p>
        <button
          onClick={() => navigate('/products')}
          className="btn btn-primary"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="flex-grow-1 container-lg py-5">
        <div className="success-page">
          <div className="success-icon">✓</div>
          <h1 className="success-title">Order Successful!</h1>
          <p className="success-subtitle">Thank you for your purchase. Your order has been confirmed.</p>
          
          <div className="order-details-box">
            <h5 className="fw-bold mb-3">Order Details</h5>
            <div className="details-grid">
              <div className="detail-item">
                <p className="detail-label">Order Number</p>
                <p className="detail-value">#{Math.floor(Math.random() * 1000000)}</p>
              </div>
              <div className="detail-item">
                <p className="detail-label">Total Amount</p>
                <p className="detail-value">${finalTotal.toFixed(2)}</p>
              </div>
              <div className="detail-item">
                <p className="detail-label">Recipient</p>
                <p className="detail-value">{formData.firstName} {formData.lastName}</p>
              </div>
              <div className="detail-item">
                <p className="detail-label">Email</p>
                <p className="detail-value">{formData.email}</p>
              </div>
            </div>
          </div>

          <div className="success-message">
            A confirmation email has been sent to <strong>{formData.email}</strong>
          </div>
          <div className="success-message">
            Your order will be shipped to:<br />
            <strong>
              {formData.address}, {formData.city}, {formData.state} {formData.zipCode}
            </strong>
          </div>

          <button
            onClick={() => navigate('/')}
            className="home-button"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-grow-1 py-5">
      <div className="container-lg">
        <h1 className="fw-bold mb-5">Checkout</h1>

        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <div className="progress-stepper">
                  <div className={`step-circle ${step >= 1 ? 'active' : ''}`}>1</div>
                  <div className={`step-line ${step >= 2 ? 'active' : ''}`}></div>
                  <div className={`step-circle ${step >= 2 ? 'active' : ''}`}>2</div>
                  <div className={`step-line ${step >= 3 ? 'active' : ''}`}></div>
                  <div className={`step-circle ${step >= 3 ? 'active' : ''}`}>3</div>
                </div>
                <p className="text-center text-muted mb-0">
                  {step === 1 ? 'Shipping Information' : 'Payment Information'}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmitOrder} className="checkout-form">
              {step === 1 ? (
                <div>
                  <h5 className="form-section-title">
                    <MapPin className="form-section-icon" /> Shipping Address
                  </h5>
                  <div className="row g-3 mb-4">
                    <div className="col-12 col-md-6">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="form-control form-input"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="form-control form-input"
                      />
                    </div>
                  </div>
                  <div className="row g-3 mb-4">
                    <div className="col-12 col-md-6">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-control form-input"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="form-control form-input"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="address"
                      placeholder="Street Address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="form-control form-input"
                    />
                  </div>
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="form-control form-input"
                      />
                    </div>
                    <div className="col-12 col-md-3">
                      <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="form-control form-input"
                      />
                    </div>
                    <div className="col-12 col-md-3">
                      <input
                        type="text"
                        name="zipCode"
                        placeholder="ZIP Code"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        className="form-control form-input"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <h5 className="form-section-title">
                    <Mail className="form-section-icon" /> Payment Information
                  </h5>
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                    maxLength="16"
                    className="form-control form-input mb-4"
                  />
                  <div className="row g-3 mb-4">
                    <div className="col-6">
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        required
                        maxLength="5"
                        className="form-control form-input"
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                        maxLength="3"
                        className="form-control form-input"
                      />
                    </div>
                  </div>
                  <div className="payment-info-note">
                    Use any valid values for testing (e.g., 4532 1234 5678 9010, 12/25, 123)
                  </div>
                </div>
              )}

              <div className="form-buttons">
                {step === 2 && (
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn-back"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className={`btn-continue ${step === 1 ? 'w-100' : ''}`}
                >
                  {step === 1 ? 'Continue to Payment' : 'Complete Order'}
                </button>
              </div>
            </form>
          </div>

          <div className="col-12 col-lg-4">
            <div className="order-summary sticky-top" style={{ top: '100px' }}>
              <h5 className="order-summary-title">Order Summary</h5>

              <div className="border-bottom pb-3 mb-3">
                {items.map((item) => (
                  <div key={item.id} className="summary-row">
                    <span className="text-muted small">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="fw-bold small">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="summary-row mb-2">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="summary-row mb-4">
                <span>Tax (10%)</span>
                <span>${taxAmount.toFixed(2)}</span>
              </div>

              <div className="summary-total">
                <span>Total</span>
                <span className="total-amount">${finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
