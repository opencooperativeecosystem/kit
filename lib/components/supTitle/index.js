import React from 'react'
import styled from 'styled-components'

const Tagline = styled.div`
  font-size: 12px;
  color: #fafafa;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 10px;
  margin-bottom: 10px;
`

const Icon = styled.span`
  margin-right: 10px;
  vertical-align: sub
`

const SupTitle = ({icon, text}) => (
  <Tagline><Icon>{icon}</Icon>{text}</Tagline>
)

export default SupTitle