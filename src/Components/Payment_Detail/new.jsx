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
} from '@chakra-ui/react'
function Home() {
  return (
    <div>
    <Box>
        <Box  display="flex" justifyContent="space-between"  className={style.paymentInfo_DetailNameTwo} >
          <Box>
            <FormLabel fontSize={14} >Landlord Name(As per bank records)</FormLabel>
            <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} placeholder='Enter Name'/>
          </Box>
          <Box>
            <FormLabel fontSize={14}> Contact Number (optional)(As per bank records)</FormLabel>
            <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} type='tel' placeholder='phone number' />
          </Box>
        </Box>
        {/*  */}
        <Box  className={style.paymentInfo_DetailNameThree}>
            <FormLabel  fontSize={14}>Choose payment mode</FormLabel>
            <Box display="flex" >
              <Checkbox pr="15px">To Bank Account</Checkbox>
              <Checkbox>To UPI</Checkbox>
            </Box>
        </Box>
        {/*  */}
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
        {/*  */}
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
            {/*  */}
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
        {/*  */}
        <Box  className={style.paymentInfo_DetailNameFour} >
            <FormLabel fontSize={14} >Upload Rental Agreement (optional)</FormLabel>
            <Input w="400px"   type="file" h="30px" border="none" className={style.inputName} placeholder='' />
        </Box> 
    </Box>   
    </div>
  )
}



function School() {
  return (
    <Box>
    <Box  display="flex" justifyContent="space-between"  className={style.paymentInfo_DetailNameFour} >
     <Box>
       <FormLabel fontSize={14} >Enrollment/ Roll Number</FormLabel>
       <Input borderBottom="1px solid lightGray" w="340px" h="40px" pr="10px" className={style.inputName} placeholder='Enter Student Enrollment Number'/>
     </Box>
     <Box>
       <FormLabel fontSize={14}>School/ College Name (As per bank records)</FormLabel>
       <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} type='tel' placeholder='Enter Name' />
     </Box>
   </Box>
   {/*  */}
   <Box  display="flex" justifyContent="space-between"  className={style.paymentInfo_DetailNameFour} >
     <Box>
       <FormLabel fontSize={14} >School/ College Contact Number</FormLabel>
       <Input borderBottom="1px solid lightGray"  w="340px" h="40px" className={style.inputName} placeholder='Enter Phone Number' />
     </Box>
     <Box>
       <FormLabel fontSize={14}>School/ College Email</FormLabel>
       <Input w="340px" borderBottom="1px solid lightGray" h="40px" className={style.inputName} type='tel' placeholder="Enter address" />
     </Box>
   </Box>
   {/*  */}
   <Box  display="flex" justifyContent="space-between"  className={style.paymentInfo_DetailNameTwo} >
     <Box>
       <FormLabel fontSize={14} >School/ College Account Number</FormLabel>
       <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} placeholder='Enter banks account number' />
     </Box>
     <Box>
       <FormLabel fontSize={14}>Confirm Account Number</FormLabel>
       <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} type='tel' placeholder="Re-enter bank's account number" />
     </Box>
   </Box>
   {/*  */}
   <Box  display="flex" justifyContent="space-between"  className={style.paymentInfo_DetailNameFour} >
     <Box>
       <FormLabel fontSize={14} >IFSC Code</FormLabel>
       <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} placeholder='e.g. KKBK0000430' />
     </Box>
     <Box>
       <FormLabel fontSize={14}>Fees Amount</FormLabel>
       <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} type='tel' placeholder="Enter amount" />
     </Box>
   </Box>
   {/*  */}
   
   {/*  */}
   <Box  className={style.paymentInfo_DetailNameFour} >
       <FormLabel fontSize={14} >Upload Rental Agreement (optional)</FormLabel>
       <Input w="400px"   type="file" h="30px" border="none" className={style.inputName} placeholder='' />
   </Box> 
   </Box>
    )
}



