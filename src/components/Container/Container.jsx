import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './Container.styles'

export default function Section({ children }) {
  return <Container>{children}</Container>
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
}
