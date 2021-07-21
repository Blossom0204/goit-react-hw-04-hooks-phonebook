import styled from '@emotion/styled'
export const ContactsList = styled.ul`
  padding: 0;
`
export const ContactListItem = styled.li`
  display: flex;
  align-items: center;
`
export const ContactListText = styled.p`
  font-size: 18px;
  line-height: 20px;
  font-weight: bold;
  word-break: break-all;
`
export const BtnDel = styled.button`
  margin-left: auto;
  background-color: #ebedf32c;
  color: #161127;
  border: none;
  padding: 6px 12px;
  font-size: 12px;
  line-height: 14px;
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
