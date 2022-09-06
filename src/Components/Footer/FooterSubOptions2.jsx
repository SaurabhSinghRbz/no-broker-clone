import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import style from "./Footer.module.css";
import FooterSubOptionsText from "./FooterSubOptionsText";
function FooterSubOptions2() {
    return (
        <Flex className={style.footerSubOptions}>
            <Box><Box>Flats for Rent in Bangalore</Box></Box>
            <Box><Box>Flats for Rent in Mumbai</Box></Box>
            <Box><Box>Flats for Rent in Chennai</Box></Box>
            <Box><Box>Flats for Rent in Pune</Box></Box>
            <Box><Box>Flats for Rent in Gurgaon</Box></Box>
        </Flex>
    )
}

export default FooterSubOptions2