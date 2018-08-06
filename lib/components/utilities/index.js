import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
    justify-content: flex-start;
    overflow-x: auto;
    position: relative;
    height: 100vh;
`;

export const Tag = styled.span`
  border: 1px solid rgb(65, 155, 249);
  color: rgb(65, 155, 249);
  border-radius: 3px;
  heigth: 20px;
  line-height: 20px;
  padding: 0 10px;
`;