function Society() {
    return (
      <div>
      <Box display="flex"  justifyContent="center" flexDirection="column"> 
          <Box  display="flex" justifyContent="space-between"  className={style.paymentInfo_DetailNameTwo} >
            <Box>
              <FormLabel fontSize={14} >Landlord Name(As per bank records)</FormLabel>
              <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} placeholder='Enter Name'/>
            </Box>
            <Box>
              <FormLabel fontSize={14}>Society Contact Number (optional)</FormLabel>
              <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} type='tel' placeholder='phone number' />
            </Box>
          </Box>
          <FormLabel fontSize={14}>Society Email (optional)</FormLabel>
              <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} type='tel' placeholder='Enter' />
          {/*  */}
          <Box  className={style.paymentInfo_DetailNameThree}>
              <FormLabel  fontSize={14}>Choose payment mode</FormLabel>
              <Box display="flex" >
                <Checkbox pr="15px">To Bank Account</Checkbox>
                <Checkbox>To UPI</Checkbox>
              </Box>
          </Box>
          {/*  */}
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
          {/*  */}
          <Box  display="flex" justifyContent="space-between"  className={style.paymentInfo_DetailNameFour} >
            <Box>
              <FormLabel fontSize={14} >IFSC Code</FormLabel>
              <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} placeholder='e.g. KKBK0000430' />
            </Box>
            <Box>
              <FormLabel fontSize={14} >Flat Number</FormLabel>
              <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} placeholder='Enter Flat Number' />
            </Box>
          </Box>
              {/*  */}
          <Box  display="flex" justifyContent="space-between"  className={style.paymentInfo_DetailNameFour} >
            <Box>
              <FormLabel fontSize={14} >Property Address</FormLabel>
              <Input borderBottom="1px solid lightGray"  w="340px" h="40px" className={style.inputName} placeholder='Enter address' />
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
          {/*  */}
            <Box  display="flex" justifyContent="space-between"  className={style.paymentInfo_DetailNameFour} >
                <Box>
                    <FormLabel fontSize={14}>Rent Amount</FormLabel>
                    <Input w="340px" borderBottom="1px solid lightGray" h="40px" className={style.inputName} type='tel' placeholder="Enter amount" />
                </Box>
                <Box  className={style.paymentInfo_DetailNameFour} >
                    <FormLabel fontSize={14} >Upload Rental Agreement (optional)</FormLabel>
                    <Input w="400px"   type="file" h="30px" border="none" className={style.inputName} placeholder='' />
                </Box> 
            </Box>
      </Box>   
      </div>
    )
  }
  


 function Office() {
  return (
    <div>
      <Box>
        <Box  display="flex" justifyContent="space-between"  className={style.paymentInfo_DetailNameTwo} >
          <Box>
            <FormLabel fontSize={14} >Landlord Name(As per bank records)</FormLabel>
            <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} placeholder='Enter Name'/>
          </Box>
          <Box>
            <FormLabel fontSize={14}> Contact Number (optional)(As per bank records)</FormLabel>
            <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} type='tel' placeholder='phone number' />
          </Box>
        </Box>
        {/*  */}
        <Box  className={style.paymentInfo_DetailNameThree}>
            <FormLabel  fontSize={14}>Choose payment mode</FormLabel>
            <Box display="flex" >
              <Checkbox pr="15px">To Bank Account</Checkbox>
              <Checkbox>To UPI</Checkbox>
            </Box>
        </Box>
        {/*  */}
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
        {/*  */}
        <Box  display="flex" justifyContent="space-between"  className={style.paymentInfo_DetailNameFour} >
          <Box>
            <FormLabel fontSize={14} >IFSC Code</FormLabel>
            <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} placeholder='e.g. KKBK0000430' />
          </Box>
          <Box>
            <FormLabel fontSize={14} >City</FormLabel>
            <Select borderBottom="1px solid lightGray" placeholder='Select...'>
              <option value='option1'>Mumbai</option>
              <option value='option2'>Delhi</option>
              <option value='option3'>Pune</option>
              <option value='option3'>Chennai</option> 
              <option value='option3'>Hyderabad</option>
            </Select>
          </Box>
        </Box>
            {/*  */}
        <Box  display="flex" justifyContent="space-between"  className={style.paymentInfo_DetailNameFour} >
          <Box>
            <FormLabel fontSize={14} >Property Address</FormLabel>
            <Input borderBottom="1px solid lightGray"  w="340px" h="40px" className={style.inputName} placeholder='Enter address' />
          </Box>
          <Box>
            <FormLabel fontSize={14}>Maintenance Amount</FormLabel>
            <Input w="340px" borderBottom="1px solid lightGray" h="40px" className={style.inputName} type='tel' placeholder="Enter amount" />
          </Box>
        </Box>
        {/*  */}
        <Box  className={style.paymentInfo_DetailNameFour} >
            <FormLabel fontSize={14} >Upload Rental Agreement (optional)</FormLabel>
            <Input w="400px"   type="file" h="30px" border="none" className={style.inputName} placeholder='' />
        </Box> 
    </Box>   
    </div>
  )
}



 function Token() {
  return (
    <div>
      <Box>
        <Box  display="flex" justifyContent="space-between"  className={style.paymentInfo_DetailNameTwo} >
          <Box>
            <FormLabel fontSize={14} >Landlord Name(As per bank records)</FormLabel>
            <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} placeholder='Enter Name'/>
          </Box>
          <Box>
            <FormLabel fontSize={14}> Contact Number (optional)(As per bank records)</FormLabel>
            <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} type='tel' placeholder='phone number' />
          </Box>
        </Box>
        {/*  */}
        <Box  className={style.paymentInfo_DetailNameThree}>
            <FormLabel  fontSize={14}>Choose payment mode</FormLabel>
            <Box display="flex" >
              <Checkbox pr="15px">To Bank Account</Checkbox>
              <Checkbox>To UPI</Checkbox>
            </Box>
        </Box>
        {/*  */}
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
        {/*  */}
        <Box  display="flex" justifyContent="space-between"  className={style.paymentInfo_DetailNameFour} >
          <Box>
            <FormLabel fontSize={14} >IFSC Code</FormLabel>
            <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} placeholder='e.g. KKBK0000430' />
          </Box>
          <Box>
            <FormLabel fontSize={14} >Property Address</FormLabel>
            <Input borderBottom="1px solid lightGray"  w="340px" h="40px" className={style.inputName} placeholder='Enter address' />
          </Box>
        </Box>
            {/*  */}
        <Box  display="flex" justifyContent="space-between"  className={style.paymentInfo_DetailNameFour} >
          <Box>
            <FormLabel fontSize={14} >Token Amount</FormLabel>
            <Input borderBottom="1px solid lightGray"  w="340px" h="40px" className={style.inputName} placeholder='Enter amount' />
          </Box>
          <Box>
            <FormLabel fontSize={14}>Beneficiary's PAN</FormLabel>
            <Input w="340px" borderBottom="1px solid lightGray" h="40px" className={style.inputName} type='tel' placeholder="Enter your beneficiary's PAN" />
          </Box>
        </Box>
        {/*  */}
        <Box  className={style.paymentInfo_DetailNameFour} >
            <FormLabel fontSize={14} >Tenant's PAN</FormLabel>
            <Input w="400px"   type="text" h="30px" border="none" className={style.inputName} placeholder='Enter tenant PAN' />
        </Box> 
    </Box>   
    </div>
  )
}


