import React from 'react'
import styled from 'styled-components'

const TextArea = styled.textarea`
  width: 100%;
  direction: ltr;
  border-radius: 4px;
  display: block;
  box-sizing: border-box;
  margin: 0;
  color: #282c37;
  background: #fff;
  padding: 10px;
  font-family: inherit;
  font-size: 14px;
  resize: none;
  border: 0;
  outline: 0;
  height: 100%;
`

const Textarea = ({placeholder, action, children, value}) => (
  <TextArea onChange={action} placeholder={placeholder} value={value} />
)

export default Textarea
