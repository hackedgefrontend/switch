import React from 'react';
import PlacesAutocomplete, {
 geocodeByAddress,
 getLatLng,
} from 'react-places-autocomplete';
import './searchLocationInput.scss';
export default class LocationSearchInput extends React.Component {
 constructor(props) {
   super(props);
   console.log(props.value);
   this.state = { address: props.value || '' };
 }
 handleChange = address => {
   this.setState({ address });
   if (this.props.onChange) {
     this.props.onChange(address)
   }
 };
static getDerivedStateFromProps = (nextProps,prevState)=>{
    if(nextProps.value !== prevState.address){
        return {
            address:nextProps.value
        }
    }
    return prevState;
}
 handleSelect = address => {
   geocodeByAddress(address)
     .then(results => getLatLng(results[0]))
     .then(latLng => console.log('Success', latLng))
     .catch(error => console.error('Error', error));
   this.setState({ address });
   if (this.props.onSelectAddress) {
     this.props.onSelectAddress(address)
   }
 };
 render() {
   return (
     <PlacesAutocomplete
       value={this.state.address}
       onChange={this.handleChange}
       onSelect={this.handleSelect}
     >
       {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
         <div key={this.props.key}>
           <input
             {...getInputProps({
               placeholder: this.props.placeholder || 'Search Places ...',
               className: 'location-search-input ' + this.props.className,
             })}
             style={{ width: this.props.width || "400px" }}
           />
           <div style={{ width: this.props.width || "420px" }} className="autocomplete-dropdown-container">
             {loading && <div>Loading...</div>}
             {suggestions.map(suggestion => {
               const className = suggestion.active
                 ? 'suggestion-item--active'
                 : 'suggestion-item';
               // inline style for demonstration purpose
               const style = suggestion.active
                 ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                 : { backgroundColor: '#ffffff', cursor: 'pointer' };
               return (
                 <div
                   {...getSuggestionItemProps(suggestion, {
                     className: className + " addressSuggst",
                     style,
                   })}
                 >
                   <span>{suggestion.description}</span>
                 </div>
               );
             })}
           </div>
         </div>
       )}
     </PlacesAutocomplete>
   );
 }
}

