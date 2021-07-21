import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import { Form, Label, Input, Button } from './ContactForm.styles'

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const idInputName = uuidv4()
  const idInputNumber = uuidv4()

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget
    switch (name) {
      case 'name':
        setName(value)
        break
      case 'number':
        setNumber(value)
        break
      default:
        return
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmit(name, number)
    resetForm()
  }

  const resetForm = () => {
    setName('')
    setNumber('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={idInputName}>
        Name
        <Input
          onChange={handleInputChange}
          type="text"
          id={idInputName}
          name="name"
          autoComplete="off"
          placeholder="Enter name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </Label>
      <Label htmlFor={idInputNumber}>
        Number
        <Input
          onChange={handleInputChange}
          type="tel"
          id={idInputNumber}
          name="number"
          autoComplete="off"
          placeholder="Enter number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </Label>
      <Button type="submit" disabled={!name || !number}>
        Add contact
      </Button>
    </Form>
  )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
