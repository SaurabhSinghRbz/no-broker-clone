import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import ReviewCard from './ReviewCard';
import { Box } from '@chakra-ui/react';


const coustomersData = [
    {
        name: "Shubham Raibhandar",
        avatarUrl: "https://assets.nobroker.in/images/testimonials/ff80818155da4ee20155dd9b3e161113_2016.08.18.11.41.41.jpg",
        headLine: 'Helps us to find good properties',
        description: "The site really helps us to find good properties in the least amount of time without any headache of brokerage.I was so scared in Pune due to the issues of high deposit as well as brokerage.I was new and had no time.But then I found NoBroker."
    },
    {
        name: "Lisa Das",
        avatarUrl: "https://assets.nobroker.in/images/testimonials/ff8081815185752901518659f9cc12da.jpg",
        headLine: "It's a nice experience",
        description: "It was a nice experience with Nobroker. They helped me to find a new home to stay as it was difficult for me,as an individual,to find a home with friendly roommates.Thankfully Nobroker helped me to get one with all kind of facilities."
    },
    {
        name: "Kishore",
        avatarUrl: "https://assets.nobroker.in/images/testimonials/ff8081815373f3bb01538493929b5e5f_2016.08.18.11.26.15.jpg",
        headLine: 'Found Great Place to Stay via NoBroker',
        description: "NoBroker provides a great place to stay with safe environment. if they show you something about property that is always same as it. No fake pictures."
    },
    {
        name: "Mohamme Kouse",
        avatarUrl: "https://assets.nobroker.in/images/testimonials/ff80818155ac0fe40155af6ca8df1302_2016.10.06.12.05.00.jpg",
        headLine: 'Good App to Earn Money Online !',
        description: "I am Mohamed Kouse. The NoBroker app is very useful for home seekers looking for homes to rent. I have also earned money by using the Click & Earn option. I am so happy to use this app because I got a good house for the right amount."
    },
    {
        name: "Ayan",
        avatarUrl: "https://assets.nobroker.in/images/testimonials/ff8081814dc793fa014dc8d20faf1045_2016.10.06.12.03.04.jpg",
        headLine: 'Click n Earn is Awesome!',
        description: "Wow! I am really amazed. Click n Earn is awesome, I really earn by just clicking pictures of To-Let boards. Even many of my friends are also earning by this. The processing of leads is very fast and me and my friends are very happy. This is a great concept."
    },
    {
        name: "Prabhu Dev",
        avatarUrl: "https://assets.nobroker.in/images/testimonials/ff8081814c2dea94014c452131543574_2016.08.22.20.01.02.jpg",
        headLine: 'Got Genuine and very quick Response',
        description: "I have got a genuine and very quick response from the site. I am very happy with service of NoBroker.com owner plans."
    },
    {
        name: "Balasubramanyam K.c.",
        avatarUrl: "https://assets.nobroker.in/images/testimonials/ff8081814d4b859b014d5268806a2734_2016.08.22.18.28.14.jpg",
        headLine: 'Appreciate Positive and quick responses from RM',
        description: "RMs of NoBroker team, I really would like to appreciate positive and quick responses from you guys . Thank you for excellent service through paid plans of NoBroker.com."
    },
    {
        name: "Taisha",
        avatarUrl: "https://assets.nobroker.in/images/testimonials/ff80818154ce36190154d104805313f0_2016.08.18.18.24.52.jpg",
        headLine: 'Best Option',
        description: "The service was great and very professional. I went with the Relax plan. My RM Sayantan Gupta is really efficient. He noted my requirements quite well and suggested me a list of options. I shortlisted one from them and in just one visit, I was able to finalize."
    },
    {
        name: "Anoop Nair",
        avatarUrl: "https://assets.nobroker.in/images/testimonials/ff80818154f7abca0154fb3dd1232277.jpg",
        headLine: 'Excellent service',
        description: "Excellent service and an equally involved team. I opted for the Relax plan and got a good deal on my property. Highly recommended app."
    }
]



function OurCoustomerReview() {
    return (
        <Box>
            <Swiper
                loop={true}
                grabCursor={true}
                slidesPerView={1}
                spaceBetween={10}
                slidesPerGroup={1}
                loopFillGroupWithBlank={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        slidesPerGroup: 1,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        slidesPerGroup: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        slidesPerGroup: 3,
                    },
                }}
                navigation={{
                    clickable: true,
                }}

                modules={[Navigation]}
                className="mySwiper swiper-container"
            >
                {coustomersData.map((data, idx) => <SwiperSlide
                    className='swiper-slide'>
                    <ReviewCard data={data} ></ReviewCard>
                </SwiperSlide>)}
            </Swiper>
        </Box >
    )
}

export default OurCoustomerReview