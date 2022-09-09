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
    } from "@chakra-ui/react"
import PaymentInfo from './PaymentInfo'
    

export default function Detail() {
  return (
    <div >

        <Box  bg="linear-gradient(#283593,#3f51b5)" color="white" width="800px"  className={style.paymentDetailPage} >
            <Box p={2} m="0px" >
                <Heading fontSize="26px" p={4}  >
                    Pay Rent and Fees with Credit Card
    
                </Heading>
                <Button bg="#202A76" p="25px" m="15px">
                    <img src="https://assets.nobroker.in/nb-new/public/RentoPay/verified-icon.svg" alt="" />
                    <Text>Lowest Charges. Instant Transfers.</Text>
                </Button>
            </Box>
            <VStack>
                <Box m={0} p={2} lineHeight="6">
                    <Flex p={7}>
                        <Image  boxSize='40px' bg="#FFFFFF" borderRadius="6px"
                            src="https://www.nobroker.in/nb-new/public/RentoPay/renter_club.svg"
                            alt="" />
                        <Container>
                            <Heading as='h6' fontSize="lg"  size='md' >Renter's Club</Heading>
                            <Text fontSize="small">Get 50% Off on processing fees by inviting your friends</Text>
                        </Container>
                    </Flex>
                    <Flex p={7}>
                        <Image  boxSize='40px' bg="#FFFFFF" borderRadius="6px"
                            src='https://www.nobroker.in/nb-new/public/RentoPay/card.svg'
                            alt='' />
                        <Container>
                            <Heading as='h3' fontSize="lg" size='md'>Now pay Society Maintenance too</Heading>
                            <Text fontSize="small">All your property payments at one place - rent, maintenance, deposit, token</Text>
                        </Container>
                    </Flex>
                    <Flex p={7}>
                        <Image  boxSize='40px' bg="#FFFFFF" borderRadius="6px"
                                src="https://www.nobroker.in/nb-new/public/RentoPay/credit_card.svg"
                                alt="" />
                    
                        <Container>
                            <Heading as='h3' fontSize="lg" size='md'>Earn upto ₹30,000/- in Rewards</Heading>
                            <Text fontSize="small">Earn miles and reward points on your Visa and Mastercard cards plus enjoy upto 45 days interest free credit period.</Text>
                        </Container>
                    </Flex>
                    <Flex p={7}>
                        <Image  boxSize='40px' bg="#FFFFFF" borderRadius="6px"
                            src="https://www.nobroker.in/nb-new/public/RentoPay/no_hidden_cost.svg"
                            alt="" />
                        <Container>
                            <Heading as='h3' fontSize="lg" size='md'>Earn upto ₹30,000/- in Rewards</Heading>
                            <Text fontSize="small">Earn miles, get cash back and reward points on every property payment with your card.</Text>
                        </Container>
                    </Flex>
                    <Flex p={7}>
                        <Image  boxSize='40px' bg="#FFFFFF" borderRadius="6px"
                            src="https://www.nobroker.in/nb-new/public/RentoPay/credit_card.svg"
                            alt="" />
                        <Container>
                            <Heading as='h3' fontSize="lg"  size='md'>Pay with Credit Card</Heading>
                            <Text fontSize="small">Pay with Credit Carddescription We accept major cards like Visa and Mastercard so your property payment is hassle free.</Text>
                        </Container>
                    </Flex>
                    <Flex p={7}>
                        <Image  boxSize='40px' bg="#FFFFFF" borderRadius="6px"
                            src="https://www.nobroker.in/nb-new/public/RentoPay/money.svg"
                            alt="" />
                        <Container>
                            <Heading as='h3' fontSize="lg" size='md'>Enjoy 45 days interest free credit period</Heading>
                            <Text fontSize="small">Depending on your card statement date</Text>
                        </Container>
                    </Flex>
                    <Flex p={7}>
                        <Image  boxSize='40px' bg="#FFFFFF" borderRadius="6px"
                            src="https://www.nobroker.in/nb-new/public/RentoPay/milestone.svg"
                            alt="" />
                        <Container>
                            <Heading as='h3' fontSize="lg" size='md'>Reach Milestones Faster</Heading>
                            <Text fontSize="small">Earn rewards on those yearly spends with your credit card.</Text>
                        </Container>
                    </Flex>
                    <Flex p={7}>
                        <Image  boxSize='40px' bg="#FFFFFF" borderRadius="6px"
                            src="https://www.nobroker.in/nb-new/public/RentoPay/digital_rent_receipt.svg"
                            alt="" />
                        <Container>
                            <Heading as='h3' fontSize="lg" size='md'>Digital Receipts</Heading>
                            <Text fontSize="small">Payment receipts are generated instantly and sent directly to your email ID. Claim your HRA with ease.</Text>
                        </Container>
                    </Flex>
                    <Flex p={7}>
                        <Image  boxSize='40px' bg="#FFFFFF" borderRadius="6px"
                            src="https://www.nobroker.in/nb-new/public/RentoPay/no_broker_trust.svg"
                            alt="" />
                        <Container>
                            <Heading as='h3' fontSize="lg" size='md'>NoBroker Trust</Heading>
                            <Text fontSize="small">NoBroker Pay is a product by NoBroker and is 100% secure with PCI compliant payment gateway.</Text>
                        </Container>
                    </Flex>
                </Box>   
            </VStack>
        </Box>
        
    </div>
  )
}
