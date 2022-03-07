import React, { ReactNode } from "react";
import { TodoApp } from "../TodoApp";

export const ParentComponent: React.VFC = () => {
  console.log("親コンポーネントです");
  return <TodoApp />;
};
