import React , { Component } from 'react';
import { TextField , Container , Paper , Fab} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import NavigationIcon from '@material-ui/icons/Navigation';
import GNB from './GNB'

import '../../style/Register.css'

class Register extends Component{

    state ={
        Role:'',
        Industry:'',
        Experience:'',
        CTC:'',
        WorkCity:'',
        WorkAddress:'',
        HomeAddress:'',
        HomeType:'',
        Rooms:'',
        Furnishing:'',
        HomeCity:''
    }

    onClearClick = () => {
        this.setState({
            Role:'',
            Industry:'',
            Experience:'',
            CTC:'',
            WorkCity:'',
            WorkAddress:'',
            HomeAddress:'',
            HomeType:'',
            Rooms:'',
            Furnishing:'',
            HomeCity:''
        })
    }

    handleChange = e =>  {
        this.setState({ [e.target.name] : e.target.value })
    }

    render(){
        return(
            <React.Fragment>
                <GNB/>
                <Container>
                    <div>
                        <TextField
                            id="outlined-search"
                            label="Role"
                            name= "Role"
                            margin="normal"
                            className="textfield"
                            style = {{marginTop:'5%'}}
                            value={this.state.Role}
                            onChange={this.handleChange}
                            /> 
                        <TextField
                            id="standard-name"
                            label="Industry"
                            name="Industry"
                            margin="normal"
                            className="textfield"
                            style={{marginLeft : '5%' , marginTop:'5%'}}
                            value={this.state.Industry}
                            onChange={this.handleChange}
                        />
                        <br/>
                        <TextField
                            id="standard-name"
                            label="Experience"
                            name="Experience"
                            margin="normal"
                            className="textfield"
                            style = {{marginTop:'5%'}}
                            value={this.state.Experience}
                            onChange={this.handleChange}
                        />
                        <TextField
                            id="standard-name"
                            label="CTC"
                            name="CTC"
                            margin="normal"
                            className="textfield"
                            style={{marginLeft : '5%',marginTop:'5%'}}
                            value={this.state.CTC}
                            onChange={this.handleChange}
                        />
                        <br/>
                        <TextField
                            id="standard-name"
                            label="Work City"
                            name="WorkCity"
                            margin="normal"
                            className="textfield"
                            style = {{marginTop:'5%'}}
                            value={this.state.WorkCity}
                            onChange={this.handleChange}
                        />
                        <TextField
                            id="standard-name"
                            label="Work Address"
                            name="WorkAddress"
                            margin="normal"
                            className="textfield"
                            style={{marginLeft : '5%',marginTop:'5%'}}
                            value={this.state.WorkAddress}
                            onChange={this.handleChange}
                        />
                        <br/>
                        <TextField
                            id="standard-name"
                            label="Home Address"
                            name="HomeAddress"
                            margin="normal"
                            className="textfield"
                            style = {{marginTop:'5%'}}
                            value={this.state.HomeAddress}
                            onChange={this.handleChange}
                        />
                        <TextField
                            id="standard-name"
                            label="Home Type"
                            name="HomeType"
                            margin="normal"
                            className="textfield"
                            style={{marginLeft : '5%',marginTop:'5%'}}
                            value={this.state.HomeType}
                            onChange={this.handleChange}
                        />
                        <br/>
                        <TextField
                            id="standard-name"
                            label="Rooms"
                            name="Rooms"
                            margin="normal"
                            className="textfield"
                            type = "number"
                            style = {{marginTop:'5%'}}
                            value={this.state.Rooms}
                            onChange={this.handleChange}
                        />
                        <TextField
                            id="standard-name"
                            label="Furnishing"
                            name="Furnishing"
                            margin="normal"
                            className="textfield"
                            style={{marginLeft : '5%',marginTop:'5%'}}
                            value={this.state.Furnishing}
                            onChange={this.handleChange}
                        />
                        <br/>
                        <TextField
                            id="standard-name"
                            label="Home City"
                            name="HomeCity"
                            margin="normal"
                            className="textfieldSpecial"
                            style = {{marginTop:'5%'}}
                            value={this.state.HomeCity}
                            onChange={this.handleChange}
                        />
                        <br/>
                        <div className = "buttonGroup">
                            <div className = "continueBtn">
                                <Fab
                                    variant="extended"
                                    size="medium"
                                    color="primary"
                                    >Continue
                                <NavigationIcon/>
                                </Fab>
                            </div>
                            <div className = "cancelBtn">
                                <Fab
                                    variant="extended"
                                    size="medium"
                                    color="secondary"
                                    onClick={this.onClearClick}
                                    >Clear
                                    <DeleteIcon />
                                </Fab>
                            </div>
                        </div>
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}

export default Register