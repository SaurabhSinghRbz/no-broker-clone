import React, { Component } from "react";
import styled from "../rent.module.css";
import Slider from "react-slick";
import { Link } from "react-router-dom"
import { Yourinput, Studentinput  } from './Input'
import {
  Image,
  Text,
  Button,
  Container,
  Box,
  TabList,
  Tab,
  Tabs,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react'


export default function Sliders()  {
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
      {/* <Slider {...settings} className={styled.Sliderfirst}  > */}
    <Tabs>
      <TabList>
        <Tab to="/rent/houserent"  className={styled.link}>
          <Box display="flex">
            <Image className={styled.sliderImg} src="https://assets.nobroker.in/nb-new/public/RentoPay/home.svg"/>
          </Box>
            <Text fontSize="13px">House Rent</Text>
             
        </Tab>
        
        <Tab  className={styled.link} >
          <Box display="flex">
              <Image className={styled.sliderImg} src="https://assets.nobroker.in/nb-new/public/RentoPay/school.svg"/>
          </Box>      
            <Text fontSize="13px" >School/College Fees</Text>
         
        </Tab>
        <Tab  className={styled.link}>
            <Box display="flex">
              <Image className={styled.sliderImg} src="https://assets.nobroker.in/nb-new/public/RentoPay/tuition.svg"/>
            </Box>
            <Text fontSize="13px">Tuition Fess</Text>
        </Tab>
        <Tab  className={styled.link}>
            <Box display="flex">
              <Image className={styled.sliderImg} src="https://assets.nobroker.in/nb-new/public/RentoPay/maintenance.svg"/>
            </Box>
            <Text fontSize="13px" >Society Maintenance</Text>
        </Tab>
        <Tab  className={styled.link}>
            <Box display="flex">
              <Image className={styled.sliderImg} src="https://assets.nobroker.in/nb-new/public/RentoPay/office.svg"/>
            </Box>
            <Text fontSize="13px" >Office/Shop Rent</Text>
        </Tab>
        {/* <Tab  className={styled.link}>
            <Box display="flex">
              <Image className={styled.sliderImg} src="https://assets.nobroker.in/nb-new/public/RentoPay/token.svg"/>
            </Box>
            <Text fontSize="13px" >Property Token</Text>
        </Tab>
        <Tab  className={styled.link} >
            <Box display="flex" >
              <Image className={styled.sliderImg} src="https://assets.nobroker.in/nb-new/public/RentoPay/deposit.svg"/>
            </Box>
            <Text fontSize="13px">Property Deposit</Text>
        </Tab> */}
      </TabList>
      <TabPanels pr="50px" pl="left">
            <TabPanel>
                <Yourinput/>
            </TabPanel>
            <TabPanel>
                <Studentinput/>
            </TabPanel>
            <TabPanel>
                <Studentinput/>
            </TabPanel>
            <TabPanel >
                <Yourinput/>
            </TabPanel>
            <TabPanel>
                <Yourinput/>
            </TabPanel>
            <TabPanel>
                <Yourinput/>
            </TabPanel>
            <TabPanel>
                <Yourinput/>
            </TabPanel>

        </TabPanels>
    </Tabs> 
  </Box>
  </div>
  );
}

    
