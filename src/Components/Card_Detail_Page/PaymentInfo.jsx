import React from 'react'
import style from '../Rent_Page/rent.module.css'

import { 
    Button, 
    VStack, 
    Container, 
    Flex,
    Image,
    Heading,
    Text ,
    Input ,
    FormLabel,
    Box,
    Checkbox,
    Select,
  
    } from "@chakra-ui/react"

export default function PaymentInfo() {
  return (
    <Box>
      <Box pb="150px"  className={style.paymentInfoContainerPage} >
        <Box className={style.paymentInfo_DetailName}>
            <Heading  fontSize={18} padding="0px 10px 12px 0px" >Payment Details</Heading >
            <Text>Fill your payment details once and we will save it</Text>
        </Box>
        {/*  */}
        {/* <Box  display="flex" justifyContent="space-between"  className={style.paymentInfo_DetailNameTwo} >
          <Box>
            <FormLabel fontSize={14} >Landlord Name(As per bank records)</FormLabel>
            <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} placeholder='Enter Name'/>
          </Box>
          <Box>
            <FormLabel fontSize={14}>Landlord Name(As per bank records)</FormLabel>
            <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} type='tel' placeholder='phone number' />
          </Box>
        </Box>
      
        <Box  className={style.paymentInfo_DetailNameThree}>
            <FormLabel  fontSize={14}>Choose payment mode</FormLabel>
            <Box display="flex" >
              <Checkbox pr="15px">To Bank Account</Checkbox>
              <Checkbox>To UPI</Checkbox>
            </Box>
        </Box>
    
        <Box  display="flex" justifyContent="space-between"  className={style.paymentInfo_DetailNameTwo} >
          <Box>
            <FormLabel fontSize={14} >Bank Account Number</FormLabel>
            <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} placeholder='Enter banks account number' />
          </Box>
          <Box>
            <FormLabel fontSize={14}>Confirm Account Number</FormLabel>
            <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} type='tel' placeholder="Re-enter bank's account number" />
          </Box>
        </Box>
     
        <Box  display="flex" justifyContent="space-between"  className={style.paymentInfo_DetailNameFour} >
          <Box>
            <FormLabel fontSize={14} >IFSC Code</FormLabel>
            <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} placeholder='e.g. KKBK0000430' />
          </Box>
          <Box>
            <FormLabel fontSize={14}>BHK Type</FormLabel>
            <Select borderBottom="1px solid lightGray" placeholder='Select option'>
              <option value='option1'>1 RK</option>
              <option value='option2'>1 BHK</option>
              <option value='option3'>2 BHK</option>
              <option value='option3'>3 BHK</option> 
              <option value='option3'>4 BHK</option>
            </Select>
          </Box>
        </Box>
         
        <Box  display="flex" justifyContent="space-between"  className={style.paymentInfo_DetailNameFour} >
          <Box>
            <FormLabel fontSize={14} >Property Address</FormLabel>
            <Input borderBottom="1px solid lightGray"  w="340px" h="40px" className={style.inputName} placeholder='Enter address' />
          </Box>
          <Box>
            <FormLabel fontSize={14}>Rent Amount</FormLabel>
            <Input w="340px" borderBottom="1px solid lightGray" h="40px" className={style.inputName} type='tel' placeholder="Enter amount" />
          </Box>
        </Box> 
        */}
        {/* <Box  className={style.paymentInfo_DetailNameFour} >
            <FormLabel fontSize={14} >Upload Rental Agreement (optional)</FormLabel>
            <Input w="400px"   type="file" h="30px" border="none" className={style.inputName} placeholder='' />
        </Box>     */}
      </Box>
      <Box display="flex" justifyContent="space-between" p="35px" borderTop="1px solid lightGray">
        <FormLabel>Fill your payment details once to save it so you don’t have to enter it again</FormLabel>
        <Button bg="#e3324a" p="22px" color="white"> Save Payment Detail</Button>
      </Box>
    </Box>
  )
}
