"use client"

export const List = ({todos}: {todos: { title: string}[]}) => {
  return <>{todos.map((todo) => <p key={todo.title}>{todo.title}</p>)}</>
}