import styled from '@emotion/styled'
export const Form = styled.form``
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
  box-shadow: rgba(38, 38, 112, 0.25) 0px 50px 100px -20px,
    rgba(34, 74, 114, 0.35) 0px -2px 6px 0px inset;
  &:focus {
    border: 2px solid #928ec7;
    outline: none;
  }
`
export const Button = styled.button`
  background-color: #ebedf32c;
  color: #161127;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  line-height: 24px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid #1f3d9e30;
  box-shadow: 0 12px 16px 0 #278cbb3d, 0 17px 50px 0 #1f3d9e30;
  &:hover {
    border-radius: 4px;
    background-color: #020c2b2c;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 12px 16px 0 #278cbb3d, 0 17px 50px 0 #1f3d9e30;
  }
`
