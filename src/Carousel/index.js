import React, { useState, useCallback, useEffect } from "react"
import EmblaCarouselReact from "embla-carousel-react"
import PropTypes from "prop-types"

import { CarouselStyle, NavButtonContainer, NavigateButton, DotButton } from "./style"

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
