import React, { Component } from 'react'
import { Container } from '@material-ui/core';
import CustomSlider from '../slider'
import HomeList from './homeCards'
import JobList from './jobCards'
import LocationInput from '../../LocationSearchInput';
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
        dist: defaultDist
    }
    componentDidMount() {
        const { match: { path } } = this.props;
        let url = this.getUrl(path);
        this.setState({
            routeName: path
        })
        if (!url) { this.setState({ data: null }); return }
        axios.get(url,
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
    getUrl = (path) => {
        let url;
        url = path.includes('homeNearJob') ? switchHomesUrl : (path.includes('JobNearHome') ? switchJobsUrl : null);
        return url;
    }
    handleSliderChange = (evt, val) => {
        this.setState({
            data: null,
            distance: val
        })
        let { loc, routeName } = this.state, url;
        url = this.getUrl(routeName);
        axios.get(`${url}?sliderDistance=${val}&selectedLocation=${loc}`,
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

    render() {
        let { data, routeName } = this.state;
        return (
            <React.Fragment>
                <Container className="mainContainer">
                    <LocationInput placeholder={"Enter the Location"} className="locInp" width={"500px"} />
                    <CustomSlider onChange={this.handleSliderChange} />
                    {routeName && routeName.includes('homeNearJob') && <HomeList data={data} />}
                    {routeName && routeName.includes('JobNearHome') && <JobList data={data} />}
                </Container>
            </React.Fragment>
        )
    }
}