import { TodoFirstProvider } from "./contexts/TodoContextFirst";
import { ParentComponent } from "./components/ParentComponent";
// import { ReactHookFormSampleSecond } from "./components/ReactHookFormSampleSecond";
import { TodoApp } from "./components/TodoApp";

import "./App.css";

function App() {
  console.log("お爺ちゃんコンポーネントです。");
  return (
    <TodoFirstProvider>
      <div className="App">
        <ParentComponent />
      </div>
    </TodoFirstProvider>
  );
}

export default App;
