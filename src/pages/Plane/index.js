import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import styled from 'styled-components';

const UIPanel = styled.div.attrs({
  className: 'ui-panel',
})`
  background-color: #f5f5f5;
`;

export class Plane extends Component {
  render() {
    return (
      <UIPanel>
        <Card />
      </UIPanel>
    );
  }
}

const mapStateToProps = state => ({
  planes: state.planes,
});

export default connect(mapStateToProps)(Plane);
