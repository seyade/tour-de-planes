import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UINav = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;

  a {
    margin-right: 16px;
    color: #fff;
    text-decoration: none;
    transition: all 300ms ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const Navigation = () => {
  return (
    <UINav>
      <Link to="/planes">Planes</Link>
      <Link to="/about">About</Link>
      <Link to="/form">Form</Link>
    </UINav>
  );
};

export default Navigation;
