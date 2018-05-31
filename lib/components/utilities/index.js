import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 10px;
  user-select: none;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Tag = styled.span`
  border: 1px solid rgb(65, 155, 249);
  color: rgb(65, 155, 249);
  border-radius: 3px;
  heigth: 20px;
  line-height: 20px;
  padding: 0 10px;
`;