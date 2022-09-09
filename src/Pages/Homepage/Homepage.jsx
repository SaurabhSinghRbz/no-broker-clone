import React from "react";
import style from "./Homepage.module.css";
import { GoSearch } from "react-icons/go";
import {
    Box,
    Flex,
    Grid,
    Image,
    Select,
    Text,
    Button,
    Input,
    Circle,
} from "@chakra-ui/react";
import nIcon from "../../Images/Homepage/nIcon.png";
import { Link, Route, Routes } from "react-router-dom";
import BuyOption from "./BuyOption";
import RentOption from "./RentOption";
import CommercialOption from "./CommercialOption";
import savings from "../../Images/Homepage/savings.png";
import builderProject from "../../Images/Homepage/builderProject.png";
import saleAgree from "../../Images/Homepage/saleAgree.png";
import homeLoan from "../../Images/Homepage/homeLoan.png";
import propertySarvices from "../../Images/Homepage/propertyServices.png";
import homeInter from "../../Images/Homepage/homeInteriors.svg";
import noBrokerNri from "../../Images/Homepage/noBrokerNri.png";

import avoidBroker from "../../Images/Homepage/avoidBrokers.png"
import freeListing from "../../Images/Homepage/freeLisiting.png";
import shortlist from "../../Images/Homepage/shortlist.png";
import rentalAgree from "../../Images/Homepage/rental.png"

import building from "../../Images/Homepage/building.png"
import OurCoustomerReview from "./OurCoustomerReview";

import mobile from "../../Images/Homepage/mobile.png"
import playStore from "../../Images/Homepage/playStore.png";
import appleStore from "../../Images/Homepage/iosDownload.svg"

