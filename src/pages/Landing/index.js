import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Planes from '../Planes';

const UILanding = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  font-family: 'Nunito Santo', sans-serif;
  background-color: #222;

  .ui-landing {
    &__title {
      font-size: calc(80px - 2vmin);
      &-frag {
        display: block;
        font-size: 126px;
      }
    }

    &__button-link {
      color: #fff;
      text-decoration: none;
      transition: all 300ms ease-in-out;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

const Landing = () => {
  return (
    <UILanding>
      <h1 className="ui-landing__title">
        <span className="ui-landing__title-frag">Tour</span>
        <span className="ui-landing__title-frag">de planes</span>
      </h1>
      <h2 className="ui-landing__sub-title">
        A library of commercial planes for plane enthousiasts
      </h2>
      <Link to="/" className="ui-landing__button-link">
        Explore
      </Link>
    </UILanding>
  );
};

export default Landing;
