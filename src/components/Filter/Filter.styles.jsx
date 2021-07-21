import styled from '@emotion/styled'
export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  justify-content: center;
  padding-bottom: 15px;
  margin: 0;
`
export const Input = styled.input`
  display: flex;
  padding: 6px;
  margin-bottom: 20px;
  border-radius: 5px;
  min-width: 300px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  &:focus {
    border: 2px solid #eee;
    outline: none;
  }
`
