import styled, {css} from 'styled-components'

const Button = styled.button`
  background: #2588d0;
  border: 10px none;
  border-radius: 4px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  letter-spacing: 0;
  line-height: 36px;
  overflow: hidden;
  padding: 0 16px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: all .1s ease-in;
  white-space: nowrap;
  width: auto;
${props => props.primary && css`
  background: red;
  color: white
`}
`
export default Button
