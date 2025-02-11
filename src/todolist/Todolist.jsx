import Todo from './Todo';

export default function Todolist(props) {
  const { todos, deleteTodo, handleEdit } = props;
  return (
    <ul className="flex flex-col gap-5 h-full">
      {todos && todos.length > 0 ? (
        todos.map((todo, idx) => (
          <Todo
            key={idx}
            todo={todo}
            deleteTodo={deleteTodo}
            handleEdit={handleEdit}
          />
        ))
      ) : (
        <li className="text-center">Todo belum ada. Silahkan buat todo!</li>
      )}
    </ul>
  );
}
