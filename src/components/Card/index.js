import React from 'react';
import styled, { keyframes } from 'styled-components';
import Airbus350 from '../../assets/images/airbus-350-900.png';

const expandup = keyframes`
  0 {
    opacity: 0;
    height: 5vh;
  }

  100% {
    opacity: 1;
    height: 75vh;
  }
`;

const wobbleside = keyframes`
  0 {
    max-width: 960px;
  }

  50% {
    max-width: 1012px;
  }

  100% {
    max-width: 960px;
  }
`;

const slideup = keyframes`
  0 {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(-35px);
  }
`;

const fadein = keyframes`
  0 {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const UICard = styled.div.attrs({
  className: 'ui-card',
})`
  position: absolute;
  right: 0;
  bottom: 20px;
  left: 0;

  // max-width: 480px;
  width: 800px;
  height: 5vh;
  padding: 32px;
  margin: auto;
  font-family: 'Lato', sans-serif;
  color: #222;
  border-radius: 8px;
  background-color: #fff;
  opacity: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
  transform: translateY(10px);

  animation: ${expandup} 500ms 400ms forwards ease-in-out,
    ${slideup} 500ms 500ms forwards ease-in-out,
    ${wobbleside} 300ms 1100ms forwards ease-in-out;

  transition: all 500ms ease-in-out;

  .ui-card__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    opacity: 0;

    animation: ${fadein} 500ms 1000ms forwards ease-in-out;
  }

  .ui-card__title {
    position: absolute;
    top: 5vh;
    margin: 0;
    font-size: 192px;
    font-weight: 900;
    color: #eaeaea;
    opacity: 0;

    animation: ${fadein} 500ms 1000ms forwards ease-in-out;
  }

  .ui-card__text {
    line-height: 1.4;
  }

  .ui-card__image {
    width: 500px;
  }

  .ui-card__col {
    flex: 1 0 50%;

    &:first-child {
      overflow: hidden;
    }
  }

  .ui-card__action {
    position: absolute;
    bottom: 12px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      color: #444;
      text-decoration: none;
      width: 50px;
      height: 100px;
      border-radius: 50%;
      background-color: #fff;
      opacity: 0;

      animation: ${fadein} 500ms 1500ms forwards ease-in-out;

      &:hover {
        opacity: 0.7;
      }

      &:first-child {
        margin-left: -30px;
      }

      &:last-child {
        margin-right: -30px;
      }
    }
  }
`;

const Card = props => {
  return (
    <UICard>
      <h2 className="ui-card__title">A350</h2>

      <div className="ui-card__content">
        <div className="ui-card__col">
          <h3>Specs</h3>
          <p className="ui-card__text">
            Africa’s aviation sector is bogged down by many headwinds — weak
            infrastructure, poor connectivity, high ticket prices and low
            passenger volumes. Hassan El-Houry, CEO of National Aviation
            Services, a provider of airport and aviation services, and Eric
            Kacou, cofounder of management consulting firm Entrepreneurial
            Solutions Partners, attribute this to various factors such as lack
            of political will, money-losing national carriers monopolizing the
            skies, complex rules and regulations that create high entry
            barriers, and poor safety and quality standards
          </p>
        </div>
        <div className="ui-card__col">
          <img className="ui-card__image" src={Airbus350} />
        </div>
      </div>
    </UICard>
  );
};

export default Card;
