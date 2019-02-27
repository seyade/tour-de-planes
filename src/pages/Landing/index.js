import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Planes from '../Planes';

const UILanding = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Lato', sans-serif;

  .ui-landing {
    &__title {
      font-size: calc(80px - 2vmin);
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
      <h1 className="ui-landing__title">Tour De Planes</h1>
      <h2 className="ui-landing__sub-title">
        A library of commercial planes for plane enthousiasts
      </h2>
      <Link to="/" className="ui-landing__button-link">
        Rotate
      </Link>
    </UILanding>
  );
};

export default Landing;
