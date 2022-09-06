import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import style from "./Footer.module.css";
import FooterSubOptionsText from "./FooterSubOptionsText";
function FooterSubOptions2() {
    const textArr1 = [
        "Flats for rent in Koramangala",
        "Flats for rent in HSR Layout",
        "Flats for rent in Marathahalli",
        "Flats for rent in Indira Nagar",
        "Flats for rent in Bellandur",
        "Flats for rent in Chandra Layout",
        "Flats for rent in J. P. Nagar",
        "Flats for rent in BTM Layout",
        "Flats for rent in Jayanagar",
        "Flats for rent in Whitefield",
        "Properties in Bangalore for Lease",
        "Apartments for rent in Bangalore",
        "Flats for rent in Delhi",
    ];

    const textArr2 = [
        "Flats for rent in Andheri West",
        "Flats for rent in Malad West",
        "Flats for rent in Andheri East",
        "Flats for rent in Powai",
        "Flats for rent in Thane West",
        "Flats for rent in Dombivli",
        "Flats for rent in Mira Road East",
        "Flats for rent in Kharghar",
        "Flats for rent in Navi Mumbai",
        "Flats for rent in Bandra West",
        "Properties in Mumbai with Heavy Deposit",
        "Flats for rent in Faridabad",
    ];

    const textArr3 = [
        "Flats for rent in Velachery",
        "Flats for rent in Madipakkam",
        "Flats for rent in Madipakkam",
        "Flats for rent in Medavakkam",
        "Flats for rent in Porur",
        "Flats for rent in Pallikaranai",
        "Flats for rent in Urapakkam",
        "Flats for rent in Ambattur",
        " Flats for rent in Okkiyam Thuraipakkam",
        "Flats for rent in Thiruvanmiyur",
        "Properties in Chennai for Lease",
        "Flats for rent in Noida",
    ];

    const textArr4 = [
        "Flats for rent in Hadapsar",
        "Flats for rent in Kharadi",
        "Flats for rent in Baner",
        "Flats for rent in Kothrud",
        "Flats for rent in Wagholi",
        "Flats for rent in Wakad",
        "Flats for rent in Wadgaon",
        "Flats for rent in Ambegaon Budruk",
        "Flats for rent in Aundh",
        "Flats for rent in Pimple Saudagar",
        "Properties in Pune with Heavy Deposit",
        "Flats for rent in Ghaziabad",
    ];

    const textArr5 = [
        "1 BHK Flats in Gurgaon for Rent",
        "2 BHK Flats in Gurgaon for Rent ",
        "3 BHK Flats in Gurgaon for Rent",
        "Flats in Sushant Lok Gurgaon for Rent",
        "Flats in Sector 31 Gurgaon for Rent",
        "Flats in Sector 49 Gurgaon for Rent",
        "Flats in Sector 40 Gurgaon for Rent",
        "Flats in Sector 45 Gurgaon for Rent",
        "Flats in Sector 57 Gurgaon for Rent",
        "Flats in Sector 23 Gurgaon for Rent",
        "Properties in Gurgaon for Lease",
        "Flats for rent in Greater Noida",
    ];
    return (
        <Flex className={style.footerSubOptions}>
            <Box>
                <Box>Flats for Rent in Bangalore</Box>
                {textArr1.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
            <Box>
                <Box>Flats for Rent in Mumbai</Box>
                {textArr2.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
            <Box>
                <Box>Flats for Rent in Chennai</Box>
                {textArr3.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
            <Box>
                <Box>Flats for Rent in Pune</Box>
                {textArr4.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
            <Box>
                <Box>Flats for Rent in Gurgaon</Box>
                {textArr5.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
        </Flex>
    );
}

export default FooterSubOptions2;
