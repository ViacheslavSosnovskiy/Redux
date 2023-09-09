import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo } from '../../store/todo/actions'

const TodoList = () => {
    const {todo: todoList} = useSelector((state) => state.todo)
    const dispatch = useDispatch()

    const addTodo = value => {
        dispatch(createTodo(value))
    }  
 return (
    <>
        <h1>My to-do list</h1>
    </>
  )
}

export default TodoList