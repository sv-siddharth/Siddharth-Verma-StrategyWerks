import axios from 'axios';
import { Product, ProductResponse } from '../types/api';

// dummy json docs: https://dummyjson.com/docs/products

const API_URL = 'https://dummyjson.com';

// Fetch products with pagination
export const fetchProducts = async (page: number = 1, limit: number = 30, sortOption: string = 'price_asc'): Promise<ProductResponse> => {
  const response = await axios.get<ProductResponse>(`${API_URL}/products`, {
    params: {
      skip: (page - 1) * limit,
      limit,
      sort: sortOption,
    },
  });
  return response.data;
};

// Fetch single product details by ID
export const fetchProductDetails = async (productId: number): Promise<Product> => {
  const response = await axios.get<Product>(`${API_URL}/products/${productId}`);
  return response.data;
};