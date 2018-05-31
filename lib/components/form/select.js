import styled from 'styled-components'
import {placeholder} from 'polished'

const Select = styled.select`
  width: 100%;
  direction: ltr;
  border-radius: 4px;
  display: block;
  box-sizing: border-box;
  margin: 0;
  ${placeholder({'color': '#757575'})}
  color: ${(props) => props.dark ? '#9baec8' : '#282c37'};
  background: ${(props) => props.dark ? '#1F2129' : '#fff'}; 
  padding: 10px;
  font-family: inherit;
  font-size: 14px;
  resize: none;
  border: 0;
  outline: 0;
  height: 34px;
`

export default Select
