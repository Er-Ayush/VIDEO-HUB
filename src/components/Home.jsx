import React from 'react'
import { Text } from '@chakra-ui/react';
import { Box, Container, Heading, Img, Stack } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"

const headingOptions = {
    pos: 'absolute',
    left: '20%',
    top: '50%',
    trasform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
}

const Home = () => {
    return (
        <Box>
            <MyCarousel />
            <Container minH={'100vh'} maxW={'container.xl'} p="16">
                <Heading textTransform={'uppercase'} w={'fit-content'} borderBottom={'2px Solid'} py={'2'} m={'auto'}>Services</Heading>
                <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column','row']}>
                    <Img src={img5} h={['40','400']}/>
                    <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam accusamus itaque alias aliquid, eos optio labore voluptas quis consequuntur, obcaecati, explicabo quae atque adipisci corrupti assumenda nostrum qui! Ducimus corporis vitae praesentium quos nostrum voluptates necessitatibus, quaerat ipsa iusto qui ut, blanditiis voluptatum doloremque, autem nihil quod! Consequatur eligendi delectus
                    </Text>
                </Stack>

            </Container>
        </Box>
    )
}

const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w='full' h={'100vh'}>
            <Img src={img1} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Hello everyone</Heading>
        </Box>
        <Box w='full' h={'100vh'}>
            <Img src={img2} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Hello everyone</Heading>
        </Box>
        <Box w='full' h={'100vh'}>
            <Img src={img3} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Hello everyone</Heading>
        </Box>
        <Box w='full' h={'100vh'}>
            <Img src={img4} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Hello everyone</Heading>
        </Box>
        <Box w='full' h={'100vh'}>
            <Img src={img5} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Hello everyone</Heading>
        </Box>
    </Carousel>
);

export default Home
