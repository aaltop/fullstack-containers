import React from 'react'

import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => {
    completeTodo(todo)
  }

  return (
    <>
      {todos.map( (todo, index) => {
        return <Todo
          todo={todo}
          onDelete={onClickDelete}
          onComplete={onClickComplete}
        />
      }).reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  )
}

export default TodoList
