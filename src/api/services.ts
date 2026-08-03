import api from './axios';

export interface LoginPayload {
  username?: string;
  password: string;
}

export interface SignupPayload {
  username: string;
  email: string;
  password: string;
}

// ورود
export const loginUser = async (credentials: LoginPayload) => {
  const { data } = await api.post('/auth/login', credentials);
  if (data.token) {
    localStorage.setItem('token', data.token);
  }
  return data;
};

// ثبت‌نام
export const signupUser = async (userData: SignupPayload) => {
  const { data } = await api.post('/auth/signup', userData);
  if (data.token) {
    localStorage.setItem('token', data.token);
  }
  return data;
};

// دریافت اطلاعات پروفایل کاربر متصل
export const fetchCurrentUser = async () => {
  const { data } = await api.get('/auth/me');
  return data;
};

// خدمات محصولات
export const fetchProducts = async () => {
  const { data } = await api.get('/products');
  return data;
};

export const fetchProductById = async (id : string) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};

export const createProduct = async (formData : FormData) => {
  // برای آپلود عکس، content-type باید multipart/form-data باشد
  const { data } = await api.post('/products', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};

// خدمات اکشن‌های محصول
export const addComment = async ({ productId, text } : { productId : string, text : string }) => {
  const { data } = await api.post(`/products/${productId}/comments`, { text });
  return data;
};

export const addToCart = async ({ productId, quantity } : { productId : string, quantity : number }) => {
  const { data } = await api.post(`/products/${productId}/cart`, { quantity });
  return data;
};

export const toggleWishlist = async (productId : string) => {
  const { data } = await api.post(`/products/${productId}/wishlist`);
  return data;
};

// خدمات چت مشاوره
export const getOrCreateChatRoom = async (type = 'sales') => {
  const { data } = await api.post('/chat/room', { type });
  return data;
};

export const fetchChatMessages = async (roomId : string) => {
  const { data } = await api.get(`/chat/room/${roomId}/messages`);
  return data;
};