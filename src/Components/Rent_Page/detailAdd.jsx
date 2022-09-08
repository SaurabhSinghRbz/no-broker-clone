import React from 'react'
import img from '../../Images/Rent.png'
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

export default function DetailAdd() {

 

  return (
    <div>
       
          <Container bg="#FFFF"  w="569px" p="35px" m="20px 0 20px 0" display="flex" flexDirection="column" justifyContent="center"  borderRadius="10px" color="#CECAC3">

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
