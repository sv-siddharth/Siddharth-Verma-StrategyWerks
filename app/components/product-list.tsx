"use client"

import { useInfiniteQuery } from '@tanstack/react-query';
import { useRef, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from './product-card';
import { Product, ProductResponse } from '../types/api';
import LoadingSpinner from './loading-spinner';

interface ProductListProps {
  sortOption: string;
  category: string;
  priceRange: string;
  rating: string;
  onProductClick: (productId: number) => void;
  onError: (errorMessage: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ sortOption, category, priceRange, rating, onProductClick, onError }) => {
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    error,
  } = useInfiniteQuery<ProductResponse>({
    queryKey: ['products', sortOption],
    queryFn: ({ pageParam = 1 }) => fetchProducts(pageParam as number, 30, sortOption),
    getNextPageParam: (lastPage) => {
      const nextPage = (lastPage.skip + 30) / 30 + 1;
      return nextPage <= Math.ceil(lastPage.total / 30) ? nextPage : undefined;
    },
    initialPageParam: 1,
  });

  useEffect(() => {
    if (isError && error) {
      onError(error.message);
    }
  }, [isError, error, onError]);

  const filterProducts = (products: Product[]) => {
    return products.filter((product) => {
      const matchesCategory = category === 'all' || product.category === category;
      const matchesPriceRange = priceRange === 'all' || (
        priceRange === '0-50' && product.price >= 0 && product.price <= 50 ||
        priceRange === '50-100' && product.price > 50 && product.price <= 100 ||
        priceRange === '100-200' && product.price > 100 && product.price <= 200
      );
      const matchesRating = rating === 'all' || product.rating >= parseInt(rating);
      return matchesCategory && matchesPriceRange && matchesRating;
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);

    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [hasNextPage, fetchNextPage]);

  if (isError) {
    return (
      <div className="w-full flex justify-center mt-4">
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {data?.pages.map((page) =>
        filterProducts(page.products).map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => onProductClick(product.id)}
          />
        ))
      )}
      <div ref={loadMoreRef} className="w-full flex justify-center mt-4">
        {isFetchingNextPage && <LoadingSpinner />}
      </div>
    </div>
  );
};

export default ProductList;