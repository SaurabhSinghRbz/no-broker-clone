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
        </Box>
    );
}

export default FooterOptions;
