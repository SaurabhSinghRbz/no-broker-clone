import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import style from "./Footer.module.css";
import FooterSubOptionsText from "./FooterSubOptionsText";

function FooterSubOptions4() {
    const textArr1 = [
        "Rooms for Rent in Koramangala",
        "Rooms for Rent in Marathahalli",
        "Rooms for Rent in HSR Layout",
        "Rooms for Rent in Whitefield",
        "Rooms for Rent in Indira Nagar",
        "Rooms for Rent in Bellandur",
        "Rooms for Rent in Chandra Layout",
        "Rooms for Rent in J. P. Nagar",
        "Rooms for Rent in BTM Layout",
        "Rooms for Rent in Jayanagar",
    ];

    const textArr2 = [
        "Rooms for Rent in Andheri West",
        "Rooms for Rent in Andheri East",
        "Rooms for Rent in Malad West",
        "Rooms for Rent in Navi Mumbai",
        "Rooms for Rent in Powai",
        "Rooms for Rent in Thane West",
        "Rooms for Rent in Mira Road East",
        "Rooms for Rent in Kharghar",
        "Rooms for Rent in Kandivali East",
        "Rooms for Rent in Bandra West",
    ];

    const textArr3 = [
        "Rooms for Rent in Velachery",
        "Rooms for Rent in Madipakkam",
        "Rooms for Rent in Chromepet",
        "Rooms for Rent in Medavakkam",
        "Rooms for Rent in Choolaimedu",
        "Rooms for Rent in Porur",
        "Rooms for Rent in Pallikaranai",
        "Rooms for Rent in Urapakkam",
        "Rooms for Rent in Valasaravakkam",
        "Rooms for Rent in Thiruvanmiyur",
    ];

    const textArr4 = [
        "Rooms for Rent in Hadapsar",
        "Rooms for Rent in Kharadi",
        "Rooms for Rent in Baner",
        "Rooms for Rent in Kothrud",
        "Rooms for Rent in Hinjawadi",
        "Rooms for Rent in Wakad",
        "Rooms for Rent in Wadgaon",
        "Rooms for Rent in Aundh",
        "Rooms for Rent in Pimple Saudagar",
        "Rooms for Rent in Bavdhan",
    ];

    const textArr5 = [
        "Rooms for Rent in Sector 31",
        "Rooms for Rent in Palam Vihar",
        "Rooms for Rent in Sushant Lok",
        "Rooms for Rent in South City 1",
        "Rooms for Rent in Sector 21",
        "Rooms for Rent in Sector 15",
        "Rooms for Rent in MG Road",
        "Rooms for Rent in Sector 14",
    ];

    return (
        <Flex className={style.footerSubOptions}>
            <Box>
                <Box>Rooms for Rent in Bangalore</Box>
                {textArr1.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
            <Box>
                <Box>Rooms for Rent in Mumbai</Box>
                {textArr2.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
            <Box>
                <Box>Rooms for Rent in Chennai</Box>
                {textArr3.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
            <Box>
                <Box>Rooms for Rent in Pune</Box>
                {textArr4.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
            <Box>
                <Box>Rooms for Rent in Gurgaon</Box>
                {textArr5.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
        </Flex>
    );
}

export default FooterSubOptions4;
