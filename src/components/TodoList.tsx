import { FC } from "react";
import "./style.css";
import { Todo } from "../Todo.interface";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: FC<TodoListProps> = ({ todoList, setTodoList }) => {
  return (
    <div className="todos">
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
};

export default TodoList;
