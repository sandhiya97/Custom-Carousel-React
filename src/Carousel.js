import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpeg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpeg';
import img8 from './images/img8.jpg';

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  margin: auto;
  overflow: hidden;

  @media (min-width: 750px) {
    max-width: 750px;
  }
`;

const CarouselInner = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
`;

const CarouselItem = styled.div`
  min-width: 100%;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
  &:focus {
    outline: none;
  }
`;

const PrevButton = styled(Button)`
  left: 10px;
`;

const NextButton = styled(Button)`
  right: 10px;
`;

const imagesLoggedOut = [img1, img2, img3, img4];
const imagesLoggedIn = [img5, img6, img7, img8];

const Carousel = ({ isLoggedIn }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const images = isLoggedIn ? imagesLoggedIn : imagesLoggedOut;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <CarouselWrapper>
      <CarouselInner currentIndex={currentIndex} ref={carouselRef}>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image src={image} alt={`Slide ${index + 1}`} />
          </CarouselItem>
        ))}
      </CarouselInner>
      <PrevButton onClick={prevSlide}>❮</PrevButton>
      <NextButton onClick={nextSlide}>❯</NextButton>
    </CarouselWrapper>
  );
};

export default Carousel;
