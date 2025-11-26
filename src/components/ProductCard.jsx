import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import '../styles/products.css';

export function ProductCard({ product }) {
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product, 1);
  };

  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
      <div className="product-card">
        <div className="product-image-container">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <span className="product-badge">Sale</span>
        </div>
        <div className="p-3 flex-grow-1 d-flex flex-column">
          <p className="product-category">{product.category}</p>
          <h5 className="product-name">{product.name}</h5>
          <p className="product-description">{product.description}</p>
          
          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                />
              ))}
            </div>
            <span className="rating-text">({product.rating})</span>
          </div>

          <div className="product-footer">
            <span className="product-price">${product.price}</span>
            <button
              onClick={handleAddToCart}
              className="add-to-cart-btn"
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
