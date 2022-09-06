import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import style from "./Footer.module.css";
import FooterSubOptionsText from "./FooterSubOptionsText";
function FooterSubOptions6() {
    return (
        <Flex className={style.footerSubOptions}>
            <Box><Box>Commercial Properties For Rent in Bangalore</Box></Box>
            <Box><Box>Commercial Properties For Rent in Chennai</Box></Box>
            <Box><Box>Commercial Properties For Rent in Pune</Box></Box>
            <Box><Box>Commercial Properties For Rent in Mumbai</Box></Box>
            <Box><Box>Commercial Properties For Rent in Gurgaon</Box></Box>
        </Flex>
    )
}

export default FooterSubOptions6