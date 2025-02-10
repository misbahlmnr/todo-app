import { useState } from 'react';
import { useGetTodos } from './libs/Todos/query/useGetTodos';
import Todolist from './todolist/Todolist';
import {
  useCreateTodo,
  useDeleteTodo,
  useUpdateTodo,
} from './libs/Todos/mutation/';

function App() {
  const [formTodo, setFormTodo] = useState({
    todo: '',
    description: '',
    status: 0,
  });
  const [editedTodo, setEditedTodo] = useState(null);

  const { data: dataTodo, isLoading } = useGetTodos();
  const { mutate: createTodo } = useCreateTodo();
  const { mutate: deleteTodo } = useDeleteTodo();
  const { mutate: updateTodo } = useUpdateTodo();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editedTodo) {
      updateTodo(
        {
          id: editedTodo.id,
          title: formTodo.todo,
          description: formTodo.description,
          completed: formTodo.status ? 1 : 0,
          created_at: editedTodo.created_at,
          updated_at: new Date().toISOString(),
        },
        {
          onSuccess: () => {
            setEditedTodo(null);
            setFormTodo({
              todo: '',
              description: '',
              status: false,
            });
          },
        }
      );
    } else {
      createTodo({
        title: formTodo.todo,
        description: formTodo.description,
        completed: formTodo.status ? 1 : 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
    }

    setFormTodo({
      todo: '',
      description: '',
      status: false,
    });
  };

  const handleEdit = (todo) => {
    setFormTodo({
      todo: todo.title,
      description: todo.description,
      status: Boolean(todo.completed),
    });
    setEditedTodo(todo);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="w-full bg-slate-100 h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-xl w-full h-[80vh] shadow-lg">
        <h1 className="text-center text-3xl font-semibold text-slate-600">
          Todo App
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="todo">Nama todo</label>
            <input
              type="text"
              name="todo"
              id="todo"
              placeholder="Masukan nama todo"
              required
              className="form-input"
              value={formTodo.todo}
              onChange={(e) =>
                setFormTodo({ ...formTodo, todo: e.target.value })
              }
            />
          </div>

          <div className="form-control">
            <label htmlFor="description">Deskripsi todo</label>
            <textarea
              name="description"
              id="description"
              placeholder="Masukan deskripsi todo"
              required
              className="form-input"
              value={formTodo.description}
              onChange={(e) =>
                setFormTodo({ ...formTodo, description: e.target.value })
              }
            />
          </div>

          <div className="form-control">
            <label htmlFor="status">Status todo</label>
            <input
              type="checkbox"
              name="status"
              id="status"
              className="self-start accent-blue-500"
              value={Boolean(formTodo.status)}
              checked={formTodo.status}
              onChange={(e) =>
                setFormTodo({ ...formTodo, status: e.target.checked })
              }
            />
          </div>

          <div className="flex gap-3 mt-5 ">
            {editedTodo ? (
              <>
                <a
                  href="#"
                  type="button"
                  className="flex items-center justify-center flex-1 bg-slate-200 text-slate-700 px-4 py-2 rounded-lg"
                  onClick={() => {
                    setEditedTodo(null);
                    setFormTodo({
                      todo: '',
                      description: '',
                      status: false,
                    });
                  }}
                >
                  Batal
                </a>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 rounded-lg text-white flex-1 cursor-pointer"
                >
                  Edit
                </button>
              </>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 rounded-lg text-white w-full cursor-pointer"
              >
                Simpan
              </button>
            )}
          </div>
        </form>

        <div className="mt-5 h-[400px] overflow-y-auto">
          <Todolist
            todos={dataTodo?.data}
            deleteTodo={deleteTodo}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
