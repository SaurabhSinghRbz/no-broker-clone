import React, { Component } from "react";
import Slider from "react-slick";
import {
    Container,
    Image,
    Text,
    Box,
    Heading,
} from '@chakra-ui/react';
import style from "../rent.module.css";


export default function Testimonoals() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 9000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <Box w="100%">
            <Container textAlign="center">
                <Heading m="0" p="40px" fontSize={30}>NoBroker Packers and Movers Reviews</Heading>
                <Text m="0" pb="20px" >Testimonials from our NoBroker Pay customers</Text>
            </Container>
            <Slider {...settings} className={style.testimonoals} >
                <Container m="0" p="15px" ml="30px">
                    <Text color="blue">--</Text>
                    <Text fontSize="sm">
                        "NoBroker Pay has helped me immensely to manage my finances better. Now I am able to earn vouchers worth approximately 30K using my Amex Platinum Travel card. You need to choose your credit card carefully to get the maximum benefit." →
                    </Text>
                    <Box display="flex" p="15px" alignItems="center">
                        <Image borderRadius="25px" h="20px" w="20px" src="https://assets.nobroker.in/nb-new/public/RentoPay/testimonial_arjun_img.png" />
                        <Text p="5px" fontSize="sm">Arjun Tendulkar</Text>
                    </Box>
                </Container>
                <Container ml="30px">
                    <Text color="blue">--</Text>
                    <Text fontSize="sm">
                        "I think I am one of the first customers of NoBroker Pay. I feel financially secure paying my rent through credit card. I invest in mutual funds every month and now I have extra cash of 24000 (my house rent) which I can invest because of the 50 day interest free period provided by my credit card."
                    </Text>
                    <Box display="flex" p="15px" alignItems="center">
                        <Image borderRadius="25px" h="20px" w="20px" src="https://assets.nobroker.in/nb-new/public/RentoPay/testimonial_kartik.jpg" />
                        <Text p="5px" fontSize="sm">Karthik Kulkarni</Text>
                    </Box>
                </Container>
                <Container ml="30px">
                    <Text color="blue">--</Text>
                    <Text fontSize="sm">
                        "I am really excited about using NoBroker Pay. I had paid my house rent through my credit card. The entire process is so seamless. My landlord too got an instant notification.
                        Though NoBroker people claim they will crea → the amount within 48 hours, mine got credited in under 7 hours."
                    </Text>
                    <Box display="flex" p="15px" alignItems="center">
                        <Image borderRadius="25px" h="20px" w="20px" src="https://assets.nobroker.in/nb-new/public/RentoPay/testimonial_jyothi_img.jpg" />
                        <Text p="5px" fontSize="sm">Jyothi Dave</Text>
                    </Box>
                </Container>
                <Container ml="30px" >
                    <Text color="blue">--</Text>
                    <Text fontSize="sm">
                        "I think I am one of the first customers of NoBroker Pay. I feel financially secure paying my rent through credit card. I invest in mutual funds every month and now I have extra cash of 24000 (my house rent) which I can invest because of the 50 day interest free period provided by my credit card."
                    </Text>
                    <Box display="flex" p="15px" alignItems="center">
                        <Image borderRadius="25px" h="20px" w="20px" src="https://assets.nobroker.in/nb-new/public/RentoPay/testimonial_kartik.jpg" />
                        <Text p="5px" fontSize="sm">Akash Jadhav</Text>
                    </Box>
                </Container>
            </Slider>
        </Box>
    );
}


