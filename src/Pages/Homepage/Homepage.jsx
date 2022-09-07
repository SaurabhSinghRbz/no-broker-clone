import React from 'react'
import style from "./Homepage.module.css"

import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react"
import nIcon from "../../Images/Homepage/nIcon.png"



function Homepage() {
    const [selectedOpt, setSelectedOpt] = React.useState("Buy")
    return (
        <Box className={style.homepageContainer}>
            <Text className={style.homeTitle}>World's Largest NoBrokerage Property Site</Text>
            <Box w="fit-content" m="auto">
                <Flex className={style.nIcon}>
                    <Image src={nIcon} />
                    <Text >Pay rent with Credit Card!</Text>
                </Flex>
            </Box>
            <Grid className={style.buyRent}>
                <Box onClick={() => setSelectedOpt("Buy")} style={selectedOpt == "Buy" ? { borderBottom: "3px solid #fd3752", color: "#fd3752" } : { borderBottom: "0px solid" }}>Buy</Box>
                <Box onClick={() => setSelectedOpt("Rent")} style={selectedOpt == "Rent" ? { borderBottom: "3px solid #fd3752", color: "#fd3752" } : { borderBottom: "0px solid" }}>Rent</Box>
                <Box onClick={() => setSelectedOpt("Commercial")} style={selectedOpt == "Commercial" ? { borderBottom: "3px solid #fd3752", color: "#fd3752" } : { borderBottom: "0px solid" }}>Commercial</Box>
            </Grid>
        </Box>
    )
}

export default Homepage