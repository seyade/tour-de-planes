import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllPlanes } from '../actions';

class Planes extends Component {
  componentDidMount() {
    this.props.fetchAllPlanes();
  }

  render() {
    return (
      <div>
        <h4>Planes</h4>

        <ul>
          {this.props.planes.map(plane => {
            return <li>{plane.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    planes: state.planes,
  };
};

export default connect(
  mapStateToProps,
  { fetchAllPlanes }
)(Planes);
