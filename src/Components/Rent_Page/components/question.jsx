import React from 'react'
import {
    Accordion,
    AccordionItem,
    Box,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Heading,
} from '@chakra-ui/react'
import style from "../rent.module.css"

export default function Question() {
  return (
    <div className={style.box}>
        <Heading p='70px' textAlign="center" fontSize="30px">Frequently Asked Questions</Heading>
        <Box pl="100px" pr="100px">
        <Accordion allowToggle>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                        How secure is NoBroker Pay?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Security is incredibly important to us, therefore when you pay on our website, we use sophisticated security measures to ensure your confidential information is secure and encrypted. NoBroker Pay does not store any of your financial information.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                        What are the benefits of using NoBroker Pay?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    NoBroker Pay allows you to pay your house rent using a range of payment options like Credit Cards, Debit Cards, E-Wallets etc. By using your card on NoBroker Pay, you stand to earn cashback and/or reward points based on your card’s reward schemes.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                        What are the fees/charges for using NoBroker Pay?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                We may levy a fee on making a payment via NoBroker Pay. The fee is mentioned on the payment page and included in the total payment when you are about to make the payment.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                        How do I make my house rent payment on NoBroker Pay?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                The first time you use NoBroker Pay you will need to enter basic details such as – landlord’s contact &amp; account details, monthly rent amount and date of payment. These details are needed only ONCE, thereafter, you can make payments by just choosing your preferred mode of payment.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                        How do I earn cashback/ rewards with NoBroker Pay?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    When you make your rent payment on NoBroker Pay with a credit/debit card, you earn reward points, cashback or air miles on your transaction. If you don’t know how much you can earn, contact your bank, they will assist you as it depends on the card you have.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                        How does NoBroker pay my landlord?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    When you submit your landlord’s bank details on NoBroker Pay and make your payment, we verify these details and transfer the rent amount directly to your landlord’s bank account. Please note that transfer may take up to 2 working days to reflect in your landlord’s bank account.
                </AccordionPanel>
            </AccordionItem>
           
</Accordion>
</Box>
    </div>
  )
}
