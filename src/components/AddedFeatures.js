import React from "react";

import AddedFeature from "./AddedFeature";

import { connect } from "react-redux";
import { removeFeature } from "../actions/actions";

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature 
              removeFeature={props.removeFeature} 
              key={item.id} 
              feature={item} />
          ))}
        </ol>
      ) : (
        <p>Added items will show up here.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  };
};

export default connect(
  mapStateToProps,
  { removeFeature }
)(AddedFeatures);
