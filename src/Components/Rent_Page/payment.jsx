import React from 'react'
import Testimonoals from './components/testimonoals';
import Detail from './detailshow'
import DetailAdd from './detailAdd'
import Question from './components/question';
import {Info, Paymentinfo} from './components/info';
import { Flex } from '@chakra-ui/react';

export default function Payment() {
  return (
    <div>
        <Flex>
            <Detail/>
            <DetailAdd/>
        </Flex>
        <Info/>
        <Paymentinfo/>
        <Testimonoals/>
        <Question/>
    </div>
  )
}
