import { createContext, useContext, VFC, ReactNode, useState } from "react";
/* interface */
import { TodoType } from "../interface/Todo";

interface TodoContextType {
  todoList: Array<TodoType>;
  createTodo: (title: string) => void;
  deleteTodo: (id: number) => void;
}

export const TodoFirstContext = createContext({} as TodoContextType);

const initTodoList: Array<TodoType> = [
  {
    id: 1,
    title: "Todo1",
  },
  {
    id: 2,
    title: "Todo2",
  },
];

export const TodoFirstProvider: VFC<{ children: ReactNode }> = ({
  children,
}) => {
  console.log("コンテキストです。");
  const [todoList, setTodoList] = useState<Array<TodoType>>(initTodoList);
  const [uniqueId, setUniqueId] = useState<number>(initTodoList.length);

  /**
   * 新規登録
   * @param title
   */
  const createTodo = (title: string) => {
    console.log("コンテキストで作成します");
    const nextUniqueId = uniqueId + 1;
    setTodoList([
      ...todoList,
      {
        id: nextUniqueId,
        title,
      },
    ]);
    console.log("コンテキストのTodo更新しました");
    setUniqueId(nextUniqueId);
    console.log("コンテキストのID更新しました");
  };

  /**
   * 削除処理
   * @param id
   */
  const deleteTodo = (id: number) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <TodoFirstContext.Provider
      value={{
        todoList,
        createTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoFirstContext.Provider>
  );
};

export const useTodoFirstContext = () => useContext(TodoFirstContext);
