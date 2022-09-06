import React from "react";
import { Flex, Box } from "@chakra-ui/react";
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
    console.log(selectedBg);
    return (
        <Box>
            <Flex className={style.footerOptions}>
                <Box onClick={() => setSelectedBg(1)}>Flats for Sale</Box>
                <Box onClick={() => setSelectedBg(2)}>Flats for Rent</Box>
                <Box onClick={() => setSelectedBg(3)}>PG / Hostels</Box>
                <Box onClick={() => setSelectedBg(4)}>Flatmates</Box>
                <Box onClick={() => setSelectedBg(5)}>Miscellaneous</Box>
                <Box onClick={() => setSelectedBg(6)}>Commercial</Box>
                <Box onClick={() => setSelectedBg(7)}>New Projects</Box>
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
        </Box>
    );
}

export default FooterOptions;
