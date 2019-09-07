import React from 'react';
import LocationInput from '../LocationSearchInput';
import './commonHomeWrapper.scss';
import Slider from '@material-ui/core/Slider'

export default class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="commonHomeWrapper">
        <div className="searchBox">
          <LocationInput placeholder="Office Location Of Person 1" />
          <Slider
            defaultValue={50}
            classes={{
              root:"commonSlider"
            }}
            aria-labelledby="discrete-slider-custom"
            valueLabelDisplay="auto"
          />
          <LocationInput placeholder="Office Location Of Person 2" />
        </div>
      </div>
    )
  }
}