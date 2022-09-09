import React, { Component } from "react";
import styled from "../Rent_Page/rent.module.css";
import Slider from "react-slick";
import { Link } from "react-router-dom"
import {
  Image,
  Text,
  Button,
  Box,
  TabList,
  Tab,
  Tabs,
  TabPanel,
  TabPanels,

} from '@chakra-ui/react'
import { Home, School, Society, Office, Token, Propertys} from "./new";






export default function Slides() {
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
  <Box pl="100px" pr="60px" pt="20px" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
    <Tabs>
      {/* <Slider {...settings} className={styled.Sliderfirst}  > */}
        <TabList>
        <Tab  className={styled.link}>
          <Box display="flex">
            <Image className={styled.sliderImg} src="https://assets.nobroker.in/nb-new/public/RentoPay/home.svg"/>
          </Box>
            <Text fontSize="13px" >House Rent</Text>
             
        </Tab>
        
        <Tab className={styled.link} >
          <Box display="flex">
              <Image className={styled.sliderImg} src="https://assets.nobroker.in/nb-new/public/RentoPay/school.svg"/>
          </Box>      
            <Text fontSize="13px" >School/College Fees</Text>
         
        </Tab>
        <Tab  className={styled.link}>
            <Box display="flex">
              <Image className={styled.sliderImg} src="https://assets.nobroker.in/nb-new/public/RentoPay/tuition.svg"/>
            </Box>
            <Text fontSize="13px" >Tuition Fess</Text>
        </Tab>
        <Tab  className={styled.link}>
            <Box display="flex">
              <Image className={styled.sliderImg} src="https://assets.nobroker.in/nb-new/public/RentoPay/maintenance.svg"/>
            </Box>
            <Text fontSize="13px" >Society Maintenance</Text>
        </Tab>
        <Tab className={styled.link}>
            <Box display="flex">
              <Image className={styled.sliderImg} src="https://assets.nobroker.in/nb-new/public/RentoPay/office.svg"/>
            </Box>
            <Text fontSize="13px" >Office/Shop Rent</Text>
        </Tab>
        <Tab className={styled.link}>
            <Box display="flex">
              <Image className={styled.sliderImg} src="https://assets.nobroker.in/nb-new/public/RentoPay/token.svg"/>
            </Box>
            <Text fontSize="13px" >Property Token</Text>
        </Tab>
        <Tab className={styled.link} >
            <Box display="flex" >
              <Image className={styled.sliderImg} src="https://assets.nobroker.in/nb-new/public/RentoPay/deposit.svg"/>
            </Box>
            <Text fontSize="13px" 
            >Property Deposit</Text>
        </Tab>
        </TabList>
      {/* </Slider> */}
        <TabPanels pr="50px" pl="left">
            <TabPanel>
                <Home/>
            </TabPanel>
            <TabPanel>
                <School/>
            </TabPanel>
            <TabPanel>
                <School/>
            </TabPanel>
            <TabPanel >
                <Society/>
            </TabPanel>
            <TabPanel>
                <Office/>
            </TabPanel>
            <TabPanel>
                <Token/>
            </TabPanel>
            <TabPanel>
                <Propertys/>
            </TabPanel>

        </TabPanels>
    </Tabs>
  </Box>

    </div>
  )
}
