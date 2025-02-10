import { useState } from 'react';
import TodoAction from './TodoAction';

export default function Todo({ todo, deleteTodo, handleEdit }) {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  if (todo.completed) {
    return (
      <li className="flex justify-between items-center flex-col gap-2">
        <div className="flex justify-between items-center w-full">
          <del
            className="font-medium text-slate-700 cursor-pointer"
            onClick={toggleVisibility}
          >
            {todo.title}
          </del>
          <TodoAction
            todo={todo}
            deleteTodo={deleteTodo}
            handleEdit={handleEdit}
          />
        </div>
        {visible && (
          <div className="self-start text-slate-500 text-sm">
            {todo.description}
          </div>
        )}
      </li>
    );
  }

  return (
    <li className="flex justify-between items-center flex-col gap-2">
      <div className="flex justify-between items-center w-full">
        <span
          className="font-medium text-slate-700 cursor-pointer"
          onClick={toggleVisibility}
        >
          {todo.title}
        </span>
        <TodoAction
          todo={todo}
          deleteTodo={deleteTodo}
          handleEdit={handleEdit}
        />
      </div>
      {visible && (
        <div className="self-start text-slate-500 text-sm">
          {todo.description}
        </div>
      )}
    </li>
  );
}
