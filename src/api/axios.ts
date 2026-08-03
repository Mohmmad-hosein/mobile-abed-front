import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
});

// Interceptor برای اضافه کردن توکن به تمام درخواست‌ها
api.interceptors.request.use(
  (config : any) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error : any) => Promise.reject(error)
);

// Interceptor برای مدیریت خطای ۴۰۱ (انقضای توکن)
api.interceptors.response.use(
  (response : any) => response,
  (error : any) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      // در صورت نیاز به ریدایرکت به صفحه لاگین:
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;