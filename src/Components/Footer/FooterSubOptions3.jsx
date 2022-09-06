import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import style from "./Footer.module.css";
import FooterSubOptionsText from "./FooterSubOptionsText";
function FooterSubOptions3() {
    const textArr1 = [
        "PG in Koramangala",
        "PG in Marathahalli",
        "PG in HSR Layout",
        "PG in Whitefield",
        "PG in Indira Nagar",
        "PG in Bellandur",
        "PG in Chandra Layout",
        "PG in J. P. Nagar",
        "PG in BTM Layout",
        "PG in Jayanagar",
    ];

    const textArr2 = [
        "PG in Andheri West",
        "PG in Andheri East",
        "PG in Malad West",
        "PG in Navi Mumbai",
        "PG in Powai",
        "PG in Thane West",
        "PG in Mira Road East",
        "PG in Kharghar",
        "PG in Kandivali East",
        "PG in Bandra West",
    ];

    const textArr3 = [
        "PG in Velachery",
        "PG in Madipakkam",
        "PG in Chromepet",
        "PG in Medavakkam",
        "PG in Choolaimedu",
        "PG in Porur",
        "PG in Pallikaranai",
        "PG in Urapakkam",
        "PG in Valasaravakkam",
        "PG in Thiruvanmiyur",
    ];

    const textArr4 = [
        "PG in Hadapsar",
        "PG in Kharadi",
        "PG in Baner",
        "PG in Kothrud",
        "PG in Hinjawadi",
        "PG in Wakad",
        "PG in Wadgaon",
        "PG in Aundh",
        "PG in Pimple Saudagar",
        "PG in Bavdhan",
    ];

    const textArr5 = [
        "Girls PG / Hostels in Gurgaon",
        "Boys PG / hostels in Gurgaon",
        "PG / Hostels in Sector 14 Gurgaon",
        "PG / Hostels in DLF Cyber City Gurgaon",
        "PG / Hostels in Gurgaon Sector 44",
        "PG / Hostels in Gurgaon Sector 22",
        "PG / Hostels in Gurgaon Sector 21",
        "PG / Hostels in Sector 49 Gurgaon",
        "PG / Hostels in Gurgaon Sector 48",
        "PG / Hostels in IMT Manesar Gurgaon",
    ];

    return (
        <Flex className={style.footerSubOptions}>
            <Box>
                <Box>PG in Bangalore</Box>
                {textArr1.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
            <Box>
                <Box>PG in Mumbai</Box>
                {textArr2.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
            <Box>
                <Box>PG in Chennai</Box>
                {textArr3.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
            <Box>
                <Box>PG in Pune</Box>
                {textArr4.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
            <Box>
                <Box>PG / Hostels in Gurgaon</Box>
                {textArr5.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
        </Flex>
    );
}

export default FooterSubOptions3;
