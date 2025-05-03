import { FC } from "react";
import "./style.css";
import { Todo } from "../Todo.interface";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: FC<TodoListProps> = ({ todoList, setTodoList }) => {
  const activeTodos = todoList.filter((todo) => !todo.isDone);
  const completedTodos = todoList.filter((todo) => todo.isDone);

  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active Tasks</span>
        {activeTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        ))}
      </div>

      <div className="todos completed">
        <span className="todos__heading">Completed Tasks</span>
        {completedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
