import React from 'react'
import Testimonoals from '../Rent_Page/components/testimonoals';
import Detail from './payment_detail'
import Question from '../Rent_Page/components/question';
import {Info, Paymentinfo} from '../Rent_Page/components/info';
import style from "../Rent_Page/rent.module.css"
import PaymentInfo from './PaymentInfo';
import { Box, Container } from '@chakra-ui/react';

export default function ToPayment() {
  return (
    <div>
      <Box display="flex" justifyContent="space-between" className={style.paymentContainerPage}>
        <Detail/>
        <PaymentInfo/>
      </Box>
        {/* <Detail/> */}
        <Info/>
        <Paymentinfo/>
        <Testimonoals/>
        <Question/>
        
    </div>
  )
}
