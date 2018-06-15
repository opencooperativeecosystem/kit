import React from 'react'
import styled from 'styled-components'

const AlertWrapper = styled.div`
    border-radius: 4px;
    height: 26px;
    line-height: 26px;
    color: white;
    background: red;
    padding: 0 10px;
    font-size: 14px;
`


const Alert = ({children}) => (
    <AlertWrapper className={style.alert}>{children}</AlertWrapper>
)

export default Alert