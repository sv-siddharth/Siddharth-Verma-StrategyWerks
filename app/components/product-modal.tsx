"use client";

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useQuery } from '@tanstack/react-query';
import { fetchProductDetails } from '../services/api';
import { Product } from '../types/api';
import LoadingSpinner from './loading-spinner';

interface ProductModalProps {
  productId: number | null;
  onClose: () => void;
  onError: (errorMessage: string) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ productId, onClose, onError }) => {
  const { data: productDetails, isLoading, isError, error } = useQuery<Product>({
    queryKey: ['productDetails', productId],
    queryFn: () => fetchProductDetails(productId!),
    enabled: !!productId,
  });

  if (isLoading) return <div className="p-4"><LoadingSpinner/></div>;

  if (isError) {
    onError(error.message);
    return <div className="p-4 text-destructive">Error: {error.message}</div>;
  }

  if (!productDetails) return null;

  return (
    <Dialog open={!!productId} onOpenChange={onClose}>
      <DialogTrigger asChild>
        <button className="hidden">Open Modal</button>
      </DialogTrigger>
      
      <DialogContent className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto p-4 md:p-6 lg:p-8 max-h-[80vh]">
        <div className="relative">
          <DialogHeader className="sticky top-0 pb-4 z-10">
            <DialogTitle className="text-lg md:text-xl lg:text-2xl">{productDetails.title}</DialogTitle>
          </DialogHeader>
          <div className="overflow-y-auto max-h-[70vh] p-4 md:p-6 lg:p-8">
            <DialogDescription asChild>
              <div>
                <img
                  src={productDetails.thumbnail}
                  alt={productDetails.title}
                  className="w-full h-auto my-4"
                />
                <div className="text-sm md:text-base lg:text-lg">{productDetails.description}</div>
                <div className="mt-2 font-semibold text-sm md:text-base lg:text-lg">Price: ${productDetails.price.toFixed(2)}</div>
                <div className="text-foreground-500 text-sm md:text-base lg:text-lg">Stock: {productDetails.stock}</div>
                <div className="text-foreground-500 text-sm md:text-base lg:text-lg">Brand: {productDetails.brand}</div>
                <div className="text-foreground-500 text-sm md:text-base lg:text-lg">Category: {productDetails.category}</div>
              </div>
            </DialogDescription>
            <div className="mt-4">
              <h3 className="text-lg font-bold">Reviews</h3>
              {productDetails.reviews.map((review, index) => (
                <div key={index} className="mt-2 border-b pb-2">
                  <div className="font-semibold text-sm md:text-base lg:text-lg">{review.reviewerName}</div>
                  <div className="text-foreground-600 text-sm md:text-base lg:text-lg">Rating: {review.rating} / 5</div>
                  <div className="text-foreground-700 text-sm md:text-base lg:text-lg">{review.comment}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;