import React from 'react'
import { Link } from 'react-router-dom'
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
    Stack,
    Switch,
  } from '@chakra-ui/react'
  import { Navigate } from "react-router-dom"
import style from '../rent.module.css'

function Yourinput() {
    const [input, setInput] = React.useState('')
    const [isredirect, setisredirect] = React.useState(false)

    const handleInputChange = (e) => setInput(e.target.value)
    const isError = input === ''



 
    // if(isredirect){
    //   return <Navigate to="/rent/payment"/>
    // }
  return (
    <div>
        <FormControl className={style.InputCon}  color="#000" >
              <FormLabel  pt="20px">Your Name</FormLabel>
              <Input className={style.inputName} placeholder='Enter Name' />

              <FormLabel pt="20px">Mobile Number</FormLabel>
              <Input className={style.inputName} placeholder='Enter Number' />
              <Container className={style.inputName} fontSize="15px" display="flex" alignItems="center" justifyContent="space-between"  p="10px">
                <Container m="0px"  display="flex" alignItems="center">
                         Get payment updates on <Image h="20px" w="20px" src="data:image/png;base64,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"/> Whatsapp
                </Container>
                <Switch size='sm' />
            </Container>
            </FormControl>


            <FormControl className={style.InputCon}  color="#000" isInvalid={isError} >
              <FormLabel  pt="20px">Your Email</FormLabel>
              <Input
                className={style.inputName}
                type='email'
                value={input}
                onChange={handleInputChange}
              />
              {!isError ? (
                <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
                </FormHelperText>
                ) : (
                <FormErrorMessage></FormErrorMessage>
                )}
            </FormControl>
            <Link to="/payrent/paymentdetail">
                <Button  colorScheme='red' w="100%" mt="20px" onClick={()=>setisredirect(true)} >   Get Started</Button>
            </Link>
               
    </div>
  )
}



function Studentinput() {
    const [input, setInput] = React.useState('')

    const handleInputChange = (e) => setInput(e.target.value)
    const isError = input === ''

    const handleSubmit = () => {
        // navigate("/rent/payment")
    }
  return (
    <div>
            <FormControl className={style.InputCon}  color="#000"  >
              <FormLabel  pt="20px">Student Name</FormLabel>
              <Input className={style.inputName} placeholder='Enter Name' />

              <FormLabel pt="20px">Mobile Number</FormLabel>
              <Input className={style.inputName} placeholder='Enter Number'  />
              <Container className={style.inputName} fontSize="15px" display="flex" alignItems="center" justifyContent="space-between" p="10px">
                <Container m="0px"  display="flex" alignItems="center">
                         Get payment updates on <Image h="20px" w="20px" src="data:image/png;base64,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"/> Whatsapp
                </Container>
                <Switch size='sm' />

            </Container>
            </FormControl>


            <FormControl className={style.InputCon} color="#000" isInvalid={isError} >
              <FormLabel  pt="20px">Student Email</FormLabel>
              <Input
                className={style.inputName}
                type='email'
                value={input}
                onChange={handleInputChange}
              />
              {!isError ? (
                <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
                </FormHelperText>
                ) : (
                <FormErrorMessage></FormErrorMessage>
                )}
            </FormControl>
            <Button colorScheme='red' w="100%" mt="20px">Get Started</Button>
    </div>
  )
}

export { Yourinput, Studentinput}