function Homepage() {
    const [selectedOpt, setSelectedOpt] = React.useState("Buy");
    return (
        <Box>
            <Box className={style.homepageContainer}>
                <Text className={style.homeTitle}>
                    World's Largest NoBrokerage Property Site
                </Text>
                <Box w="fit-content" m="auto">
                    <Flex className={style.nIcon}>
                        <Image src={nIcon} />
                        <Text>Pay rent with Credit Card!</Text>
                    </Flex>
                </Box>
                <Grid className={style.buyRent}>
                    <Box
                        onClick={() => setSelectedOpt("Buy")}
                        style={
                            selectedOpt === "Buy"
                                ? { borderBottom: "3px solid #fd3752", color: "#fd3752" }
                                : { borderBottom: "0px solid" }
                        }
                    >
                        <Link to="/buy">Buy</Link>
                    </Box>
                    <Box
                        onClick={() => setSelectedOpt("Rent")}
                        style={
                            selectedOpt === "Rent"
                                ? { borderBottom: "3px solid #fd3752", color: "#fd3752" }
                                : { borderBottom: "0px solid" }
                        }
                    >
                        <Link to="/rent">Rent</Link>
                    </Box>
                    <Box
                        onClick={() => setSelectedOpt("Commercial")}
                        style={
                            selectedOpt === "Commercial"
                                ? { borderBottom: "3px solid #fd3752", color: "#fd3752" }
                                : { borderBottom: "0px solid" }
                        }
                    >
                        <Link to="/commercial">Commercial</Link>
                    </Box>
                </Grid>
                <Flex className={style.searchBox}>
                    <Box>
                        <Select
                            placeholder="Select a city"
                            size="lg"
                            w={"180px"}
                            focusBorderColor="red"
                        >
                            <option value="Mumbai">Mumbai</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Pune">Pune</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Gurgaon">Gurgaon</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Noida">Noida</option>
                            <option value="Greater Noida">Greater Noida</option>
                            <option value="Ghaziabad">Ghaziabad</option>
                            <option value="Faridabad">Faridabad</option>
                        </Select>
                    </Box>
                    <Box className={style.searchInput}>
                        <Input placeholder="Search upto 3 localities or landmarks" />
                    </Box>
                    <Box>
                        <Button
                            leftIcon={<GoSearch />}
                            bgColor="#fd3752"
                            variant="solid"
                            color="white"
                            className={style.searchButton}
                        >
                            Search
                        </Button>
                    </Box>
                </Flex>
                <Flex className={style.filterBox}>
                    <Routes>
                        <Route path="/buy" element={<BuyOption />} />
                        <Route path="/rent" element={<RentOption />} />
                        <Route path="/commercial" element={<CommercialOption />} />
                    </Routes>
                </Flex>
            </Box>
            <Flex
                m="20px auto"
                w="100%"
                justifyContent="center"
                alignItems="center"
                gap={3}
            >
                <Text w="60px" h="1px" bgColor="#ccc"></Text>
                <Text>Are you a Property Owner? </Text>
                <Text w="60px" h="1px" bgColor="#ccc"></Text>
            </Flex>
            <Box w="100%" m="auto">
                <Flex className={style.postYourAd} bgColor="#009587" color="white">
                    Post Free property ad
                </Flex>
            </Box>
            <Flex
                bgColor="#384d6c"
                h="55px"
                justifyContent="center"
                alignItems="center"
                color="#fff"
                m="30px 0 5px 0"
                gap={2}
                fontSize="14px"
            >
                <Image src={savings} alt="savings" />
                <Text>
                    Do you know how much <Text as="b">loan</Text> you can get? Get maximum
                    with <Text as="b">NoBroker</Text>
                </Text>
                <a
                    href="https://www.nobroker.in/prophub/home-loan/check-eligibility/?nbFr=HOME-BANNER-BUY&utm_medium=homepage&utm_source=desktopBanner"
                    target="_blank" rel="noreferrer"
                >
                    <Button
                        color="#464646"
                        bgColor="#fff"
                        fontSize="12px"
                        p="4px 8px"
                        h="fit-content"
                        borderRadius="4px"
                    >
                        Check Eligibility
                    </Button>
                </a>
            </Flex>
            <Flex className={style.optiosWithIcon}>
                <Box>
                    <Text>New</Text>
                    <Image src={builderProject} alt="builderProject"></Image>
                    <Text>Builder Projects</Text>
                </Box>
                <Box>
                    <Text>New</Text>
                    <Image src={saleAgree} alt="saleAgree"></Image>
                    <Text>Sale Agreement</Text>
                </Box>
                <Box>
                    <Text visibility="hidden"></Text>
                    <Image src={homeLoan} alt="homeLoan"></Image>
                    <Text>Home Loan</Text>
                </Box>
                <Box>
                    <Text visibility="hidden"></Text>
                    <Image src={propertySarvices} alt="propertySarvices"></Image>
                    <Text>Property Legal Services</Text>
                </Box>
                <Box>
                    <Text>Sale is live!</Text>
                    <Image src={homeInter} alt="homeInter"></Image>
                    <Text>Home Interiors</Text>
                </Box>
                <Box>
                    <Text visibility="hidden"></Text>
                    <Image src={noBrokerNri} alt="noBrokerNri"></Image>
                    <Text>NoBroker for NRI’s</Text>
                </Box>
            </Flex>
            <Flex mt="30px" justifyContent="center" alignItems="center" gap={10}>
                <Text className={style.horizontalLineBox}>
                    <Text className={style.horizontalLine}></Text>
                    <Text className={style.redCircle}></Text>
                </Text>
                <Text align="center" fontSize="32px" color="#787676" minW="max-content" >
                    Why Use NoBroker
                </Text >
                <Text className={style.horizontalLineBox}>
                    <Text className={style.redCircle}></Text>
                    <Text className={style.horizontalLine}></Text>
                </Text>
            </Flex>
            <Grid className={style.whyUseNoBroker}>
                <Box>
                    <Image src={avoidBroker} alt="avoidBroker" />
                    <Text>Avoid Brokers</Text>
                    <Text>We directly connect you to verified <br /> owners to save brokerage</Text>
                </Box>
                <Box>
                    <Image src={freeListing} alt="freeListing" />
                    <Text>Free Listing</Text>
                    <Text>Easy listing process. Also <br /> using WhatsApp</Text>
                </Box>
                <Box>
                    <Image src={shortlist} alt="shortlist" />
                    <Text>Shortlist without Visit</Text>
                    <Text>Extensive Information <br /> makes it easy</Text>
                </Box>
                <Box>
                    <Image src={rentalAgree} alt="rentalAgree" />
                    <Text>Rental Agreement</Text>
                    <Text>Assistance in creating Rental <br /> agreement & Paper work</Text>
                </Box>
            </Grid>

            <Box className={style.enquiryNow}>
                <Flex justifyContent="center" alignItems="center" gap={10} w="100%">
                    <Text className={style.horizontalLineBox}>
                        <Text className={style.horizontalLine}></Text>
                        <Text className={style.redCircle}></Text>
                    </Text>
                    <Text align="center" fontSize="32px" color="#787676" minW="max-content">
                        NoBroker Business Assist Plan For Builders
                    </Text >
                    <Text className={style.horizontalLineBox}>
                        <Text className={style.redCircle}></Text>
                        <Text className={style.horizontalLine}></Text>
                    </Text>
                </Flex>
                <Flex alignItems="center" justifyContent='center' mt="40px">
                    <Box>
                        <Image src={building} alt="building" />
                    </Box>
                    <Box ml="120px">
                        <Text fontSize="18px" fontWeight="400">Get in touch with us to Sell or Rent Your Projects</Text>
                        <a href="https://www.nobroker.in/prophub/builders/builders/" target="_blank" rel="noreferrer" className={style.enquiryBtn}>Enquire Now</a>
                        <Text fontSize="14px" p="2px 0" borderTop="1px solid #ccc">For Builder Enquiries: +91 91080 50400</Text>
                    </Box>
                </Flex>
            </Box>


            <Box p="40px 0">
                <Flex justifyContent="center" alignItems="center" gap={10} w="100%">
                    <Text className={style.horizontalLineBox}>
                        <Text className={style.horizontalLine}></Text>
                        <Text className={style.redCircle}></Text>
                    </Text>
                    <Text align="center" fontSize="32px" color="#787676" minW="max-content">
                        We Make A Difference
                    </Text >
                    <Text className={style.horizontalLineBox}>
                        <Text className={style.redCircle}></Text>
                        <Text className={style.horizontalLine}></Text>
                    </Text>
                </Flex>
                <Flex textAlign="center" p="0 10%" mt="40px" justifyContent="space-between">
                    <Box>
                        <Circle size="170px" bg='white' color='#fd3752' border="2px solid #fd3752" m="0 auto 15px auto" fontSize="40px" lineHeight="170px">
                            ₹130 cr+
                        </Circle>
                        <Text fontSize="22px">Brokerage saved monthly</Text>
                    </Box>
                    <Box>
                        <Circle size="170px" bg='white' color='#fd3752' border="2px solid #fd3752" m="0 auto 15px auto" fontSize="40px" lineHeight="170px">
                            30 Lakh+
                        </Circle>
                        <Text fontSize="22px">Customers Connected Monthly</Text>
                    </Box>
                    <Box>
                        <Circle size="170px" bg='white' color='#fd3752' border="2px solid #fd3752" m="0 auto 15px auto" fontSize="40px" lineHeight="170px">
                            2 Lakh+
                        </Circle>
                        <Text fontSize="22px">New Listings Monthly</Text>
                    </Box>
                </Flex>
            </Box>


            <Box className={style.reviewBox}>
                <Text align="center" fontSize="32px">Our Customers Loves us</Text>
                <Box textAlign="center" m="30px 0">
                    <iframe src="https://www.youtube.com/embed/0ChlgxhXVws" title="nobroekr-testimonial-video" frameBorder="0" allow="encrypted-media" allowFullScreen=""></iframe>
                </Box>
                <OurCoustomerReview />
                <Text align="center" textDecoration="underline"><a href="/testimonials/" target="_blank" rel="noreferrer">More Testimonials</a></Text>
            </Box>

            <Flex className={style.mobileIconBox}>
                <Box>
                    <Image src={mobile} alt="mobile" />
                </Box>
                <Box ml="120px">
                    <Text fontSize="32px" fontWeight="400" color="#fd3752">Find A New Home On The Go</Text>
                    <Box m="30px 0">
                        <Text fontSize="22px">Download our app</Text>
                        <Text fontSize="18px" fontWeight="300">Where convenience is at your fingertip</Text>
                    </Box>
                    <Flex>
                        <Text m="35px 20px 35px 0">
                            <a href="https://www.nobroker.in/app?type=Android" target="_blank" rel="noreferrer">
                                <Image src={playStore} alt="playStore" h="55px !important" w="220px" />
                            </a>
                        </Text>
                        <Text m="28px 0">
                            <a href="https://apps.apple.com/nz/app/nobroker-house-for-rent/id1200507100?referrer=utm_source%3Dnobroker&utm_medium=website" target="_blank" rel="noreferrer">
                                <Image src={appleStore} alt="appleStore" h="70px !important" w="220px" />
                            </a>
                        </Text>
                    </Flex>
                </Box>
            </Flex>

        </Box>
    );
}

export default Homepage;
