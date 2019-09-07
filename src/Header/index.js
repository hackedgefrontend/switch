import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import location from '../location.png';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './header.scss';
let headerNav = [
    {
        label: "Home",
        path: "/dashboard"
    },
    {
        label: "Find Jobs",
        path: "/jobsNearHome"
    },
    {
        label: "Find Home",
        path: "/homeNearJob"
    },
    {
        label: "Find Common Home",
        path: "/commonHomes"
    }
]
export default class Dashboard extends React.PureComponent {
    constructor(param) {
        super(param);
        let location = this.props.location;
        console.log(location);
        this.state = {
            activeTab: location.pathname == "/dashboard" ? "Home" : ""
        }
    }
    changeTab = (label) => {
        this.setState({
            activeTab: label
        })
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        let location = nextProps.location;
        switch (location.pathname) {
            case "/jobsNearHome":
                return {
                    activeTab: "Find Jobs"
                }
            case "/homeNearJob":
                return {
                    activeTab: "Find Home"
                }
            case "/commonHomes":
                return {
                    activeTab: "Find Common Home"
                }
                dafault: return prevState;
        }
    }
    render() {
        let {
            activeTab
        } = this.state;
        return (
            <div className="headerWrapper">
                <div className="appLg">
                    <img alt="" src={location} className="switchIcon"></img>
                    <span>Switch</span>
                </div>
                <div className="navBar">
                    {
                        headerNav.map((obj, key) => {
                            return (
                                <Link style={{ color: "white", textDecoration: "none" }} to={obj.path}>
                                    <span className={activeTab == obj.label ? "activeTab" : ""} onClick={this.changeTab.bind(this, obj.label)} key={key}>{obj.label}</span>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}