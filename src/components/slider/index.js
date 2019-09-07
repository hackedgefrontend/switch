import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
    root: {
        width: 250,
        marginTop: '12px',
        marginLeft: '142px',
        padding: '6px 17px',
        background: '#fff',
        borderRadius: '4px'
    },
    font: {
        fontSize: '12px',
    },
}));




export default function CustomSlider(props) {
    const classes = useStyles();
    console.log(props);
    let { onChange, value } = props;
    return (
        <React.Fragment>

            <div className={classes.root}>
                <Typography id="discrete-slider" gutterBottom className={classes.font}>
                    Distance
                    </Typography>
                <Slider classes={{ root: "commonSlider" }} value={value} onChange={onChange} min={5} max={100} step={1} valueLabelDisplay={true} />
            </div>

        </React.Fragment>
    )
}