import styled from 'styled-components'

export const CarouselStyle = styled.div`
  position: relative;
  .testimony_carousel__viewport {
    width: 100%;
    overflow: hidden;
  }
  
  .testimony_carousel__viewport.is-draggable {
    cursor: move;
    cursor: grab;
  }
  
  .testimony_carousel__viewport.is-dragging {
    cursor: grabbing;
  }  
`

export const NavButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 30px;
    height: 75px;
  }
`
export const NavigateButton = styled.div`
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
      height:0px;
    }

    &.next-dept, .prev-dept {
      right: auto;
      transform:initial;
      img{
        width:100%;height:100%;
      }
    }
  }
`

export const DotButton = styled.div`
  cursor: pointer;
  width: 12px;
  height: 12px;
  margin: 0 4px;
  border-radius: 6px;
  background-color: #530330;
  transition: background-color 0.3s, width 0.3s;
  ${props => (props.selected ? `width: 32px; background-color: #A70660;` : ``)}
`

export default {
  CarouselStyle,
  NavButtonContainer,
  NavigateButton,
  DotButton
}
