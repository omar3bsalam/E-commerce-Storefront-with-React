import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import '../styles/hero.css';

export function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="flex-grow-1 d-flex flex-column">
      <section className="hero-section">
        <div className="container-lg">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to Our Store</h1>
            <p className="hero-subtitle">
              Discover premium electronics and accessories at unbeatable prices.
            </p>
            <Link to="/products" className="hero-button">
              Shop Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container-lg">
          <h2 className="mb-2">Featured Products</h2>
          <p className="text-muted mb-5">Check out our best-selling items</p>
          <div className="row g-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="col-12 col-sm-6 col-lg-4">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: '#f9fafb' }}>
        <div className="container-lg">
          <h2 className="mb-5">Why Shop With Us?</h2>
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: '#3b82f6',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    <CheckCircle2 size={24} color="white" />
                  </div>
                  <h5 className="card-title fw-bold">Fast Shipping</h5>
                  <p className="card-text text-muted">
                    Free shipping on orders over $50. Quick delivery to your doorstep.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: '#3b82f6',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    <CheckCircle2 size={24} color="white" />
                  </div>
                  <h5 className="card-title fw-bold">Quality Products</h5>
                  <p className="card-text text-muted">
                    All products are authentic and come with warranty.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: '#3b82f6',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}>
                    <CheckCircle2 size={24} color="white" />
                  </div>
                  <h5 className="card-title fw-bold">24/7 Support</h5>
                  <p className="card-text text-muted">
                    Dedicated customer support team always ready to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
