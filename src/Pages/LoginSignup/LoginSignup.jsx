import React from 'react'
import style from "./LoginSignup.module.css"
import { Box, Text, Flex, Image, List, ListItem, ListIcon, CloseButton } from "@chakra-ui/react"
import { BsCheck } from "react-icons/bs"
import signupHome from "../../Images/Login/signupHome.png"
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginSignupReq } from '../../Redux/LoginSignup/action'


function LoginSignup() {
    const { loginReq } = useSelector((state) => state)
    if (loginReq) {
        document.querySelector("body").style.overflow = "hidden"
    } else {
        document.querySelector("body").style.overflow = "auto"
    }
    const [show, setShow] = React.useState(true)

    const dispatch = useDispatch()


    React.useEffect(() => {
        dispatch(loginSignupReq(true))
    }, [])


    if (!show) {
        dispatch(loginSignupReq(false))
        return <Navigate to='/' />
    }
    return show && (
        <Box className={style.loginSignupContainer}>
            <Box>

            </Box>
            <Box>
                <Box h="100%" position="relative">
                    <Box>
                        <CloseButton
                            alignSelf='flex-start'
                            position='absolute'
                            right={0}
                            top={0}
                            onClick={() => setShow(false)}
                        />
                    </Box>

                    <Flex flexDirection="row" w="100%" h="100%">
                        <Flex className={style.loginLeftBox}>
                            <Box ml="10%" alignSelf="flex-start">
                                <Image src={signupHome} alt="home" h="100px" w="100px" minH="84px" />
                            </Box>
                            <Box mt="10px" maxW="80%" w="80%">
                                <Text fontWeight="600" fontSize="18px" mb="8px">Login/Sign up</Text>
                                <List spacing={3}>
                                    <ListItem>
                                        <ListIcon as={BsCheck} color='green.500' />
                                        Zero Brokerage.
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={BsCheck} color='green.500' />
                                        Thousands of new listings daily.
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={BsCheck} color='green.500' />
                                        100 Cr+ Brokerage saved monthly.
                                    </ListItem>
                                </List>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}

export default LoginSignup