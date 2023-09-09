import { useCreateContactMutationQuery } from 'store/contscts/contactsSlice'
import { createTodo } from 'store/todo/actions'

const CreateContact = () => {
    const [CreateContact, {isLoading}] = useCreateContactMutationQuery()

    const handleSubmit = e => {
        e.preventDefault()
        createTodo(e.target.elements.contact.value)
        e.target.reset()
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' name="contact"/>
        <button type="submit">
            {isLoading ? 'Loading...' : 'Create'}
        </button>
    </form>
  )
}

export default CreateContact