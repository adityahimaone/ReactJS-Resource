import React, { useState } from 'react';
import styled from 'styled-components';

interface IProps {
  slides: {
    url: string;
    title: string;
  }[];
}

export default function ImageSlider({ slides }: IProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const Slide = styled.div`
    width: 500px;
    height: 250px;
    background-position: center;
    background-size: cover;
    background-image: url(${slides[currentIndex].url});
    border-radius: 8px;
  `;

  const Slider = styled.div`
    height: 100%;
    position: relative;
  `;

  const LeftArrow = styled.div`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    color: #fff;
    z-index: 1;
    cursor: pointer;
  `;

  const RightArrow = styled.div`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    color: #fff;
    z-index: 1;
    cursor: pointer;
  `;

  const ContainerDots = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0;
  `;

  const Dots = styled.div`
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
    margin: 0 5px;
  `;

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => () => {
    setCurrentIndex(index);
  };

  return (
    <Slider>
      <LeftArrow onClick={goToPrevious}>«</LeftArrow>
      <RightArrow onClick={goToNext}>»</RightArrow>
      <Slide />
      <ContainerDots>
        {slides.map((slide, idx) => (
          <Dots key={slide.title} onClick={goToSlide(idx)}>
            {idx === currentIndex ? '◉' : '○'}
          </Dots>
        ))}
      </ContainerDots>
    </Slider>
  );
}
