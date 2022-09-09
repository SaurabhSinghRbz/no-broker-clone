import React from 'react'
import { Box, Flex, Text, Menu, MenuButton, IconButton, MenuList, MenuItem } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import { Image } from '@chakra-ui/react'
import style from "./NavBar.module.css"
import logo from "../../Images/navbar/logo.png"
import { Link } from "react-router-dom"
import myBooking from "../../Images/navbar/myBookings.svg"
import payRent from "../../Images/navbar/payrent.png"

function Navbar() {
    return (
        <Flex className={style.navBarContainer}>
            <Box>
                <Link to="/"><Image src={logo} alt='Dan Abramov' className={style.logo} /></Link>
            </Box>
            <Flex gap={5}>
                <Link to="/">
                    <Flex className={style.payRent}><Image src={myBooking} /> My Bookings</Flex>
                </Link>
                <Link to="/payrent">
                    <Flex className={style.payRent}><Image src={payRent} /> Pay Rent</Flex>
                </Link>
                <Link to="/">
                    <Flex className={style.payRent} bgColor="#009587" color="white" borderRadius="4px">For Property owners</Flex>
                </Link>
                <Flex alignItems="center">
                    <Link to="/signup"><Text className={style.loginSingUp} >Sign Up</Text></Link>
                    <Link to="/login"><Text className={style.loginSingUp} >Log In</Text></Link>
                </Flex>
                <Box className={style.menuBox}>
                    <Menu >
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='link'
                            minW="fit-content !important"
                            p="0 2px 0 0"
                        />Menu
                        <MenuList className={style.menuOptionBox}>
                            <MenuItem><Link to="/">Post Your Property</Link></MenuItem>
                            <MenuItem><Link to="/">Rental Agreement</Link></MenuItem>
                            <MenuItem><Link to="/">Painting & Cleaning</Link></MenuItem>
                            <MenuItem><Link to="/">Refer & Earn</Link></MenuItem>
                            <MenuItem><Link to="/">Rent Receipts</Link></MenuItem>
                            <MenuItem><Link to="/">Tenant Plans</Link></MenuItem>
                            <MenuItem><Link to="/">Owner Plans</Link></MenuItem>
                            <MenuItem><Link to="/">Buyer Plans</Link></MenuItem>
                            <MenuItem><Link to="/">Seller Plans</Link></MenuItem>
                            <MenuItem><Link to="/">Commercial Plans</Link></MenuItem>
                            <MenuItem><Link to="/">Careers</Link></MenuItem>
                            <MenuItem><Link to="/">Corporate Enquiry</Link></MenuItem>
                            <MenuItem><Link to="/">Blog</Link></MenuItem>
                            <MenuItem><Link to="/">Contact Us</Link></MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Navbar