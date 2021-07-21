import React from 'react'
import PropTypes from 'prop-types'
import { Label, Input } from './Filter.styles'

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name:
      <Input onChange={onChange} type="text" value={value}></Input>
    </Label>
  )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
export default Filter
