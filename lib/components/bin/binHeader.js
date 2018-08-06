import React from 'react'
import styled from 'styled-components'
import {clearFix} from 'polished'

const Header = styled.div`
  ${clearFix()};
`
const HeaderTitle = styled.h5`
    font-size: 16px;
    text-align: left;
    margin: 0;
    margin-top: 8px;
    text-transform: capitalize;
    letter-spacing: .5px;
    width: 250px;
    color: #f0f0f0;
    font-size: 16px;
    line-height: 18px;
    font-weight: 500;
`


const ListTitle = ({name}) => (
  <Header><HeaderTitle>{name}</HeaderTitle></Header>
)

export default ListTitle
