import React from 'react'
import { Flex, Box } from "@chakra-ui/react"
import style from "./Footer.module.css"
function FooterSubOptions3() {
    return (
        <Flex className={style.footerSubOptions}>
            <Box>PG in Bangalore</Box>
            <Box>PG in Mumbai</Box>
            <Box>PG in Chennai</Box>
            <Box>PG in Pune</Box>
            <Box>PG / Hostels in Gurgaon</Box>
        </Flex>
    )
}

export default FooterSubOptions3