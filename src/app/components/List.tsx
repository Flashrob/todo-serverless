"use client"

import { Todo } from "./Todo"
import type { Todo as T } from "./types"

export const List = ({todos}: {todos: T[]}) => {
  return <>{todos.map((todo) => <Todo key={todo.title} todo={todo}/>)}</>
}