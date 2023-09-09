import { Contacts } from 'components/Contacts/Contacts'
import React from 'react'
import { Link } from 'react-router-dom'

const ContactsPage = () => {
  return (
    <>
        <Link to="/create">Create contact</Link>
        <Contacts />
    </>
  )
}

export default ContactsPage