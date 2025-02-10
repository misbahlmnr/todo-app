import { FaRegEdit } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';

export default function TodoAction(props) {
  return (
    <div className="flex items-center gap-0.5">
      <button
        className="btn-action hover:bg-yellow-50 hover:!text-yellow-700"
        onClick={() => props.handleEdit(props.todo)}
      >
        <FaRegEdit className="text-sm" />
      </button>
      <button
        className="btn-action hover:bg-red-50 hover:!text-red-700"
        onClick={() => props.deleteTodo(props.todo.id)}
      >
        <FiTrash2 className="text-sm" />
      </button>
    </div>
  );
}
