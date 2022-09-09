import React from "react";
import style from "./LoginSignup.module.css";
import {
    Box,
    Text,
    Flex,
    Image,
    List,
    ListItem,
    ListIcon,
    CloseButton,
    InputGroup,
    InputLeftAddon,
    Input,
    Switch,
    Button,
    Stack,
} from "@chakra-ui/react";
import { BsCheck } from "react-icons/bs";
import signupHome from "../../Images/Login/signupHome.png";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAUser, isUserLogged, loginSignupReq } from "../../Redux/LoginSignup/action";
import whatsappIcon from "../../Images/Login/whatsappIcon.png";




const initialFromData = {
    name: "",
    phone: "",
    email: ""
};



function Signup() {
    const [formData, setFormData] = React.useState(initialFromData);
    const [show, setShow] = React.useState(true);

    const dispatch = useDispatch();


    const { name, phone, email } = formData;




    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (formData) => {
        dispatch(addAUser(formData))
        dispatch(isUserLogged(true))
        fetch("http://localhost:8080/registerdUser", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => setShow(false))
    };

    // const loginReq = useSelector((state) => state.loginReq);
    // if (loginReq) {
    //     document.querySelector("body").style.overflow = "hidden";
    // } else {
    //     document.querySelector("body").style.overflow = "auto";
    // }


    React.useEffect(() => {
        dispatch(loginSignupReq(true));
    }, []);

    if (!show) {
        dispatch(loginSignupReq(false));
        return <Navigate to="/" />;
    }



    return (
        show && (
            <Box className={style.loginSignupContainer}>
                <Box></Box>
                <Box>
                    <Box h="100%" position="relative">
                        <Box>
                            <CloseButton
                                alignSelf="flex-start"
                                position="absolute"
                                right={0}
                                top={0}
                                onClick={() => setShow(false)}
                            />
                        </Box>

                        <Flex flexDirection="row" w="100%" h="100%">
                            <Flex className={style.loginLeftBox}>
                                <Box ml="10%" alignSelf="flex-start">
                                    <Image
                                        src={signupHome}
                                        alt="home"
                                        h="100px"
                                        w="100px"
                                        minH="84px"
                                    />
                                </Box>
                                <Box mt="10px" maxW="80%" w="80%">
                                    <Text fontWeight="600" fontSize="18px" mb="8px">
                                        Sign Up
                                    </Text>
                                    <List spacing={3}>
                                        <ListItem>
                                            <ListIcon as={BsCheck} color="green.500" />
                                            Zero Brokerage.
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={BsCheck} color="green.500" />
                                            Thousands of new listings daily.
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={BsCheck} color="green.500" />
                                            100 Cr+ Brokerage saved monthly.
                                        </ListItem>
                                    </List>
                                </Box>
                            </Flex>
                            <Box className={style.loginRightBox}>
                                <Box className={style.loginFormContainer}>
                                    <Text>Enter phone to continue</Text>
                                    <Box>
                                        <Box>
                                            <InputGroup className={style.mobileInput}>
                                                <InputLeftAddon
                                                    children="+91"
                                                    background="transparent"
                                                />
                                                <Input
                                                    type="tel"
                                                    name="phone"
                                                    value={phone}
                                                    onChange={handleChange}
                                                    placeholder="Enter Mobile Number"
                                                    fontSize="14px"
                                                    maxlength="10"
                                                />
                                            </InputGroup>
                                        </Box>
                                        <Flex className={style.whatsappAlert}>
                                            <Flex alignItems="center" fontSize="14px">
                                                <Text>Get updates on </Text>
                                                <Image
                                                    src={whatsappIcon}
                                                    alt="whatsapp"
                                                    h="24px"
                                                    w="24px"
                                                />
                                                <Text> Whatsapp</Text>
                                            </Flex>
                                            <Box>
                                                <Switch size="md" colorScheme="green" />
                                            </Box>
                                        </Flex>
                                    </Box>

                                    <Stack mt="20px" spacing={3}>
                                        <Input
                                            type="text"
                                            variant="outline"
                                            placeholder="Name"
                                            name="name"
                                            value={name}
                                            onChange={handleChange}
                                            className={style.nameAndEmail}
                                        />
                                        <Input
                                            type="email"
                                            variant="outline"
                                            placeholder="Enter your email like name@gmail.com"
                                            name="email"
                                            value={email}
                                            onChange={handleChange}
                                            className={style.nameAndEmail}
                                        />
                                    </Stack>

                                    <Button className={style.loginButton} onClick={() => handleSubmit(formData)}>
                                        Continue
                                    </Button>
                                    <Text fontSize="12px !important" align="center" mt="5px">
                                        Already have an account?{" "}
                                        <Link to="/login">
                                            <Text color="blue !important" display="inline">
                                                Sign In
                                            </Text>
                                        </Link>
                                    </Text>
                                </Box>
                                <Text className={style.loginFooter}>
                                    By continuing, you agree to our{" "}
                                    <a
                                        href="https://www.nobroker.in/terms-and-condition"
                                        target="_blank"
                                    >
                                        Terms & Conditions
                                    </a>
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        )
    );
}

export default Signup;
