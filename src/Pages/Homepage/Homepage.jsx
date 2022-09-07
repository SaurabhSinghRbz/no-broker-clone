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
} from "@chakra-ui/react";
import { Link as chakraLink } from "@chakra-ui/react";
import nIcon from "../../Images/Homepage/nIcon.png";
import { Link, Route, Routes } from "react-router-dom";
import BuyOption from "./BuyOption";
import RentOption from "./RentOption";
import CommercialOption from "./CommercialOption";
import savings from "../../Images/Homepage/savings.png";

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
                            w={"200px"}
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
                m="30px 0"
                gap={2}
                fontSize="14px"
            >
                <Image src={savings} alt="savings" />
                <Text>
                    Do you know how much <Text as="b">loan</Text> you can get? Get maximum
                    with <Text as="b">NoBroker</Text>
                </Text>
                {/* <Link href="https://www.nobroker.in/prophub/home-loan/check-eligibility/?nbFr=HOME-BANNER-BUY&utm_medium=homepage&utm_source=desktopBanner"> */}
                <a href="https://www.nobroker.in/prophub/home-loan/check-eligibility/?nbFr=HOME-BANNER-BUY&utm_medium=homepage&utm_source=desktopBanner" target="_blank">
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
                {/* </Link> */}
            </Flex>
        </Box>
    );
}

export default Homepage;
