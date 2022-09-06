import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import style from "./Footer.module.css";
import FooterSubOptionsText from "./FooterSubOptionsText";
function FooterSubOptions6() {
    const textArr1 = [
        "Warehouse for Rent in Bangalore",
        "Commercial Office Space for Rent in Bangalore",
        "Coworking Spaces for Rent in Bangalore",
        "Commercial Shops for Rent in Bangalore",
        "Industrial Building for Rent in Bangalore",
        "Commercial Showrooms for Rent in Bangalore",
        "Industrial Shed for Rent in Bangalore",
    ];

    const textArr2 = [
        "Warehouse for Rent in Chennai",
        "Coworking Spaces for Rent in Chennai",
        "Office Space for Rent in Chennai",
        "Industrial Building for Rent in Chennai",
        "Commercial Shops for Rent in Chennai",
        "Commercial Showrooms for Rent in Chennai",
        "Industrial Shed for Rent in Chennai",
    ];

    const textArr3 = [
        "Warehouse for Rent in Pune",
        "Office Space for Rent in Pune",
        "Commercial Shops for Rent in Pune",
        "Industrial Shed for Rent in Pune",
        "Commercial Showrooms for Rent in Pune",
        "Coworking Spaces for Rent in Pune",
        "Industrial Building for Rent in Pune",
    ];

    const textArr4 = [
        "Office Space for Rent in Mumbai",
        "Industrial Building for Rent in Mumbai",
        "Warehouse for Rent in Mumbai",
        "Commercial Shops for Rent in Mumbai",
        "Coworking Spaces for Rent in Mumbai",
        "Commercial Showrooms for Rent in Mumbai",
        "Industrial Shed for Rent in Mumbai",
    ];

    const textArr5 = [
        "Office space for rent in gurgaon",
        "Warehouse for Rent in Gurgaon",
        "Commercial Showrooms for Rent in Gurgaon",
        "Industrial Building for Rent in Gurgaon",
        "Coworking Spaces for Rent in Gurgaon",
        "Industrial Shed for Rent in Gurgaon",
        "Commercial Shops for Rent in Gurgaon",
    ];

    return (
        <Flex className={style.footerSubOptions}>
            <Box>
                <Box>Commercial Properties For Rent in Bangalore</Box>
                {textArr1.map((text) => (
                    <FooterSubOptionsText text={text} />
                ))}
            </Box>
            <Box>
                <Box>Commercial Properties For Rent in Chennai</Box>
                {textArr2.map((text) => (
                    <FooterSubOptionsText text={text} />
                ))}
            </Box>
            <Box>
                <Box>Commercial Properties For Rent in Pune</Box>
                {textArr3.map((text) => (
                    <FooterSubOptionsText text={text} />
                ))}
            </Box>
            <Box>
                <Box>Commercial Properties For Rent in Mumbai</Box>
                {textArr4.map((text) => (
                    <FooterSubOptionsText text={text} />
                ))}
            </Box>
            <Box>
                <Box>Commercial Properties For Rent in Gurgaon</Box>
                {textArr5.map((text) => (
                    <FooterSubOptionsText text={text} />
                ))}
            </Box>
        </Flex>
    );
}

export default FooterSubOptions6;
