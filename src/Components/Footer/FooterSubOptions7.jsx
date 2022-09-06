import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import style from "./Footer.module.css";
import FooterSubOptionsText from "./FooterSubOptionsText";

function FooterSubOptions7() {
    const textArr1 = [
        "New Projects in Koramangala",
        "New Projects in HSR Layout",
        "New Projects in Marathahalli",
        "New Projects in Indira Nagar",
        "New Projects in Bellandur",
        "New Projects in Chandra Layout",
        "New Projects in J. P. Nagar",
        "New Projects in BTM Layout",
        "New Projects in Jayanagar",
        "New Projects in Whitefield",
    ];

    const textArr2 = [
        "New Projects in Andheri West",
        "New Projects in Malad West",
        "New Projects in Andheri East",
        "New Projects in Powai",
        "New Projects in Thane West",
        "New Projects in Dombivli",
        "New Projects in Mira Road East",
        "New Projects in Kharghar",
        "New Projects in Navi Mumbai",
        "New Projects in Bandra West",
    ];

    const textArr3 = [
        "New Projects in Velachery",
        "New Projects in Madipakkam",
        "New Projects in Chromepet",
        "New Projects in Medavakkam",
        "New Projects in Porur",
        "New Projects in Pallikaranai",
        "New Projects in Urapakkam",
        "New Projects in Ambattur",
        " New Projects in Okkiyam Thuraipakkam",
        "New Projects in Thiruvanmiyur",
    ];

    const textArr4 = [
        "New Projects in Hadapsar",
        "New Projects in Kharadi",
        "New Projects in Baner",
        "New Projects in Kothrud",
        "New Projects in Wagholi",
        "New Projects in Wakad",
        "New Projects in Wadgaon",
        "New Projects in Ambegaon Budruk",
        "New Projects in Aundh",
        "New Projects in Pimple Saudagar",
    ];

    const textArr5 = [
        "New Projects in Sushant Lok Gurgaon",
        "New Projects in Sector 31 Gurgaon",
        "New Projects in Sector 49 Gurgaon",
        "New Projects in Sector 40 Gurgaon",
        "New Projects in Sector 45 Gurgaon",
        "New Projects in Sector 57 Gurgaon",
        "New Projects in Sector 23 Gurgaon",
    ];

    return (
        <Flex className={style.footerSubOptions}>
            <Box>
                <Box>New Projects in Bangalore</Box>
                {textArr1.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
            <Box>
                <Box>New Projects in Mumbai</Box>
                {textArr2.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
            <Box>
                <Box>New Projects in Chennai</Box>
                {textArr3.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
            <Box>
                <Box>New Projects in Pune</Box>
                {textArr4.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
            <Box>
                <Box>New Projects in Gurgaon</Box>
                {textArr5.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
        </Flex>
    );
}

export default FooterSubOptions7;
