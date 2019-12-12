import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux';
import { addFeature, removeFeature } from './actions/actions';

const App = (props) => {
  
  const removeFeature = item => {
    props.removeFeature(item);
  };

  const addFeature = item => {
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} addFeature={addFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures addFeature={addFeature} additionalFeatures={props.additionalFeatures} removeFeature={props.removeFeature}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state); 
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    removeFeature: state.removeFeature
  }
}

export default connect(mapStateToProps, {addFeature, removeFeature}) (App);
