import React, { Component } from 'react'
import { Container } from '@material-ui/core';
import CustomSlider from '../slider'
import HomeList from './homeCards'
import JobList from './jobCards'
import LocationInput from '../../LocationSearchInput';
import '../../style/common.css';
import { relative } from 'path';
const queryString = require('query-string');



let url = 'https://infoedge-switch.herokuapp.com/switchHomes/rmsCandidate'
// ?stage=OfferedAndJoined&officeCity=Noida&officeAddress=Sector 29, Noida'
const axios = require('axios');
const defaultDist = 5;
const defaultLoc = "";
let switchHomesUrl = "https://infoedge-switch.herokuapp.com/switchHomes/5d7021cf5efa0f00048d36ed";
const switchJobsUrl = "https://infoedge-switch-staging.herokuapp.com/switchJobs/5d7021cf5efa0f00048d36ed";
const headers = {
    'X-Requested-With': 'XMLHttpRequest',
    "Access-Control-Allow-Origin": '*',
    'Accept': 'application/json',
    "Authorization": "Basic c3dpdGNoOnN3aXRjaGluZ2lzZnVu"
}

export default class Login extends Component {
    state = {
        data: null,
        loc: defaultLoc,
        searchLoc: defaultLoc,
        distance: defaultDist
    }
    componentDidMount() {
        localStorage.setItem("switchUserId" , "1");
        var parsed = queryString.parse(this.props.location.search);
        let { stage, officeCity, officeAddress } = parsed;
        url = url + `?stage=${stage}&officeCity=${officeCity}&officeAddress=${officeAddress}`

        axios.get(url,
            { headers }
        ).then(res => {
            let { address, distance } = res.data;
            this.setState({
                data: res.data,
                loc: address,
                distance
            })
        }).catch(err => {
            this.setState({
                data: null
            })
        })
    }
  
    updateData = () => {
        let { loc, distance } = this.state;
        axios.get(`${url}?sliderDistance=${distance}&selectedLocation=${loc}`,
            { headers }
        ).then(res => {
            this.setState({
                data: res.data
            })
        }).catch(err => {
            this.setState({
                data: null
            })
        })

    }
    handleSliderChange = (evt, val) => {
        this.setState({
            data: null,
            distance: val
        }, () => {
            this.updateData();
        })
    }
    handleChangeLocation = (val) => {
        this.setState({
            data: null,
            loc: val.toString(),
            searchLoc: val.toString()
        }, () => {
            this.updateData();
        })
    }
    onChangeLoc = (val) => {
        let value = val.trim();
        this.setState({
            searchLoc: val
        })
        if (!value.length) {
            this.setState({
                loc: ''
            }, () => {
                this.updateData()
            })
        }
    }

    render() {
        let { data, searchLoc, distance } = this.state;
        return (
            <React.Fragment>
                <div className={"homeBgImage bgGray"}>
                    <Container className="mainContainer">
                        <div style={{ display: "flex", position: relative }}>
                            <div style={{ margin: "12px 0 15px 146px" }}>
                                <LocationInput value={searchLoc} onChange={this.onChangeLoc} onSelectAddress={this.handleChangeLocation} placeholder={"Enter the Location"} className="locInp" width={"460px"} />
                            </div>
                            <CustomSlider onChange={this.handleSliderChange} value={distance} />
                        </div>
                        <HomeList data={data} />
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}