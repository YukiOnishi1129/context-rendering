import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useTodoFirstContext } from "../../contexts/TodoContextFirst";

interface TodoInputs {
  todo: string;
}

export const TodoApp: React.VFC = () => {
  console.log("===============");
  console.log("孫コンポーネントです。");
  const { todoList, createTodo, deleteTodo } = useTodoFirstContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoInputs>();

  const onCreateTodo: SubmitHandler<TodoInputs> = (data) => {
    console.log("作成します");
    createTodo(data.todo);
    console.log("作成しました");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onCreateTodo)}>
        <input {...register("todo", { required: true })} />
        {errors.todo && <p>未入力です</p>}
        <input type="submit" value="作成" />
      </form>
      <ul>
        {todoList.length &&
          todoList.map((todo) => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </div>
  );
};
