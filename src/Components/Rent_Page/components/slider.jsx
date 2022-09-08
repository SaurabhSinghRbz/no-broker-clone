import React, { Component } from "react";
import styled from "../rent.module.css";
import Slider from "react-slick";
import {
  Image,
  Text,
  Button,
  Container,
  Box,
} from '@chakra-ui/react'


export default function Sliders()  {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  return (
    <div>
      <Box p="20px"   color="#000">
      <Slider {...settings} className={styled.center} >
        <Container>
            <Box display="flex">
              <Image src="https://assets.nobroker.in/nb-new/public/RentoPay/home.svg"/>
            </Box>
            <Text fontSize="13px">House Rent</Text>
        </Container>
        <Container>
            <Box display="flex">
              <Image src="https://assets.nobroker.in/nb-new/public/RentoPay/school.svg"/>
            </Box>
            <Text fontSize="13px">School/College Fees</Text>
        </Container>
        <Container>
            <Box display="flex">
              <Image src="https://assets.nobroker.in/nb-new/public/RentoPay/tuition.svg"/>
            </Box>
            <Text fontSize="13px">Tuition Fess</Text>
        </Container>
        <Container>
            <Box display="flex">
              <Image src="https://assets.nobroker.in/nb-new/public/RentoPay/maintenance.svg"/>
            </Box>
            <Text fontSize="13px">Society Maintenance</Text>
        </Container>
        <Container>
            <Box display="flex">
              <Image src="https://assets.nobroker.in/nb-new/public/RentoPay/office.svg"/>
            </Box>
            <Text fontSize="13px">Office/Shop Rent</Text>
        </Container>
        <Container>
            <Box display="flex">
              <Image src="https://assets.nobroker.in/nb-new/public/RentoPay/token.svg"/>
            </Box>
            <Text fontSize="13px">Property Token</Text>
        </Container>
        <Container>
            <Box display="flex">
              <Image src="https://assets.nobroker.in/nb-new/public/RentoPay/deposit.svg"/>
            </Box>
            <Text fontSize="13px">Property Deposit</Text>
        </Container>
      </Slider>
      </Box>
    </div>
  );
}

    
