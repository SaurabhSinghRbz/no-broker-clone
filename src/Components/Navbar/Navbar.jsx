import React from "react";
import {
    Box,
    Flex,
    Text,
    Menu,
    MenuButton,
    IconButton,
    MenuList,
    MenuItem,
    Avatar,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";
import style from "./NavBar.module.css";
import logo from "../../Images/navbar/logo.png";
import { Link } from "react-router-dom";
import myBooking from "../../Images/navbar/myBookings.svg";
import payRent from "../../Images/navbar/payrent.png";
import { useDispatch, useSelector } from "react-redux";
import { isUserLogged } from "../../Redux/LoginSignup/action";

function Navbar() {
    const isUserLoggedIn = useSelector((state) => state.isUserLoggedIn);
    const dispatch = useDispatch()
    return (
        <Flex className={style.navBarContainer}>
            <Box>
                <Link to="/">
                    <Image src={logo} alt="Dan Abramov" className={style.logo} />
                </Link>
            </Box>
            <Flex gap={5}>
                <Link to="/">
                    <Flex className={style.payRent}>
                        <Image src={myBooking} /> My Bookings
                    </Flex>
                </Link>
                <Link to="/payrent/houserent">
                    <Flex className={style.payRent}>
                        <Image src={payRent} /> Pay Rent
                    </Flex>
                </Link>
                <Link to="/">
                    <Flex
                        className={style.payRent}
                        bgColor="#009587"
                        color="white"
                        borderRadius="4px"
                    >
                        For Property owners
                    </Flex>
                </Link>
                {!isUserLoggedIn ? (
                    <Flex alignItems="center">
                        <Link to="/signup">
                            <Text className={style.loginSingUp}>Sign Up</Text>
                        </Link>
                        <Link to="/login">
                            <Text className={style.loginSingUp}>Log In</Text>
                        </Link>
                    </Flex>
                ) : (
                    <Flex p="0px" alignItems="center" gap={1}>
                        {/* <Box p="2px" border="1px solid #ddd" borderRadius="50%"><Avatar h="25px" w="25px" p="0" m="0" /></Box>
                        <Text align="center" verticalAlign="middle" fontSize="14px">Saurabh Singh</Text> */}
                        <Box className={style.userDetailBox} p="0px 2px">
                            <Menu >
                                <Box p="2px" border="1px solid #ddd" borderRadius="50%" mr="2px"><Avatar h="25px" w="25px" p="0" ml="0" /></Box>
                                <Text fontSize="14px !important" mr="-20px !important">Saurabh Singh</Text>
                                <MenuButton
                                    as={IconButton}
                                    aria-label="Options"
                                    variant="link"
                                    fontSize="20px !important"
                                    rightIcon={<ChevronDownIcon />}
                                />

                                <MenuList className={style.userDetailOptionBox}>
                                    <MenuItem>
                                        <Link to="/">Profile</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="/">My Chats</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="/">My Support Chats</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="/">My Residential Plan</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="/">My Commercial Plan</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="/">My Dashboard</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="/">My Listing</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="/">My Rental Agreements</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="/" onClick={() => dispatch(isUserLogged(false))}>Sign Out</Link>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Flex>
                )}
                <Box className={style.menuBox}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label="Options"
                            icon={<HamburgerIcon />}
                            variant="link"
                            minW="fit-content !important"
                            p="0 2px 0 0"
                        />
                        Menu
                        <MenuList className={style.menuOptionBox}>
                            <MenuItem>
                                <Link to="/">Post Your Property</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">Rental Agreement</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">Painting & Cleaning</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">Refer & Earn</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">Rent Receipts</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">Tenant Plans</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">Owner Plans</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">Buyer Plans</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">Seller Plans</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">Commercial Plans</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">Careers</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">Corporate Enquiry</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">Blog</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">Contact Us</Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
        </Flex >
    );
}

export default Navbar;
