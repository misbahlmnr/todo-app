import { useQuery } from '@tanstack/react-query';
import axiosClient from '../../../shared/Config/axiosInit';

const useGetTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => axiosClient.get('/todos').then((res) => res.data),
  });
};

export { useGetTodos };
