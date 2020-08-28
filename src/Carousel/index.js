import React, { useState, useCallback, useEffect } from "react"
import EmblaCarouselReact from "embla-carousel-react"
import styled from "styled-components"
import PropTypes from "prop-types"

import next from "./static/carousel_next.svg"
import prev from "./static/carousel_prev.svg"

import "./carousel.css"

const CarouselStyle = styled.div`
  position: relative;
  margin: 50px 0;
`

const NavButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 30px;
    height: 75px;
  }
`
const NavigateButton = styled.div`
  position: absolute;
  top: 50%;
  cursor: pointer;
  transition: transform 0.3s, width 0.3s;

  &.next-dept {
    right: 60px;
    transform: translate(50%, -50%);
    &:not(.enabled) {
      transform: translate(50%, -50%) scale(0.00001);
    }
  }
  &.prev-dept {
    left: 60px;
    transform: translate(-50%, -50%);
    &:not(.enabled) {
      transform: translate(-50%, -50%) scale(0.00001);
    }
  }

  @media (max-width: 1200px) {
    &.next-dept {
      right: 48px;
    }
    &.prev-dept {
      left: 48px;
    }
  }

  @media (max-width: 992px) {
    &.next-dept {
      right: 32px;
    }
    &.prev-dept {
      left: 32px;
    }
  }

  @media (max-width: 768px) {
    top: auto;
    bottom: -150px;
    position: initial;
    width: 75px;
    transform: initial !important;

    &:not(.enabled) {
      width: 0px;
    }

    &.next-dept {
      right: auto;
    }
    &.prev-dept {
      left: auto;
      transform: initial;
    }
  }
`

const DotButton = styled.div`
  cursor: pointer;
  width: 12px;
  height: 12px;
  margin: 0 4px;
  border-radius: 6px;
  background-color: #530330;
  transition: background-color 0.3s, width 0.3s;
  ${props => (props.selected ? `width: 32px; background-color: #A70660;` : ``)}
`

const Carousel = (props) => {
  const { children, prevButton, nextButton } = props
  const [embla, setEmbla] = useState(null)
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(true)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollTo = useCallback(index => embla.scrollTo(index), [embla])
  const scrollPrev = useCallback(() => embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla.scrollNext(), [embla])

  useEffect(() => {
    const onSelect = () => {
      setSelectedIndex(embla.selectedScrollSnap())
      setPrevBtnEnabled(embla.canScrollPrev())
      setNextBtnEnabled(embla.canScrollNext())
    }
    if (embla) {
      setScrollSnaps(embla.scrollSnapList())
      embla.on("select", onSelect)
      onSelect()
    }
  }, [embla])

  return (
    <CarouselStyle>
      <div style={{ position: "relative" }}>
        <EmblaCarouselReact
          className="testimony_carousel__viewport"
          options={{ align: "center", draggable: false }}
          htmlTagName="div"
          emblaRef={setEmbla}
        >
          <div style={{ display: "flex" }}>
            {children.map((child, index) => (
              <div
                style={{ position: "relative", flex: "0 0 100%" }}
                key={index}
              >
                <div style={{ display: "flex", minHeight: "400px", width: "80%", margin: "auto" }}>
                  {child}
                </div>
              </div>
            ))}
          </div>
        </EmblaCarouselReact>
      </div>
      {children.length > 1 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          {scrollSnaps.map((_, index) => (
            <DotButton
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
              key={index}
            />
          ))}
        </div>
      ) : (
        <div />
      )}
      <NavButtonContainer>
        <NavigateButton
          className={`prev-dept ${prevBtnEnabled ? " enabled" : ""}`}
          onClick={scrollPrev}
        >
          {prevButton}
        </NavigateButton>
        <NavigateButton
          className={`next-dept ${nextBtnEnabled ? " enabled" : ""}`}
          onClick={scrollNext}
        >
          {nextButton}
        </NavigateButton>
      </NavButtonContainer>
    </CarouselStyle>
  )
}

Carousel.propTypes = {
  children: PropTypes.array,
  prevButton: PropTypes.node.isRequired,
  nextButton: PropTypes.node.isRequired,
}

export default Carousel
