import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import style from "./Footer.module.css";
import FooterSubOptionsText from "./FooterSubOptionsText";

function FooterSubOptions7() {
    return (
        <Flex className={style.footerSubOptions}>
            <Box><Box>New Projects in Bangalore</Box></Box>
            <Box><Box>New Projects in Mumbai</Box></Box>
            <Box><Box>New Projects in Chennai</Box></Box>
            <Box><Box>New Projects in Pune</Box></Box>
            <Box><Box>New Projects in Gurgaon</Box></Box>
        </Flex>
    )
}

export default FooterSubOptions7