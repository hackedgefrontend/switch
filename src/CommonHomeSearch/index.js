import React from 'react';
import LocationInput from '../LocationSearchInput';
import './commonHomeWrapper.scss';

export default class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="commonHomeWrapper">
        <div className="searchBox">
          <LocationInput placeholder="Office Location Of Person 1"/>
          <LocationInput placeholder="Office Location Of Person 2"/>
        </div>
      </div>
    )
  }
}