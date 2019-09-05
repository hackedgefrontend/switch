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
import CardList from './listingCards'
import CustomizedSlider from './slider'



export default class Login extends Component {
    state = {
        data: null
    }
    componentDidMount() {
        fetch("https://infoedge-switch.herokuapp.com/switchJobs/5d6e91292109860004b4c694")
            .then(res => { console.log(res) })
            .catch(err => {
                this.setState({
                    data: {
                        address: "Supertech Capetown, Sector 74, Noida",
                        distance: 9.7,
                        list: [
                            {
                                jobId: "5d6a29ba0a185c32072de341",
                                naukriJob: {
                                    jobId: "5d6a29ba0a185c32072de341",
                                    title: "Software Engineer",
                                    expLow: 1,
                                    expHigh: 5,
                                    city: "Noida",
                                    skills: "Zoo Keeper",
                                    officeAddress: "Sector 77, Noida",
                                    industry: "IT Software",
                                    ctcLow: 5,
                                    ctcHigh: 8
                                },
                                distance: 2
                            },
                            {
                                jobId: "5d6a29690a185c32072de33c",
                                naukriJob: {
                                    jobId: "5d6a29690a185c32072de33c",
                                    title: "Software Engineer",
                                    expLow: 1,
                                    expHigh: 5,
                                    city: "Noida",
                                    skills: "Php, CakePhp",
                                    officeAddress: "Sector 101, Noida",
                                    industry: "IT Software",
                                    ctcLow: 5,
                                    ctcHigh: 8
                                },
                                distance: 4.2
                            },
                            {
                                jobId: "2",
                                naukriJob: {
                                    jobId: "2",
                                    title: "Software Engineer",
                                    expLow: 2,
                                    expHigh: 3,
                                    city: "Noida",
                                    skills: "Java",
                                    officeAddress: "Sector 34, Noida",
                                    industry: "IT Software",
                                    ctcLow: 5,
                                    ctcHigh: 7
                                },
                                distance: 6.5
                            },
                            {
                                jobId: "5d699186d1483467ddabd9ca",
                                naukriJob: {
                                    jobId: "5d699186d1483467ddabd9ca",
                                    title: "Software Engineer",
                                    expLow: 1,
                                    expHigh: 5,
                                    city: "Noida",
                                    skills: "Core Java, Hibernate",
                                    officeAddress: "Sector 36, Noida",
                                    industry: "IT Software",
                                    ctcLow: 5,
                                    ctcHigh: 8
                                },
                                distance: 7.7
                            },
                            {
                                jobId: "5d6a29530a185c32072de33a",
                                naukriJob: {
                                    jobId: "5d6a29530a185c32072de33a",
                                    title: "Software Engineer",
                                    expLow: 1,
                                    expHigh: 5,
                                    city: "Noida",
                                    skills: "Php, Laravel",
                                    officeAddress: "Sector 40, Noida",
                                    industry: "IT Software",
                                    ctcLow: 5,
                                    ctcHigh: 8
                                },
                                distance: 7.9
                            },
                            {
                                jobId: "5d6a29460a185c32072de339",
                                naukriJob: {
                                    jobId: "5d6a29460a185c32072de339",
                                    title: "Software Engineer",
                                    expLow: 1,
                                    expHigh: 5,
                                    city: "Noida",
                                    skills: "Core Java, Hibernate, Lamda Notation",
                                    officeAddress: "Sector 25, Noida",
                                    industry: "IT Software",
                                    ctcLow: 5,
                                    ctcHigh: 8
                                },
                                distance: 8.2
                            },
                            {
                                jobId: "5d6a29960a185c32072de33d",
                                naukriJob: {
                                    jobId: "5d6a29960a185c32072de33d",
                                    title: "Software Engineer",
                                    expLow: 1,
                                    expHigh: 5,
                                    city: "Noida",
                                    skills: "Java, Struts",
                                    officeAddress: "Sector 96, Noida",
                                    industry: "IT Software",
                                    ctcLow: 5,
                                    ctcHigh: 8
                                },
                                distance: 9.3
                            },
                            {
                                jobId: "5",
                                naukriJob: {
                                    jobId: "5",
                                    title: "Software Engineer",
                                    expLow: 1,
                                    expHigh: 5,
                                    city: "Noida",
                                    skills: "MongoDb",
                                    officeAddress: "Sector 45, Noida",
                                    industry: "IT Software",
                                    ctcLow: 5,
                                    ctcHigh: 8
                                },
                                distance: 9.6
                            },
                            {
                                jobId: "5d6a299d0a185c32072de33e",
                                naukriJob: {
                                    jobId: "5d6a299d0a185c32072de33e",
                                    title: "Software Engineer",
                                    expLow: 1,
                                    expHigh: 5,
                                    city: "Noida",
                                    skills: "Java, Collections",
                                    officeAddress: "Sector 10, Noida",
                                    industry: "IT Software",
                                    ctcLow: 5,
                                    ctcHigh: 8
                                },
                                distance: 9.7
                            }
                        ]
                    }
                })
            })
    }

    render() {
        let { data } = this.state;
        return (
            <React.Fragment>
                <Gnb />
                <Container className="mainContainer">
                    {/* <CustomizedSlider /> */}
                    <LocationInput />
                    <CardList data={data} />
                </Container>
            </React.Fragment>
        )
    }
}