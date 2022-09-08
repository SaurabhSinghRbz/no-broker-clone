import React from 'react'
import {
  Input ,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Container,
  Button,
  Image,
} from '@chakra-ui/react'
import Sliders from './components/slider'
import { Routes, Route } from 'react-router-dom'
import { Yourinput, Studentinput  } from './components/Input'
import style from './rent.module.css'
import Payment from './payment'

export default function DetailAdd() {

  return (
    <div>
       
          <Container className={style.ConChildTwo} bg="#FFFF"   color="#CECAC3">

            <Sliders/>
            <Routes>
              <Route path="/rent/houserent" element={<Yourinput/>} ></Route>
              <Route path="/rent/schoolfees" element={<Studentinput/>} ></Route>
              <Route path="/rent/tuitionfees" element={<Studentinput/>} ></Route>
              <Route path="/rent/societymaintenance" element={<Yourinput/>} ></Route>
              <Route path="/rent/shoprent" element={<Yourinput/>} ></Route>
              <Route path="/rent/property" element={<Yourinput/>} ></Route>
              <Route path="/rent/deposite" element={<Yourinput/>} ></Route>
            </Routes>
            
          </Container>
    </div>
  )
}
