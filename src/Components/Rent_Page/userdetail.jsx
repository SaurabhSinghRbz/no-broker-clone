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

export default function DetailAdd() {

  return (
    <div>
       
          <Container className={style.ConChildTwo} bg="#FFFF"   color="#CECAC3">

            <Sliders/>
            {/* <Routes>
              <Route path="/payrent/houserent" element={<Yourinput/>} ></Route>
              <Route path="/payrent/schoolfees" element={<Studentinput/>} ></Route>
              <Route path="/payrent/tuitionfees" element={<Studentinput/>} ></Route>
              <Route path="/payrent/societymaintenance" element={<Yourinput/>} ></Route>
              <Route path="/payrent/shoprent" element={<Yourinput/>} ></Route>
              <Route path="/payrent/property" element={<Yourinput/>} ></Route>
              <Route path="/payrent/deposite" element={<Yourinput/>} ></Route>
            </Routes> */}
            
          </Container>
    </div>
  )
}
