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

    const textArr6 = [
        "Office Space for Sale in Bangalore", "Industrial Building for Sale in Bangalore", "Coworking Spaces for Sale in Bangalore", "Industrial Shed for Sale in Bangalore", "Commercial Shops for Sale in Bangalore", "Warehouse for Sale in Bangalore", "Commercial Showrooms for Sale in Bangalore"
    ]

    const textArr7 = [
        "Office Space for Sale in Chennai", "Industrial Building for Sale in Chennai", "Coworking Spaces for Sale in Chennai", "Industrial Shed for Sale in Chennai", "Commercial Shops for Sale in Chennai", "Warehouse for Sale in Chennai", "Commercial Showrooms for Sale in Chennai"
    ]

    const textArr8 = [
        "Coworking Spaces for Sale in Pune", "Industrial Shed for Sale in Pune", "Industrial Building for Sale in Pune", "Commercial Shops for Sale in Pune", "Warehouse for Sale in Pune", "Commercial Showrooms for Sale in Pune", "Office Space for Sale in Pune"
    ]

    const textArr9 = [
        "Industrial Building for Sale in Mumbai", "Coworking Spaces for Sale in Mumbai", "Commercial Shops for Sale in Mumbai", "Industrial Shed for Sale in Mumbai", "Commercial Showrooms for Sale in Mumbai", "Warehouse for Sale in Mumbai", "Office Space for Sale in Mumbai"
    ]

    const textArr10 = [
        "Coworking Spaces for Sale in Gurgaon", "Industrial Shed for Sale in Gurgaon", "Commercial Shops for Sale in Gurgaon", "Commercial Showrooms for Sale in Gurgaon", "Warehouse for Sale in Gurgaon", "Office Space for Sale in Gurgaon", "Industrial Building for Sale in Gurgaon"
    ]


    return (
        <Box>
            <Flex className={style.footerSubOptions}>
                <Box>
                    <Box>Commercial Properties For Rent in Bangalore</Box>
                    {textArr1.map((text, idx) => (
                        <FooterSubOptionsText text={text} key={idx} />
                    ))}
                </Box>
                <Box>
                    <Box>Commercial Properties For Rent in Chennai</Box>
                    {textArr2.map((text, idx) => (
                        <FooterSubOptionsText text={text} key={idx} />
                    ))}
                </Box>
                <Box>
                    <Box>Commercial Properties For Rent in Pune</Box>
                    {textArr3.map((text, idx) => (
                        <FooterSubOptionsText text={text} key={idx} />
                    ))}
                </Box>
                <Box>
                    <Box>Commercial Properties For Rent in Mumbai</Box>
                    {textArr4.map((text, idx) => (
                        <FooterSubOptionsText text={text} key={idx} />
                    ))}
                </Box>
                <Box>
                    <Box>Commercial Properties For Rent in Gurgaon</Box>
                    {textArr5.map((text, idx) => (
                        <FooterSubOptionsText text={text} key={idx} />
                    ))}
                </Box>
            </Flex>

            <Flex className={style.footerSubOptions}>
                <Box>
                    <Box>Commercial Properties For Sale in Bangalore</Box>
                    {textArr6.map((text, idx) => (
                        <FooterSubOptionsText text={text} key={idx} />
                    ))}
                </Box>
                <Box>
                    <Box>Commercial Properties For Sale in Chennai</Box>
                    {textArr7.map((text, idx) => (
                        <FooterSubOptionsText text={text} key={idx} />
                    ))}
                </Box>
                <Box>
                    <Box>Commercial Properties For Sale in Pune</Box>
                    {textArr8.map((text, idx) => (
                        <FooterSubOptionsText text={text} key={idx} />
                    ))}
                </Box>
                <Box>
                    <Box>Commercial Properties For Sale in Mumbai</Box>
                    {textArr9.map((text, idx) => (
                        <FooterSubOptionsText text={text} key={idx} />
                    ))}
                </Box>
                <Box>
                    <Box>Commercial Properties For Sale in Gurgaon</Box>
                    {textArr10.map((text, idx) => (
                        <FooterSubOptionsText text={text} key={idx} />
                    ))}
                </Box>
            </Flex>
        </Box>

    );
}

export default FooterSubOptions6;
