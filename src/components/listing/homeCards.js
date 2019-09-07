import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Shimmer from '../shimmer';
import './../../style/common.css';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LocalHotelOutlinedIcon from '@material-ui/icons/LocalHotelOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
const appartmentIcon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKhTwI9ps1eyO5FmVYWmFVBbo-Et6n5UoY9S-el8iNVeYmd7xOSw';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: '10px auto',
        maxWidth: 900,
    },
    image: {
        width: 128,
        height: 125,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        height: '100%',
        borderRadius: '4px'
    },
    hotIcon: {
        width: '17px',
        height: '16px',
        verticalAlign: 'bottom',
        marginRight: '6px'
    }

}));

export default function ComplexGrid(props) {
    const classes = useStyles();
    let data = props.data ? props.data.list : null;
    let {
        showDistance = true
    } = props;
    if (!data) {
        return (
            <div className={classes.root}>
                <Shimmer />
                <Shimmer />
                <Shimmer />
            </div>)
    }

    return (
        data.map(ind => {
            let { property, distance, distanceFromMe, distanceFromThem } = ind;
            let { address,
                bedrooms,
                furnishing,
                id,
                price,
                propertyMode,
                propertyType,
                publisherName,
                publisherType,
                society } = property;

            return (
                <div>
                    <div className={classes.root}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2} className="bgGray">
                                <img width={180} className={classes.img + " br4 "} alt="complex" src={appartmentIcon} />
                                {/* <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img + " br4 "} alt="complex" src={appartmentIcon} />
                                </ButtonBase>
                            </Grid> */}
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1" className="heading fw600">
                                                {society}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom className="heading">
                                                <LocationOnOutlinedIcon className="locIcon" />
                                                <span className="f12"> {address}</span>
                                            </Typography>

                                            <Typography variant="body2" color="textSecondary">
                                                <span className="mr20">
                                                    <DescriptionOutlinedIcon className="icons" />
                                                    {bedrooms.replace('Size_', '') + ` - ${propertyMode}`}
                                                </span>
                                                <span className="f12 mr20">
                                                    <AccountBalanceWalletOutlinedIcon className="icons" />
                                                    {`Rs ${price}`}
                                                </span>
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                <span className="mr20">
                                                    <HomeOutlinedIcon className="icons" />
                                                    {propertyType}
                                                </span>
                                                <span className="mr20">
                                                    <LocalHotelOutlinedIcon className="icons" />
                                                    {furnishing.replace('UN_', '')}
                                                </span>
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                <span className="f12">
                                                    Publisher-Type : <b>{publisherType}</b>
                                                </span>

                                            </Typography>

                                            <Typography variant="body2" color="textSecondary">
                                                <span className="mr20 f12">
                                                    Publisher-Name : <b>{publisherName} </b>
                                                </span>
                                            </Typography>

                                        </Grid>
                                    </Grid>
                                    {showDistance &&
                                        <Grid item>
                                            <Typography className="heading fs13" variant="subtitle1"> {`${distance} kms`}</Typography>
                                        </Grid>
                                    }
                                    {!showDistance &&
                                        <Grid item>
                                            <Typography className="heading fs13" variant="subtitle1"> {`From A ${distanceFromMe} km `}<br />{`From B ${distanceFromThem} km`}</Typography>
                                        </Grid>
                                    }

                                </Grid>
                            </Grid>
                        </Paper>
                    </div>

                </div>
            );
        })
    );
}
