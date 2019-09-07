import React from 'react';
import LocationInput from '../LocationSearchInput';
import './commonHomeWrapper.scss';
import Slider from '@material-ui/core/Slider'
import HomeList from '../components/listing/homeCards';
const axios = require('axios');
let url = 'https://infoedge-switch.herokuapp.com/commonHomes/5d7021cf5efa0f00048d36ed';

const headers = {
  //  'X-Requested-With': 'XMLHttpRequest',
  //"Access-Control-Allow-Origin": '*',
  'Accept': 'application/json',
  "Authorization": "Basic c3dpdGNoOnN3aXRjaGluZ2lzZnVu"
}

export default class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      officeAddressOfFirstUser: null,
      officeAddressOfSecondUser: null
    }
  }
  fetchData = () => {

  }
  componentDidMount = () => {
    axios({
      method: 'get',
      url: 'https://infoedge-switch.herokuapp.com/user/5d7021cf5efa0f00048d36ed',
      headers: {
        'content-type': "application/json",
        'authorization': "Basic c3dpdGNoOnN3aXRjaGluZ2lzZnVu"
      }
    }).then((response) => {
      console.log(response)
      let {
      data: {
        jobDetails: {
          workAddress
        }
      }
    } = response;
      this.setState({
        officeAddressOfFirstUser: workAddress
      });
    })

  }

  fetchList = (firstAddress, secondAddress) => {
    axios({
      method: "POST",
      url,
      headers,
      data: {
        "sliderDistance": 50,
        "myAddress": firstAddress,
        "theirAddress": secondAddress
      }
    }).then(res => {
      this.setState({
        data: res.data
      })
    }).catch(err => {
      this.setState({
        data: null
      })
    })
  }



  fetchData = (field, value) => {

    this.setState({
      [field]: value
    });
    if (field == "officeAddressOfFirstUser" && this.state.officeAddressOfSecondUser) {
      this.setState({
        data: null
      });
      this.fetchList(value, this.state.officeAddressOfSecondUser);
    }
    else if (field == "officeAddressOfSecondUser" && this.state.officeAddressOfFirstUser) {
      this.setState({
        data: null
      });
      this.fetchList(this.state.officeAddressOfFirstUser, value);
    }
  }


  render() {
    let {
      data,
      officeAddressOfFirstUser,
      officeAddressOfSecondUser
    } = this.state;
    console.log(officeAddressOfFirstUser);
    return (
      <div className="commonHomeWrapper mainContainer">
        <div className="searchBox">
          <div>
            <span className="prsn">Person A</span>
            <LocationInput
              onChange={(value) => { this.setState({ officeAddressOfFirstUser: value }) }}
              onSelectAddress={this.fetchData.bind(this, "officeAddressOfFirstUser")}
              onSelectAddress={this.setFirstAddress}
              value={officeAddressOfFirstUser}
              placeholder="Office Location Of Person 1"
              key="1"
            />
          </div>

          <div>
            <span className="prsn">Person B</span>
            <LocationInput
              onChange={(value) => { this.setState({ officeAddressOfSecondUser: value }) }}
              onSelectAddress={this.fetchData.bind(this, "officeAddressOfSecondUser")}
              value={officeAddressOfSecondUser}
              placeholder="Office Location Of Person 2"
              key="2"
            />
          </div>
        </div>
        {officeAddressOfFirstUser && officeAddressOfSecondUser &&
        <HomeList showDistance={false} data={data} />
        }
      </div>
    )
  }
}