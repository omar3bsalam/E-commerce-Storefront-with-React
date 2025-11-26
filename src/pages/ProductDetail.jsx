import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../hooks/useCart';
import { ProductCard } from '../components/ProductCard';
import { Star, ShoppingCart, ArrowLeft } from 'lucide-react';
import '../styles/products.css';

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === parseInt(id));
  const recommendedProducts = products.filter((p) => p.id !== product?.id).slice(0, 4);

  if (!product) {
    return (
      <div className="flex-grow-1 container-lg py-5 text-center">
        <p className="text-muted">Product not found</p>
        <button
          onClick={() => navigate('/products')}
          className="btn btn-primary mt-3"
        >
          Back to Products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, Math.min(prev + change, product.stock)));
  };

  return (
    <div className="flex-grow-1 py-5">
      <div className="container-lg">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-link ps-0 mb-4 d-flex align-items-center gap-2"
          style={{ textDecoration: 'none' }}
        >
          <ArrowLeft size={20} /> Back
        </button>

        <div className="row g-5 mb-5">
          <div className="col-12 col-md-6">
            <div
              style={{
                backgroundColor: '#f3f4f6',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                height: '400px'
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <p className="text-muted text-uppercase small fw-bold mb-2">
              {product.category}
            </p>
            <h1 className="fw-bold mb-3">{product.name}</h1>

            <div className="d-flex align-items-center gap-3 mb-4">
              <div className="d-flex align-items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.floor(product.rating) ? 'filled' : ''}
                    style={{
                      fill: i < Math.floor(product.rating) ? '#fbbf24' : 'none',
                      color: i < Math.floor(product.rating) ? '#fbbf24' : '#d1d5db'
                    }}
                  />
                ))}
              </div>
              <span className="text-muted">({product.rating} out of 5)</span>
            </div>

            <p className="fs-6 text-muted mb-4">{product.longDescription}</p>

            <div className="bg-light p-4 rounded-3 mb-4">
              <p className="text-muted small mb-2">Price</p>
              <h2 className="fw-bold mb-3">${product.price}</h2>
              <p className="small">
                {product.stock > 0 ? (
                  <span style={{ color: '#10b981', fontWeight: '600' }}>
                    In Stock ({product.stock} available)
                  </span>
                ) : (
                  <span style={{ color: '#dc2626', fontWeight: '600' }}>
                    Out of Stock
                  </span>
                )}
              </p>
            </div>

            <div className="mb-4">
              <label className="form-label fw-bold small text-uppercase">Quantity</label>
              <div className="d-flex align-items-center gap-3">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="btn btn-outline-secondary"
                  style={{ width: '40px', height: '40px', padding: 0 }}
                >
                  −
                </button>
                <span className="fs-5 fw-bold" style={{ minWidth: '50px', textAlign: 'center' }}>
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="btn btn-outline-secondary"
                  style={{ width: '40px', height: '40px', padding: 0 }}
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="btn btn-primary w-100 py-3 fw-bold d-flex align-items-center justify-content-center gap-2 mb-3"
            >
              <ShoppingCart size={20} /> Add to Cart
            </button>

            {added && (
              <div className="alert alert-success text-center mb-0">
                ✓ Added to cart successfully!
              </div>
            )}
          </div>
        </div>

        <div className="border-top pt-5">
          <h2 className="fw-bold mb-4">Recommended Products</h2>
          <div className="row g-4">
            {recommendedProducts.map((p) => (
              <div key={p.id} className="col-12 col-sm-6 col-lg-3">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
