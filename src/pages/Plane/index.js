import React, { Component } from 'react';
import Card from '../../components/Card';
import styled from 'styled-components';

const UIPanel = styled.div.attrs({
  className: 'ui-panel',
})``;

export class Plane extends Component {
  render() {
    return (
      <UIPanel>
        <Card />
      </UIPanel>
    );
  }
}

export default Plane;
