import React from 'react'
import { Flex, Box } from "@chakra-ui/react"
import style from "./Footer.module.css"

function FooterSubOptions4() {
    return (
        <Flex className={style.footerSubOptions}>
            <Box>Rooms for Rent in Bangalore</Box>
            <Box>Rooms for Rent in Mumbai</Box>
            <Box>Rooms for Rent in Chennai</Box>
            <Box>Rooms for Rent in Pune</Box>
            <Box>Rooms for Rent in Gurgaon</Box>
        </Flex>
    )
}

export default FooterSubOptions4