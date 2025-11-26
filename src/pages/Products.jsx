import { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { products, categories } from '../data/products';
import { Search } from 'lucide-react';
import '../styles/products.css';

export function Products() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filteredAndSorted = useMemo(() => {
    let filtered = products;

    if (search) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    switch (sortBy) {
      case 'price-low':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...filtered].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...filtered].sort((a, b) => b.rating - a.rating);
      case 'name':
      default:
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }
  }, [search, selectedCategory, sortBy]);

  return (
    <div className="flex-grow-1 py-5">
      <div className="container-lg">
        <h1 className="mb-5">Products</h1>

        <div className="row g-4">
          <div className="col-12 col-lg-3">
            <div className="filter-panel">
              <h3 className="filter-title">Filters</h3>

              <div className="filter-section">
                <label className="filter-label">Search</label>
                <div className="search-input-container">
                  <Search className="search-icon" size={18} />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="form-control search-input"
                  />
                </div>
              </div>

              <div className="filter-section">
                <label className="filter-label">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="form-select filter-input"
                >
                  <option value="">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-section">
                <label className="filter-label">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="form-select filter-input"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-9">
            {filteredAndSorted.length === 0 ? (
              <div className="no-products">
                <p className="fs-5">No products found matching your criteria.</p>
              </div>
            ) : (
              <>
                <p className="text-muted mb-4">
                  Showing {filteredAndSorted.length} product{filteredAndSorted.length !== 1 ? 's' : ''}
                </p>
                <div className="row g-4">
                  {filteredAndSorted.map((product) => (
                    <div key={product.id} className="col-12 col-sm-6 col-lg-4">
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
