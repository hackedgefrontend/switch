import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import map from '../map.jpg';
import jobImage from '../jobs.jpg';
import commonHome from '../commonHome.jpg';
import home from '../home.jpg';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './dashboard.scss';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        width: 345
    },
    media: {
        height: 160,
    },
});
let statements = [
    "Is it make you feel that you are spending lot of precious hours of your life for traveling to office?", 
    "Use Switch to find the solution.",
    "Here you can make your own choice."
];

let DashboardCard = (props) => {
    let {
        src = map
    } = props;
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={src}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom fontSize={14} /* variant="h5" component="h6" */>
                        {props.text}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>)
}

export default class Dashboard extends React.PureComponent {
    constructor(param) {
        super(param);
        this.state={
            showCaraouselText:false,
            caraouselTextIndex:0
        }
    }
    componentWillMount=()=>{
        setTimeout(()=>{
            this.setState({
                showCaraouselText:true
            })
        },2000);

          setInterval(()=>{
            this.setState({
                caraouselTextIndex:(this.state.caraouselTextIndex + 1)%statements.length
            })
        },10000)
    }
    render() {
        let {
            showCaraouselText,
            caraouselTextIndex
        }=this.state;
        return (
            <div className="dashboardWrapper">
                <div className="cardsWrapper">
             
                  <Link style={{textDecoration:"none"}} to="/jobsNearHome"><DashboardCard src={jobImage} text="Switch Job near your home location" description="Switch your job to the nearest location from your home to save time of daily movement" /></Link>
                  <Link style={{textDecoration:"none"}}to="/homeNearJob"><DashboardCard src={home} text="Switch Home near your job location" description="Search home near your office location" /></Link>
                  <Link style={{textDecoration:"none"}}to="/commonHomes"><DashboardCard src={commonHome} text="Get Common Home for you and your partner" description="Search common accomodation for you and your partner,which will be near for both" /></Link>     

                </div>
                {showCaraouselText && statements[caraouselTextIndex] &&
                <div className="craouselText">
                      <span className="text">{statements[caraouselTextIndex]}</span>
                </div>
                }
            </div>
        )
    }
}