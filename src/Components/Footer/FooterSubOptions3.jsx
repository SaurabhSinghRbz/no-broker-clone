import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import style from "./Footer.module.css";
import FooterSubOptionsText from "./FooterSubOptionsText";
function FooterSubOptions3() {
    return (
        <Flex className={style.footerSubOptions}>
            <Box><Box>PG in Bangalore</Box></Box>
            <Box><Box>PG in Mumbai</Box></Box>
            <Box><Box>PG in Chennai</Box></Box>
            <Box><Box>PG in Pune</Box></Box>
            <Box><Box>PG / Hostels in Gurgaon</Box></Box>
        </Flex>
    )
}

export default FooterSubOptions3