import React from 'react'
import { 
    Button, 
    VStack, 
    Container, 
    Flex,
    Image,
    Heading,
    Text ,
    Input ,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    NumberInput,
    } from "@chakra-ui/react"

export default function Detail() {
    const [input, setInput] = React.useState('')

    const handleInputChange = (e) => setInput(e.target.value)
  
    const isError = input === ''

  return (
    <div>
        <Container p={2}>
            <Heading as='h2'size='lg' p={4}>
                Pay Rent and Fees with Credit Card
  
            </Heading>
            <Button colorScheme="purple" >
                <img src="https://assets.nobroker.in/nb-new/public/RentoPay/verified-icon.svg" alt="" />
                <Text>Lowest Charges. Instant Transfers.</Text>
            </Button>
        </Container>
       
        <VStack display="flex" justifyItems="space-around" >
            <Flex justify="space-around">
            <Container m={0} p={2}>
                <Flex p={2}>
                    <Image  boxSize='40px' 
                        src="https://www.nobroker.in/nb-new/public/RentoPay/renter_club.svg"
                        alt="" />
                    <Container>
                        <Heading as='h6'  size='md' >Renter's Club</Heading>
                        <Text>Get 50% Off on processing fees by inviting your friends</Text>
                    </Container>
                </Flex>
                <Flex p={2}>
                <Image  boxSize='40px'
                        src='https://www.nobroker.in/nb-new/public/RentoPay/card.svg'
                        alt='' />
                    <Container>
                        <Heading as='h3' size='md'>Now pay Society Maintenance too</Heading>
                        <Text>All your property payments at one place - rent, maintenance, deposit, token</Text>
                    </Container>
                </Flex>
                <Flex p={2}>
                    <Image  boxSize='40px' 
                            src="https://www.nobroker.in/nb-new/public/RentoPay/credit_card.svg"
                            alt="" />
                   
                    <Container>
                    <Heading as='h3' size='md'>Earn upto ₹30,000/- in Rewards</Heading>
                    <Text>
                    Earn miles and reward points on your Visa and Mastercard cards plus enjoy upto 45 days interest free credit period.
                    </Text>
                    </Container>
                </Flex>
                <Flex p={2}>
                    <Image  boxSize='40px' 
                        src="https://www.nobroker.in/nb-new/public/RentoPay/no_hidden_cost.svg"
                        alt="" />
                    <Container>
                        <Heading as='h3' size='md'>Earn upto ₹30,000/- in Rewards</Heading>
                        <Text>Earn miles, get cash back and reward points on every property payment with your card.</Text>
                    </Container>
                </Flex>
                <Flex p={2}>
                    <Image  boxSize='40px' 
                        src="https://www.nobroker.in/nb-new/public/RentoPay/credit_card.svg"
                        alt="" />
                    <Container>
                        <Heading as='h3'  size='md'>Pay with Credit Card</Heading>
                        <Text>Pay with Credit Carddescription We accept major cards like Visa and Mastercard so your property payment is hassle free.</Text>
                    </Container>
                </Flex>
                <Flex p={2}>
                    <Image  boxSize='40px' 
                        src="https://www.nobroker.in/nb-new/public/RentoPay/money.svg"
                        alt="" />
                    <Container>
                        <Heading as='h3' size='md'>Enjoy 45 days interest free credit period</Heading>
                        <Text>Depending on your card statement date</Text>
                    </Container>
                </Flex>
                <Flex p={2}>
                    <Image  boxSize='40px' 
                        src="https://www.nobroker.in/nb-new/public/RentoPay/milestone.svg"
                        alt="" />
                    <Container>
                        <Heading as='h3' size='md'>Reach Milestones Faster</Heading>
                        <Text>Earn rewards on those yearly spends with your credit card.</Text>
                    </Container>
                </Flex>
                <Flex p={2}>
                    <Image  boxSize='40px' 
                        src="https://www.nobroker.in/nb-new/public/RentoPay/digital_rent_receipt.svg"
                        alt="" />
                    <Container>
                        <Heading as='h3' size='md'>Digital Receipts</Heading>
                        <Text>Payment receipts are generated instantly and sent directly to your email ID. Claim your HRA with ease.</Text>
                    </Container>
                </Flex>
                <Flex p={2}>
                    <Image  boxSize='40px' 
                        src="https://www.nobroker.in/nb-new/public/RentoPay/no_broker_trust.svg"
                        alt="" />
                    <Container>
                        <Heading as='h3' size='md'>NoBroker Trust</Heading>
                        <Text>NoBroker Pay is a product by NoBroker and is 100% secure with PCI compliant payment gateway.</Text>
                    </Container>
                </Flex>
            </Container>

            
            <Container bg="#F7FAFC" h="30rem" p={10}>

                <FormControl>
                <FormLabel>Name</FormLabel>
                <Input placeholder='Enter Name' />

                <FormLabel>Mobile Number</FormLabel>
                <Input placeholder='Enter Number' />
                </FormControl>
                

                <FormControl isInvalid={isError}>
                <FormLabel>Your Email</FormLabel>
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
                <Button colorScheme='red'>Get Started</Button>
            </Container>
            </Flex>
            
        </VStack>

    </div>
  )
}
