import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosClient from '../../../shared/Config/axiosInit';

const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (todo) => axiosClient.post('/todos', todo),
    onSuccess: () => {
      // Invalidate the 'todos' query to refetch the data
      queryClient.invalidateQueries(['todos']);
    },
  });
};

export default useCreateTodo;
