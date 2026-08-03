import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  fetchProducts,
  fetchProductById,
  addToCart,
  toggleWishlist,
} from '../api/services';

// هوک دریافت لیست محصولات
export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};

// هوک دریافت جزئیات یک محصول
export const useProductDetails = (id : string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,
  });
};

// هوک افزودن به سبد خرید همراه با Invalidate کردن کوئری مربوطه
export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      // به‌روزرسانی مجدد اطلاعات سبد خرید کاربر
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
};

// هوک افزودن/حذف از علاقه‌مندی‌ها
export const useToggleWishlist = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleWishlist,
    onSuccess: (_, productId) => {
      queryClient.invalidateQueries({ queryKey: ['product', productId] });
      queryClient.invalidateQueries({ queryKey: ['wishlist'] });
    },
  });
};