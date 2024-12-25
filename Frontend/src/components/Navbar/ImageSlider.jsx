import React, { useState, useEffect } from 'react';
import { Box, Image, Button, Flex,Text } from '@chakra-ui/react';

const Img = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const schoolSlogans = [
    "Empowering Minds, Shaping Futures.",
    "Where Learning is a Journey, Not a Destination.",
    "Inspiring Excellence, Building Leaders.",
    "Knowledge is Power; Education is the Key.",
    "Creating Lifelong Learners, One Step at a Time."
  ];


  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Auto-slide every 1 second
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [images.length, isPaused]);

  return (
    <Flex flexDirection="column" position="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      {/* Display the current image */}
      <Image 
        src={images[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`} 
        w="100vw"
        objectFit="cover" 
        h={{base:"30vh",sm:"full"}}
      />
      

      <Flex w='100vw' justifyContent={'center'} position={'absolute'} top='80%'>
            <Text fontWeight={{base:"400",md:"600"}} borderRadius={'sm'} bg='green.300' p='1'>{schoolSlogans[currentIndex]}</Text>
      </Flex>
      {/* Navigation Buttons */}

      <Flex 
        display={{ base: "none", md: "flex" }} 
        position="absolute" 
        top="50%" 
        w="100vw" 
        px="5%" 
        justifyContent="space-between" 
        transform="translateY(-50%)"
      >
        <Button border={'1px solid white'} style={{borderRadius:"10px 4px 40px 4px"}} color="black" bg="green.300" onClick={handlePrevious}>
          Previous
        </Button>
        <Button px='25px' border={'1px solid white'} style={{borderRadius:"4px 4px 4px 40px"}} color="black" bg="green.300" onClick={handleNext}>
          Next
        </Button>
      </Flex>
    </Flex>
  );
};

// Example usage
const images = [
  "https://patnacarmel.com/carmel-patna-img/carmel-slider03.jpg",
  "https://patnacarmel.com/carmel-patna-img/carmel-slider04.webp",
  "https://patnacarmel.com/carmel-patna-img/carmel-slider02.webp",
  "https://patnacarmel.com/carmel-patna-img/carmel-slider05.jpg",
  "https://patnacarmel.com/carmel-patna-img/carmel-slider06.jpg"
];

export default function ImageSlider() {
  return (
    <Box w="100vw">
      <Img images={images} />
    </Box>
  );
}
