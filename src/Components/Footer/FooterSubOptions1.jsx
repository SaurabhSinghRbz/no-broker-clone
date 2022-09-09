import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import style from "./Footer.module.css";
import FooterSubOptionsText from "./FooterSubOptionsText";
function FooterSubOptions1() {
    const textArr1 = [
        "Flats for Sale in Koramangala",
        "Flats for Sale in Marathahalli",
        "Flats for Sale in HSR Layout",
        "Flats for Sale in Whitefield",
        "Flats for Sale in Indira Nagar",
        "Flats for Sale in Bellandur",
        "Flats for Sale in Chandra Layout",
        "Flats for Sale in J. P. Nagar",
        "Flats for Sale in BTM Layout",
        "Flats for Sale in Jayanagar",
        "Flats for Sale in Bangalore Below 10 Lakhs",
        "Flats for Sale in Bangalore Below 15 Lakhs",
        "Flats for Sale in Bangalore Below 20 Lakhs",
        "Flats for Sale in Bangalore Below 25 Lakhs",
        "Flats for Sale in Bangalore Below 30 Lakhs",
        "Flats for Sale in Bangalore Below 35 Lakhs",
        "Flats for Sale in Bangalore Below 40 Lakhs",
        "Flats for Sale in Bangalore Below 45 Lakhs",
        "Flats for Sale in Bangalore Below 50 Lakhs",
    ];

    const textArr2 = [
        "Flats for Sale in Andheri West",
        "Flats for Sale in Andheri East",
        "Flats for Sale in Malad West",
        "Flats for Sale in Navi Mumbai",
        "Flats for Sale in Powai",
        "Flats for Sale in Thane West",
        "Flats for Sale in Mira Road East",
        "Flats for Sale in Kharghar",
        "Flats for Sale in Kandivali East",
        "Flats for Sale in Bandra West",
        "Flats for Sale in Mumbai Below 10 Lakhs",
        "Flats for Sale in Mumbai Below 15 Lakhs",
        "Flats for Sale in Mumbai Below 20 Lakhs",
        "Flats for Sale in Mumbai Below 25 Lakhs",
        "Flats for Sale in Mumbai Below 30 Lakhs",
        "Flats for Sale in Mumbai Below 35 Lakhs",
        "Flats for Sale in Mumbai Below 40 Lakhs",
        "Flats for Sale in Mumbai Below 45 Lakhs",
        "Flats for Sale in Mumbai Below 50 Lakhs",
    ];

    const textArr3 = [
        "Flats for Sale in Velachery",
        "Flats for Sale in Thiruvanmiyur",
        "Flats for Sale in Madipakkam",
        "Flats for Sale in Thoraipakkam",
        "Flats for Sale in Sholinganallur",
        "Flats for Sale in Medavakkam",
        "Flats for Sale in Mylapore",
        "Flats for Sale in Adyar",
        "Flats for Sale in T Nagar",
        "Flats for Sale in Perungudi",
        "Flats for Sale in Chennai Below 10 Lakhs",
        "Flats for Sale in Chennai Below 15 Lakhs",
        "Flats for Sale in Chennai Below 20 Lakhs",
        "Flats for Sale in Chennai Below 25 Lakhs",
        "Flats for Sale in Chennai Below 30 Lakhs",
        "Flats for Sale in Chennai Below 35 Lakhs",
        "Flats for Sale in Chennai Below 40 Lakhs",
        "Flats for Sale in Chennai Below 45 Lakhs",
        "Flats for Sale in Chennai Below 50 Lakhs",
    ];
    const textArr4 = [
        "Flats for Sale in Wakad",
        "Flats for Sale in Kharadi",
        "Flats for Sale in Baner",
        "Flats for Sale in Hadapsar",
        "Flats for Sale in Aundh",
        "Flats for Sale in Kothrud",
        "Flats for Sale in Pimple Saudagar",
        "Flats for Sale in Viman Nagar",
        "Flats for Sale in Pimpri",
        "Flats for Sale in Hinjewadi",
        "Flats for Sale in Pune Below 10 Lakhs",
        "Flats for Sale in Pune Below 15 Lakhs",
        "Flats for Sale in Pune Below 20 Lakhs",
        "Flats for Sale in Pune Below 25 Lakhs",
        "Flats for Sale in Pune Below 30 Lakhs",
        "Flats for Sale in Pune Below 35 Lakhs",
        "Flats for Sale in Pune Below 40 Lakhs",
        "Flats for Sale in Pune Below 45 Lakhs",
        "Flats for Sale in Pune Below 50 Lakhs",
    ];
    const textArr5 = [
        "1 BHK Flats in Gurgaon",
        "2 BHK Flats in Gurgaon",
        "3 BHK Flats in Gurgaon",
        "4 BHK Flats in Gurgaon",
        "4+ BHK in Gurgaon",
        "Fully Furnished Flats in Gurgaon",
        "Semi Furnished Flats in Gurgaon",
        "Unfurnished Flats in Gurgaon",
        "Independent Floor for Sale in Gurgaon",
        "Independent Houses For Sale in Gurgaon",
        "Flats for Sale in Gurgaon Below 10 Lakhs",
        "Flats for Sale in Gurgaon Below 15 Lakhs",
        "Flats for Sale in Gurgaon Below 20 Lakhs",
        "Flats for Sale in Gurgaon Below 25 Lakhs",
        "Flats for Sale in Gurgaon Below 30 Lakhs",
        "Flats for Sale in Gurgaon Below 35 Lakhs",
        "Flats for Sale in Gurgaon Below 40 Lakhs",
        "Flats for Sale in Gurgaon Below 45 Lakhs",
        "Flats for Sale in Gurgaon Below 50 Lakhs",
    ];

    return (
        <Flex className={style.footerSubOptions}>
            <Box>
                <Box>Flats for Sale in Bangalore</Box>
                {textArr1.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
            <Box>
                <Box>Flats for Sale in Mumbai</Box>
                {textArr2.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
            <Box>
                <Box>Flats for Sale in Chennai</Box>
                {textArr3.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
            <Box>
                <Box>Flats for Sale in Pune</Box>
                {textArr4.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
            <Box>
                <Box>Flats in Gurgaon for Sale</Box>
                {textArr5.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
        </Flex>
    );
}

export default FooterSubOptions1;
