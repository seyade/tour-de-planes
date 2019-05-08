import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllPlanes } from '../actions';

class Planes extends Component {
  componentDidMount() {
    this.props.fetchAllPlanes();
  }

  render() {
    console.log('COMP::PLANES ', this.props.planes);

    return (
      <div>
        <h4>Planes</h4>

        <ul>
          {this.props.planes.map((plane, index) => {
            return (
              <li key={index}>
                <article>
                  <h3>Model: {plane.planeModelCode}</h3>
                  <p>Range: {plane.specification.range}</p>
                </article>
              </li>
            );
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
