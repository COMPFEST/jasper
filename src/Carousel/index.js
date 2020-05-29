import React from 'react';
import PropTypes from "prop-types";
import EmblaCarouselReact from 'embla-carousel-react';
import CarouselCSS from './style';

const Carousel = props => {
	var draggable;
	try{
		draggable = window.innerWidth < 768;
	} catch(e){
		draggable = false;
	}

    return (
        <CarouselCSS>	
			<div className="carousel__wrap">
				<EmblaCarouselReact
		          className="carousel__viewport"
		          options={{ align: "start", draggable: draggable }}
		          htmlTagName="div"
		        >
					<div className="carousel__container">	
						{props.children.map((Child, index)=> (
							<div className="carousel__item" key={index}>	
									{Child}
							</div>
						))}
					</div>
		        </EmblaCarouselReact>
			</div>
        </CarouselCSS>
    )
}

export default Carousel;