"use client";

import type { Todo as T } from "./types";

type Props = {
  todo: T
}

export const Todo = ({todo}: Props) => {
  return <p>{todo.title}</p>
}