import React from "react";
import { Flex, Box, VStack, Text } from "@chakra-ui/react";
import style from "./Footer.module.css";
import FooterSubOptionsText from "./FooterSubOptionsText";
function FooterSubOptions1() {

    const textArr1 = ["Flats for Sale in Koramangala", "Flats for Sale in Marathahalli", "Flats for Sale in HSR Layout", "Flats for Sale in Whitefield", "Flats for Sale in Indira Nagar", "Flats for Sale in Bellandur", "Flats for Sale in Chandra Layout", "Flats for Sale in J. P. Nagar", "Flats for Sale in BTM Layout", "Flats for Sale in Jayanagar", "Flats for Sale in Bangalore Below 10 Lakhs", "Flats for Sale in Bangalore Below 15 Lakhs", "Flats for Sale in Bangalore Below 20 Lakhs", "Flats for Sale in Bangalore Below 25 Lakhs", "Flats for Sale in Bangalore Below 30 Lakhs", "Flats for Sale in Bangalore Below 35 Lakhs", "Flats for Sale in Bangalore Below 40 Lakhs", "Flats for Sale in Bangalore Below 45 Lakhs", "Flats for Sale in Bangalore Below 50 Lakhs"]


    return (
        <Flex className={style.footerSubOptions}>
            <Box style={{ textAlign: "left" }}>
                <Box >Flats for Sale in Bangalore</Box>
                {textArr1.map((text) => <FooterSubOptionsText text={text} />)}
            </Box>
            <VStack>
                <Box>Flats for Sale in Mumbai</Box>
            </VStack>
            <VStack>
                <Box>Flats for Sale in Chennai</Box>
            </VStack>
            <VStack>
                <Box>Flats for Sale in Pune</Box>
            </VStack>
            <VStack>
                <Box>Flats in Gurgaon for Sale</Box>
            </VStack>
        </Flex>
    );
}

export default FooterSubOptions1;
