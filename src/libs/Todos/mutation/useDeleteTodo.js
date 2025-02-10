import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosClient from '../../../shared/Config/axiosInit';

const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => axiosClient.delete(`/todos/${id}`),
    onSuccess: () => {
      // Invalidate the 'todos' query to refetch the data
      queryClient.invalidateQueries(['todos']);
    },
  });
};

export default useDeleteTodo;
