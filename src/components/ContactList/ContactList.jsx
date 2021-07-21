import React from 'react'
import PropTypes from 'prop-types'
import {
  ContactsList,
  ContactListItem,
  ContactListText,
  BtnDel,
} from './ContactList.styles'

export default function ContactList({ contacts, onDelete }) {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <ContactListText>
            {name}:&nbsp;{number}
          </ContactListText>
          <BtnDel onClick={() => onDelete(id)}>Delete</BtnDel>
        </ContactListItem>
      ))}
    </ContactsList>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDelete: PropTypes.func.isRequired,
}
