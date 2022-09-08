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

export default function DetailAdd() {

  const [input, setInput] = React.useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''

  return (
    <div>
       
          <Container bg="#FFFF"  w="569px" p="35px" m="20px 0 20px 0" display="flex" flexDirection="column" justifyContent="center"  borderRadius="10px" color="#CECAC3">

            <Sliders/>
            <FormControl  color="#000" >
              <FormLabel  pt="20px">Name</FormLabel>
              <Input placeholder='Enter Name' />

              <FormLabel pt="20px">Mobile Number</FormLabel>
              <Input placeholder='Enter Number' />
            </FormControl>


            <FormControl   color="#000" isInvalid={isError} >
              <FormLabel  pt="20px">Your Email</FormLabel>
              <Input
                type='email'
                value={input}
                onChange={handleInputChange}
              />
              {!isError ? (
                <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
                </FormHelperText>
                ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
            </FormControl>
            <Button colorScheme='red' w="100%" mt="20px">Get Started</Button>
          </Container>
    </div>
  )
}
