import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import style from "./Footer.module.css";
import FooterSubOptionsText from "./FooterSubOptionsText";

function FooterSubOptions5() {
    const textArr1 = [
        "Packers and Movers",
        "Packers and Movers in Bangalore",
        "Flats for Rent in Hyderabad",
        "Office Space for Rent in Hyderabad",
        "Coworking Space for Rent in Hyderabad",
        "Shops for Rent in Hyderabad",
        "Office Space for Sale in Hyderabad",
        "Electrician Services Bangalore",
        "Carpentry Services Bangalore",
        "Cleaning Services Bangalore",
        "Property Management in Hyderabad",
        "Interior Designers in Pune",
        "Interior Designers in Gurgaon",
        "NRI Services in Chennai",
        "NRI Services in Delhi",
    ];

    const textArr2 = [
        "Best Packers and Movers in Whitefield",
        "Packers and Movers in Bangalore for Local Shifting",
        "Flats for Sale in Hyderabad",
        "Industrial Building for Rent in Hyderabad",
        "Industrial Shed for Rent in Hyderabad",
        "Godown for Rent in Hyderabad",
        "Industrial Building for Sale in Hyderabad",
        "Plumbing Services Bangalore",
        "Sapphire Lakeside",
        "Sobha Dream Acres",
        "Property Management in Pune",
        "Interior Designers in Mumbai",
        "Interior Designers in Faridabad",
        "NRI Services in Mumbai",
        "NRI Services in Gurgaon",
    ];

    const textArr3 = [
        "Packers and Movers in Mumbai",
        "Best Packers and Movers in Mumbai",
        "Packers and Movers in Chennai",
        "Best Packers and Movers in Chennai",
        "PG in Hyderabad",
        "Showroom Space for Rent in Hyderabad",
        "Godown for Sale in Hyderabad",
        "Industrial Shed for Sale in Hyderabad",
        "Home Services",
        "Prestige Lakeside Habitat",
        "Property Management in Mumbai",
        "Interior Designers in Bangalore",
        "Interior Designers in Ghaziabad",
        "NRI Services in pune",
        "NRI Services in Ghaziabad",
    ];

    const textArr4 = [
        "Two Colour Combination for Bedroom Walls",
        "Best Out Of Waste Ideas",
        "Akshay Kumar House",
        "Indian House Colour Combination Outside",
        "Tallest Buildings in Mumbai",
        "Wall Mounted Dining Table",
        "Safety Rules at Home",
        "GFRG Panel",
        "Hanging Lights for Living Room",
        "Franking Charges",
        "Paying Guest",
        "Property Management in Bangalore",
        "Interior Designers in Chennai",
        "Interior Designers in Delhi",
        "NRI Services in Bangalore",
        "NRI Services in Faridabad",
    ];

    const textArr5 = [
        "Packers and Movers in Pune",
        "Best Packers and Movers in Pune",
        "Hanging Lights for Living Room",
        "Property Management Services",
        "NoBrokerHOOD - Visitor & Society Management System",
        "Flatmates in Hyderabad",
        "Showrooms Space for Sale in Hyderabad",
        "Shops for Sale in Hyderabad",
        "Coworking Space for Sale in Hyderabad",
        "Painting Services Bangalore",
        "Property Management in Chennai",
        "Interior Designers in Hyderabad",
        "Interior Designers in Noida",
        "NRI Services in Hyderabad",
        "NRI Services in Noida",
    ];

    return (
        <Flex className={style.footerSubOptions}>
            <Box>
                {textArr1.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
            <Box>
                {textArr2.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
            <Box>
                {textArr3.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
            <Box>
                {textArr4.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
            <Box>
                {textArr5.map((text, idx) => (
                    <FooterSubOptionsText text={text} key={idx} />
                ))}
            </Box>
        </Flex>
    );
}

export default FooterSubOptions5;
