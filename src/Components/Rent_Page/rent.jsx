import React from 'react'
import Detail from './detailshow'
import DetailAdd from './detailAdd'
import Question from './components/question';
import {Info, Paymentinfo} from './components/info';
import {
  Flex,
  Container,
  Box,
} from '@chakra-ui/react';
import Testimonoals from './components/testimonoals';

//install this :- npm install react-slick --save 
//             :- npm install slick-carousel --save


//  Add In Index.html
// <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
//<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> 
 

export default function Rent() {
  return (
    <div>
      <Flex display='flex' bg='#004daa' justify="space-between" p="50px"  >
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
