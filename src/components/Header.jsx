import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import '../styles/navbar.css';

export function Header() {
  const { getTotalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const totalItems = getTotalItems();

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container-lg">
        <Link className="navbar-brand" to="/">
          <div className="navbar-brand-logo">S</div>
          <span>Store</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="ms-3">
          <Link to="/cart" className="cart-link">
            <div className="cart-icon-container">
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
