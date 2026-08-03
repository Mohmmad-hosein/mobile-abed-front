import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../api/services';
import toast from 'react-hot-toast';

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    onError: (err: any) => {
      const errorMessage = err.response?.data?.error || err.response?.data?.message || "مشکلی در ورود پیش آمد.";
      toast.error(errorMessage);
    },
  });
};