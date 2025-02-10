import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosClient from '../../../shared/Config/axiosInit';

const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (todo) => axiosClient.put(`/todos/${todo.id}`, todo),
    onSuccess: () => {
      // Invalidate the 'todos' query to refetch the data
      queryClient.invalidateQueries(['todos']);
    },
  });
};

export default useUpdateTodo;
