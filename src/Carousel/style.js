import styled from "styled-components";

const Style = styled.div`
	margin-right: auto;
	margin-left: auto;
	width: 100%;

	.carousel__wrap {
	  position: relative;
	}

	.carousel__viewport {
	  width: 100%;
	  overflow: hidden;
	}

	.carousel__viewport.is-draggable {
	  cursor: move;
	  cursor: grab;
	}

	.carousel__viewport.is-dragging {
	  cursor: grabbing;
	}

	.carousel__container {
	  display: flex;
	}

	.carousel__item {
	  position: relative;
	  flex: 0 0 80%;
	}



`

export default Style;