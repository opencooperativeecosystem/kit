import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Textarea from './textarea'
import Input from './input'
import styled from 'styled-components'
import {clearFix} from 'polished'

const Container = styled.div`
  padding: 20px;
  ${clearFix()}
`

const Wrapper = styled.div`
  width: 400px;
  height: 200px;
  float: left;
  margin-right: 10px;
`
const H5 = styled.h5`
  color: #f0f0f0;
  margin:0;
  margin-bottom: 10px;
  font-size: 16px;
`
const Separator = styled.div`
  margin-top: 20px;
`

storiesOf('Form', module)
  .add('All', () => (
    <Container>
      <Wrapper>
        <H5>Textarea</H5>
        <Textarea action={action('clicked')} placeholder='A cosa stai pensando?' value={''} />
      </Wrapper>
      <Wrapper>
        <H5>Input</H5>
        <Input action={action('clicked')} placeholder='Search' value={''} />
        <Separator />
        <H5>Input - dark</H5>
        <Input dark action={action('clicked')} placeholder='Search' value={''} />
      </Wrapper>
    </Container>
  ))
