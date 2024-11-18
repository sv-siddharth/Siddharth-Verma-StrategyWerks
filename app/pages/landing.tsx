"use client"

import { useState } from 'react';
import Filters from '../components/filters';
import ProductList from '../components/product-list';
import ProductModal from '../components/product-modal';

const Landing = () => {
  const [sortOption, setSortOption] = useState<string>('price_asc');
  const [category, setCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [rating, setRating] = useState<string>('all');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFilterChange = (filter: string) => {
    if (filter.startsWith('price_')) {
      setSortOption(filter);
    } else if (filter.startsWith('category_')) {
      setCategory(filter.replace('category_', ''));
    } else if (filter.startsWith('price_')) {
      setPriceRange(filter.replace('price_', ''));
    } else if (filter.startsWith('rating_')) {
      setRating(filter.replace('rating_', ''));
    }
  };

  const handleProductListError = (errorMessage: string) => {
    setError(errorMessage);
  };

  const handleProductModalError = (errorMessage: string) => {
    setError(errorMessage);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">E-commerce Dashboard</h1>

      <Filters onFilterChange={handleFilterChange} />

      {error && (
        <div className="text-red-500 mb-4">
          Error: {error}
        </div>
      )}

      <ProductList
        sortOption={sortOption}
        category={category}
        priceRange={priceRange}
        rating={rating}
        onProductClick={(productId) => setSelectedProductId(productId)}
        onError={handleProductListError}
      />

      {selectedProductId && (
        <ProductModal
          productId={selectedProductId}
          onClose={() => setSelectedProductId(null)}
          onError={handleProductModalError}
        />
      )}
    </div>
  );
};

export default Landing;