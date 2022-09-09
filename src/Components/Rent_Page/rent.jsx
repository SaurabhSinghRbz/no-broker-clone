import React from 'react'
import Detail from './detailshow'
import DetailAdd from './userdetail'
import Question from './components/question';
import { Info, Paymentinfo } from './components/info';

import {
  Flex,
  Container,
  Box,
} from '@chakra-ui/react';
import style from "./rent.module.css";
import Testimonoals from './components/testimonoals';
import { Route, Routes, Link } from 'react-router-dom';


//install this :- npm install react-slick --save 
//             :- npm install slick-carousel --save


//  Add In Index.html
// <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
//<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> 


export default function Rent() {
  return (
    <div>
      <Flex className={style.ContainerOne} bg="linear-gradient(#283593,#3f51b5)" justifyContent="space-between" p="20px">
        <Detail />
        <DetailAdd />
      </Flex>
      <Info />
      <Paymentinfo />
      <Testimonoals />
      <Question />

    </div>





  )
}
