import { Users, Target, Heart } from 'lucide-react';

export function About() {
  return (
    <div className="flex-grow-1">
      <div className="container-lg py-5">
        <h1 className="fw-bold mb-5">About Us</h1>

        <div className="row g-5 mb-5">
          <div className="col-12 col-lg-6">
            <h2 className="fw-bold mb-4">Our Story</h2>
            <p className="text-muted mb-3 lh-lg">
              Founded in 2020, our store has become a trusted destination for quality electronics and accessories. We believe in providing the best products at competitive prices with exceptional customer service.
            </p>
            <p className="text-muted lh-lg">
              Our mission is to make cutting-edge technology accessible to everyone. We carefully curate our product selection to ensure you always get the best value for your money.
            </p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-12 col-md-4">
            <div className="text-center">
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  color: '#3b82f6',
                  margin: '0 auto 1rem'
                }}
              >
                <Users size={48} />
              </div>
              <h5 className="fw-bold mb-2">100K+ Customers</h5>
              <p className="text-muted">Trusted by thousands of satisfied customers worldwide</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="text-center">
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  color: '#3b82f6',
                  margin: '0 auto 1rem'
                }}
              >
                <Target size={48} />
              </div>
              <h5 className="fw-bold mb-2">5000+ Products</h5>
              <p className="text-muted">Extensive selection of quality electronics and accessories</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="text-center">
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  color: '#3b82f6',
                  margin: '0 auto 1rem'
                }}
              >
                <Heart size={48} />
              </div>
              <h5 className="fw-bold mb-2">Customer First</h5>
              <p className="text-muted">Dedicated to your satisfaction with 24/7 support</p>
            </div>
          </div>
        </div>

        <div className="bg-light p-5 rounded-3">
          <h2 className="fw-bold mb-4">Our Values</h2>
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <h5 className="fw-bold mb-2">Quality</h5>
              <p className="text-muted">We only stock products that meet our high quality standards</p>
            </div>
            <div className="col-12 col-md-6">
              <h5 className="fw-bold mb-2">Integrity</h5>
              <p className="text-muted">Transparent pricing and honest product descriptions</p>
            </div>
            <div className="col-12 col-md-6">
              <h5 className="fw-bold mb-2">Innovation</h5>
              <p className="text-muted">Always seeking new products and better ways to serve you</p>
            </div>
            <div className="col-12 col-md-6">
              <h5 className="fw-bold mb-2">Excellence</h5>
              <p className="text-muted">Committed to exceptional customer service and support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
