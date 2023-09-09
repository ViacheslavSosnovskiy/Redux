import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const TodoDetails = () => {
    const params = useParams()
    const {todo: todoList} = useSelector(state=> state.todo)
  return (
    <>
        {todoList?.map((todo) => (
            todo.id === params.id && <Todo key={todo.id} todo={todo} />
        ))}
    </>
  )
}

export default TodoDetails