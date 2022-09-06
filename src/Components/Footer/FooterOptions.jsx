import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { Grid, GridItem, Wrap, WrapItem, Button } from '@chakra-ui/react'
import style from "./Footer.module.css";
import FooterSubOptions1 from "./FooterSubOptions1";
import FooterSubOptions2 from "./FooterSubOptions2";
import FooterSubOptions3 from "./FooterSubOptions3";
import FooterSubOptions4 from "./FooterSubOptions4";
import FooterSubOptions5 from "./FooterSubOptions5";
import FooterSubOptions6 from "./FooterSubOptions6";
import FooterSubOptions7 from "./FooterSubOptions7";

function FooterOptions() {
    const [selectedBg, setSelectedBg] = React.useState(1);
    return (
        <Box>
            <Flex className={style.footerOptions}>
                <Box onClick={() => setSelectedBg(1)} style={selectedBg === 1 ? { borderBottom: "3px solid black" } : {}}>Flats for Sale</Box>
                <Box onClick={() => setSelectedBg(2)} style={selectedBg === 2 ? { borderBottom: "3px solid black" } : {}}>Flats for Rent</Box>
                <Box onClick={() => setSelectedBg(3)} style={selectedBg === 3 ? { borderBottom: "3px solid black" } : {}}>PG / Hostels</Box>
                <Box onClick={() => setSelectedBg(4)} style={selectedBg === 4 ? { borderBottom: "3px solid black" } : {}}>Flatmates</Box>
                <Box onClick={() => setSelectedBg(5)} style={selectedBg === 5 ? { borderBottom: "3px solid black" } : {}}>Miscellaneous</Box>
                <Box onClick={() => setSelectedBg(6)} style={selectedBg === 6 ? { borderBottom: "3px solid black" } : {}}>Commercial</Box>
                <Box onClick={() => setSelectedBg(7)} style={selectedBg === 7 ? { borderBottom: "3px solid black" } : {}}>New Projects</Box>
            </Flex>
            {selectedBg === 1 ? (
                <FooterSubOptions1 />
            ) : selectedBg === 2 ? (
                <FooterSubOptions2 />
            ) : selectedBg === 3 ? (
                <FooterSubOptions3 />
            ) : selectedBg === 4 ? (
                <FooterSubOptions4 />
            ) : selectedBg === 5 ? (
                <FooterSubOptions5 />
            ) : selectedBg === 6 ? (
                <FooterSubOptions6 />
            ) : (
                <FooterSubOptions7 />
            )}
            <Text fontSize="22px" p="0 0 25px 25px" fontWeight="600">NoBroker Services</Text>
            <Grid templateColumns='repeat(2, 1fr)' gap={20} m="5px 25px 10px 25px">
                <GridItem>
                    <Text fontSize="17px">Buy</Text>
                    <Wrap spacing={3} p="15px 0">
                        <WrapItem>Home Loan</WrapItem>
                        <WrapItem>Property Legal Services</WrapItem>
                        <WrapItem>Interiors</WrapItem>
                        <WrapItem>Sale Agreement</WrapItem>
                        <WrapItem>NoBroker For NRI's</WrapItem>
                        <WrapItem>New Builder Project</WrapItem>
                        <WrapItem>EMI Calculator</WrapItem>
                        <WrapItem>Home Loan Balance Transfer</WrapItem>
                        <WrapItem>Home Loan Eligibility Check</WrapItem>
                        <WrapItem>Apply Home Loan</WrapItem>
                        <WrapItem>Pre Approved Home Loan</WrapItem>
                        <WrapItem>Buy / Sell Property Questions</WrapItem>
                    </Wrap>
                </GridItem>

                <GridItem>
                    <Text fontSize="17px">Rent</Text>
                    <Wrap spacing={3} p="15px 0">
                        <WrapItem>Rental Agreement</WrapItem>
                        <WrapItem>Pay Rent</WrapItem>
                        <WrapItem>Refer and Earn</WrapItem>
                        <WrapItem>Home Services</WrapItem>
                        <WrapItem>Packers and Movers</WrapItem>
                        <WrapItem>Property Management in India</WrapItem>
                        <WrapItem>Home Services Questions</WrapItem>
                        <WrapItem>Rent Services Questions</WrapItem>
                    </Wrap>
                </GridItem>
            </Grid>
            <Flex className={style.findNow}>
                <Box borderRight="1px solid grey" w="50%">
                    <Text as='b' fontSize="18px">Find Property</Text>
                    <Text fontSize="14px">Select from thousands of options, without brokerage.</Text>
                    <Text backgroundColor="#464646" color="white" p="0" m="0">Find Now</Text>
                </Box>
                <Box w="50%">
                    <Text as="b" fontSize="18px">List Your Property</Text>
                    <Text fontSize="14px">For Free. Without any brokerage.</Text>
                    <Text backgroundColor="#464646" color="white">Free Posting</Text>
                </Box>
            </Flex>
        </Box>
    );
}

export default FooterOptions;
