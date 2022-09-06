import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { Grid, GridItem, Wrap, WrapItem, Image, Link } from '@chakra-ui/react'
import { FaFacebook, FaTwitter } from "react-icons/fa"
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import youtubeLogo from "../../Images/footer/youtube.svg"


import style from "./Footer.module.css";



import FooterSubOptions1 from "./FooterSubOptions1";
import FooterSubOptions2 from "./FooterSubOptions2";
import FooterSubOptions3 from "./FooterSubOptions3";
import FooterSubOptions4 from "./FooterSubOptions4";
import FooterSubOptions5 from "./FooterSubOptions5";
import FooterSubOptions6 from "./FooterSubOptions6";
import FooterSubOptions7 from "./FooterSubOptions7";


import androidDownload from "../../Images/footer/googlePlayStore.svg"
import iosDonload from "../../Images/footer/iosDownload.svg"

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
            <Flex w="100%" m="auto" justifyContent="center" className={style.aboutUs}>
                <Text>About Us</Text>
                <Text>Careers</Text>
                <Text>Terms & Conditions</Text>
                <Text>Privacy Policy</Text>
                <Text>Testimonials</Text>
                <Text>Sitemap</Text>
                <Text>FAQs</Text>
            </Flex>
            <Box border="1px solid rgba(70, 70, 70, .239216)" m="35px 18%" ></Box>
            <Flex gap={10} w="100%" m="auto" justifyContent="center">
                <Link href='https://play.google.com/store/apps/details?id=com.nobroker.app&referrer=utm_source=nobroker&utm_medium=website' isExternal>
                    <Image src={androidDownload} alt="androidDownload" />
                </Link>
                <Link href='https://apps.apple.com/nz/app/nobroker-house-for-rent/id1200507100?referrer=utm_source%3Dnobroker&utm_medium=website' isExternal>
                    <Image src={iosDonload} alt="iosDownload" />
                </Link>
            </Flex>
            <Flex gap={2} w="100%" m="20px auto" justifyContent="center" className={style.socialLinks}>
                <Link href="https://www.facebook.com/nobrokercom/" isExternal>
                    <FaFacebook />
                </Link>
                <Link href="https://twitter.com/nobrokercom" isExternal>
                    <FaTwitter />
                </Link>
                <Link href="https://www.instagram.com/nobroker/" isExternal>
                    <AiFillInstagram />
                </Link>
                <Link href="https://www.linkedin.com/company/nobroker-in/" isExternal>
                    <AiFillLinkedin />
                </Link>
                <Link href="https://www.youtube.com/c/NoBrokercomOfficial" isExternal>
                    <Image src={youtubeLogo}></Image>
                </Link>
            </Flex>
            <Text align="center" p="0 0 20px 0" fontSize="13px" letterSpacing="0.5px">© 2013-22 NoBroker Technologies Solution Pvt. Ltd.</Text>
        </Box>
    );
}

export default FooterOptions;
