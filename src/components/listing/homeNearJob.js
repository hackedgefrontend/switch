import React, { Component } from 'react'
import { Tab, FormControl, InputLabel, Input, Container, Fab } from '@material-ui/core';
import Gnb from '../userLoginSignup/GNB';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LocationInput from './locationInput';
import { makeStyles } from '@material-ui/core/styles';
import CardList from './homeCards'
import CustomizedSlider from './slider'
const axios = require('axios');



export default class Login extends Component {
    state = {
        data: null
    }
    componentDidMount() {
        axios.get("https://infoedge-switch.herokuapp.com/switchHomes/5d7021cf5efa0f00048d36ed",
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    "Access-Control-Allow-Origin": '*',
                    'Accept': 'application/json',
                    "Authorization": "Basic c3dpdGNoOnN3aXRjaGluZ2lzZnVu"
                }
            }
        )
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
            .catch(err => {
                this.setState({
                    data: null
                })
            })
    }
    fetchNewListWithDistance = val => {

    }

    render() {
        let { data } = this.state;
        return (
            <React.Fragment>
                <Container className="mainContainer">
                    <CustomizedSlider getSliderVal={this.fetchNewListWithDistance} />
                    {/* <LocationInput /> */}
                    <CardList data={data} />
                </Container>
            </React.Fragment>
        )
    }
}