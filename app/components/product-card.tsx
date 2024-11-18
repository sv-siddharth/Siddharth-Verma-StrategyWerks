import React from 'react';
import { Product } from '../types/api';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  if (!product) {
    return (
      <div className="border rounded-lg p-4 shadow-sm">
        <p className="text-destructive">Error: Product data is missing.</p>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <img
        loading="lazy"
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
      <p className="text-foreground-600">Price: ${product.price.toFixed(2)}</p>
      <p className="text-foreground-500 mt-1">Category: {product.category}</p>
      <p className={`text-sm ${product.availabilityStatus === 'Low Stock' ? 'text-destructive' : 'text-foreground'}`}>
        {product.availabilityStatus}
      </p>
    </div>
  );
};

export default ProductCard;