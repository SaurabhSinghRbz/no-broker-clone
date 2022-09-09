import React, { Component } from "react";
import styled from "../rent.module.css";
import Slider from "react-slick";
import { Link } from "react-router-dom"
import {
  Image,
  Text,
  Button,
  Container,
  Box,
} from '@chakra-ui/react'


export default function Sliders() {
  const [selectedBg, setSelectedBg] = React.useState(1);
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
      <Box p="20px" >
        <Slider {...settings} className={styled.Sliderfirst}  >

          <Link to="/payrent/houserent" className={styled.link}>
            <Box display="flex">
              <Image className={styled.sliderImg} src="https://assets.nobroker.in/nb-new/public/RentoPay/home.svg" />
            </Box>
            <Text fontSize="13px" onClick={() => setSelectedBg(1)} style={selectedBg === 1 ? { borderBottom: "3px solid blue" } : {}}>House Rent</Text>

          </Link>

          <Link to="/payrent/schoolfees" className={styled.link} >
            <Box display="flex">
              <Image className={styled.sliderImg} src="https://assets.nobroker.in/nb-new/public/RentoPay/school.svg" />
            </Box>
            <Text fontSize="13px" onClick={() => setSelectedBg(2)} style={selectedBg === 2 ? { borderBottom: "3px solid blue" } : {}}>School/College Fees</Text>

          </Link>
          <Link to="/payrent/tuitionfees" className={styled.link}>
            <Box display="flex">
              <Image className={styled.sliderImg} src="https://assets.nobroker.in/nb-new/public/RentoPay/tuition.svg" />
            </Box>
            <Text fontSize="13px" onClick={() => setSelectedBg(3)} style={selectedBg === 3 ? { borderBottom: "3px solid blue" } : {}}>Tuition Fess</Text>
          </Link>
          <Link to="/payrent/societymaintenance" className={styled.link}>
            <Box display="flex">
              <Image className={styled.sliderImg} src="https://assets.nobroker.in/nb-new/public/RentoPay/maintenance.svg" />
            </Box>
            <Text fontSize="13px" onClick={() => setSelectedBg(4)} style={selectedBg === 4 ? { borderBottom: "3px solid blue" } : {}}>Society Maintenance</Text>
          </Link>
          <Link to="/payrent/shoprent" className={styled.link}>
            <Box display="flex">
              <Image className={styled.sliderImg} src="https://assets.nobroker.in/nb-new/public/RentoPay/office.svg" />
            </Box>
            <Text fontSize="13px" onClick={() => setSelectedBg(7)} style={selectedBg === 7 ? { borderBottom: "3px solid blue" } : {}}>Office/Shop Rent</Text>
          </Link>
          <Link to="/payrent/property" className={styled.link}>
            <Box display="flex">
              <Image className={styled.sliderImg} src="https://assets.nobroker.in/nb-new/public/RentoPay/token.svg" />
            </Box>
            <Text fontSize="13px" onClick={() => setSelectedBg(5)} style={selectedBg === 5 ? { borderBottom: "3px solid blue" } : {}}>Property Token</Text>
          </Link>
          <Link to="/payrent/deposite" className={styled.link} >
            <Box display="flex" >
              <Image className={styled.sliderImg} src="https://assets.nobroker.in/nb-new/public/RentoPay/deposit.svg" />
            </Box>
            <Text fontSize="13px" onClick={() => setSelectedBg(6)} style={selectedBg === 6 ? { borderBottom: "3px solid blue" } : {}}>Property Deposit</Text>
          </Link>
        </Slider>
      </Box>
    </div>
  );
}


