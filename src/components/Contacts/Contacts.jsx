import { useFetchContactsQuery, useDeleteContactMutationQuery } from "store/contscts/contactsSlice"

export const Contacts = () => {
    const { data: contacts, isFetching } = useFetchContactsQuery()
    const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutationQuery()

    return (
        <>
            {isFetching && <div>Loading...</div>}
            {contacts && 
                <ul>
                    <li key={contacts.id}>
                        <p>{contacts.name}</p>
                        <p>{contacts.number}</p>
                        <button onClick={() => deleteContact(contacts.id)} disabled={isDeleting}>
                            {isDeleting && 'Loading'}
                            Delete
                        </button>
                    </li>
                </ul>
            }
        </>
    )
}