import React from 'react'
import { Flex, Box } from "@chakra-ui/react"
import style from "./Footer.module.css"
function FooterSubOptions2() {
    return (
        <Flex className={style.footerSubOptions}>
            <Box>Flats for Rent in Bangalore</Box>
            <Box>Flats for Rent in Mumbai</Box>
            <Box>Flats for Rent in Chennai</Box>
            <Box>Flats for Rent in Pune</Box>
            <Box>Flats for Rent in Gurgaon</Box>
        </Flex>
    )
}

export default FooterSubOptions2