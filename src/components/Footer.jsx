import '../styles/footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div>
            <h5 className="footer-section-title">About Us</h5>
            <p className="footer-section-content">
              Your premier online store for quality electronics and accessories.
            </p>
          </div>
          <div>
            <h5 className="footer-section-title">Quick Links</h5>
            <ul className="footer-link-list">
              <li className="footer-link-item">
                <a href="#" className="footer-link">Home</a>
              </li>
              <li className="footer-link-item">
                <a href="#" className="footer-link">Products</a>
              </li>
              <li className="footer-link-item">
                <a href="#" className="footer-link">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="footer-section-title">Support</h5>
            <ul className="footer-link-list">
              <li className="footer-link-item">
                <a href="#" className="footer-link">FAQ</a>
              </li>
              <li className="footer-link-item">
                <a href="#" className="footer-link">Shipping Info</a>
              </li>
              <li className="footer-link-item">
                <a href="#" className="footer-link">Returns</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="footer-section-title">Contact</h5>
            <div className="footer-section-content">
              <p>Email: info@store.com</p>
              <p>Phone: 1-800-STORE</p>
              <p>Address: 123 Store St, City, ST</p>
            </div>
          </div>
        </div>
        
        <div className="footer-divider">
          <div className="footer-bottom">
            <p className="footer-copyright">
              &copy; 2024 Online Store. All rights reserved.
            </p>
            <div className="footer-legal-links">
              <a href="#" className="footer-legal-link">Privacy Policy</a>
              <a href="#" className="footer-legal-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
