/* eslint-disable import/named */
import axios, { AxiosResponse } from 'axios';

// Định nghĩa interface cho sản phẩm
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

// Hàm lấy sản phẩm từ API
const getProduct = async (): Promise<Product[]> => {
  try {
    const response: AxiosResponse<Product[]> = await axios.get('https://fakestoreapi.com/products?sort=desc&limit=3');
    return response.data;
  } catch (error) {
    // Xử lý lỗi
    throw new Error('Failed to fetch product data');
  }
}

// Hàm lấy sản phẩm slider từ API
const getProductSlider = async (): Promise<Product[]> => {
  try {
    const response: AxiosResponse<Product[]> = await axios.get('https://fakestoreapi.com/products?sort=desc');
    return response.data;
  } catch (error) {
    // Xử lý lỗi
    throw new Error('Failed to fetch product slider data');
  }
}

export { getProduct, getProductSlider };