function Propertys() {
  return (
    <div>
          <Box>
        <Box  display="flex" justifyContent="space-between"  className={style.paymentInfo_DetailNameTwo} >
          <Box>
            <FormLabel fontSize={14} >Landlord Name(As per bank records)</FormLabel>
            <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} placeholder='Enter Name'/>
          </Box>
          <Box>
            <FormLabel fontSize={14}> Contact Number (optional)(As per bank records)</FormLabel>
            <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} type='tel' placeholder='phone number' />
          </Box>
        </Box>
        {/*  */}
        <Box  className={style.paymentInfo_DetailNameThree}>
            <FormLabel  fontSize={14}>Choose payment mode</FormLabel>
            <Box display="flex" >
              <Checkbox pr="15px">To Bank Account</Checkbox>
              <Checkbox>To UPI</Checkbox>
            </Box>
        </Box>
        {/*  */}
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
        {/*  */}
        <Box  display="flex" justifyContent="space-between"  className={style.paymentInfo_DetailNameFour} >
          <Box>
            <FormLabel fontSize={14} >IFSC Code</FormLabel>
            <Input borderBottom="1px solid lightGray" w="340px" h="40px" className={style.inputName} placeholder='e.g. KKBK0000430' />
          </Box>
          <Box>
            <FormLabel fontSize={14} >Property Address</FormLabel>
            <Input borderBottom="1px solid lightGray"  w="340px" h="40px" className={style.inputName} placeholder='Enter address' />
          </Box>
        </Box>
            {/*  */}
        <Box  display="flex" justifyContent="space-between"  className={style.paymentInfo_DetailNameFour} >
          <Box>
            <FormLabel fontSize={14} >Deposite Amount</FormLabel>
            <Input borderBottom="1px solid lightGray"  w="340px" h="40px" className={style.inputName} placeholder='Enter amount' />
          </Box>
          <Box>
            <FormLabel fontSize={14}>Beneficiary's PAN (optional)</FormLabel>
            <Input w="340px" borderBottom="1px solid lightGray" h="40px" className={style.inputName} type='tel' placeholder="Enter your beneficiary's PAN" />
          </Box>
        </Box>
        {/*  */}
        <Box  className={style.paymentInfo_DetailNameFour} >
            <FormLabel fontSize={14} >Tenant's PAN (optional)</FormLabel>
            <Input w="400px"   type="text" h="30px" border="none" className={style.inputName} placeholder='Enter tenant PAN' />
        </Box> 
    </Box>   
    </div>
  )
}



export { Home, School, Society, Office, Token, Propertys }