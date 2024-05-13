import { AddButton } from "./components/AddTodo/AddButton";
import { List } from "./components/List";

export default function Home() {
  const todos = [{ title: "laundry" }, { title: "dishes" }];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="z-10 w-full max-w-5xl font-mono text-sm">
        Serverless Todo App
        <List todos={todos} />
      </div>
      <div className="flex w-full justify-end ">
        <AddButton />
      </div>
    </main>
  );
}
