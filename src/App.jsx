import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import initialContacts from './data/Contacts.json'
import ContactForm from './components/ContactForm/ContactForm'
import Filter from './components/Filter/Filter'
import ContactList from './components/ContactList/ContactList'
import Container from './components/Container/Container'

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
    )
  })
  const [filter, setFilter] = useState('')

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const formSubmitHandle = (name, number) => {
    const entry = {
      id: uuidv4(),
      name,
      number,
    }

    contacts.find(
      (contact) =>
        contact.name.toLowerCase() === entry.name.toLowerCase() &&
        contact.number === entry.number,
    )
      ? alert(`${name} is already in contacts`)
      : setContacts([entry, ...contacts])
  }
  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId))
  }

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value)
  }
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    )
  }

  return (
    <>
      <Container>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={formSubmitHandle} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={getVisibleContacts()} onDelete={deleteContact} />
      </Container>
    </>
  )
}
