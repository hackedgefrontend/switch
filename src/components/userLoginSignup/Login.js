import React , { Component } from 'react'
import { Tab , FormControl, InputLabel , Input , FormHelperText , Container , Fab} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

import '../../style/Login.css'

class Login extends Component{

    state = {
        loginDivDisplay: true,
        signUPDivDisplay: false,
        email: '',
        loginpassword: '',
        reenterPassword:'',
        signUppassword:''
    }

    loginTabEvent = () => {
     this.setState({ loginDivDisplay: true, signUPDivDisplay: false });   
    }

    signupTabEvent = () => {
        this.setState({ loginDivDisplay: false, signUPDivDisplay: true });   
    }

    clearText = () => {
        this.setState({ email: '' , loginpassword: '' , reenterPassword: '', signUppassword:''})
    }

    handleChange = e =>  {
        this.setState({ [e.target.name] : e.target.value })
    }

    signUpHandleChange = e => {
       this.setState({ [e.target.name] : e.target.value })
    }

    signUpValidation = () => {
        {this.state.email.length !== 0 && (this.state.signUppassword.length !==0 && this.state.reenterPassword.length !==0) ? 
        (this.state.signUppassword === this.state.reenterPassword ? (alert("Right")) : (alert("Wrong"))):
        (alert("Please input values in all the fields"))}
    }

    loginValidation = () => {
        {(this.state.email.length !==0 && this.state.loginpassword.length !==0) ? (alert("Goods")) : (alert("Input all the fields"))}
    }

    render(){
        return(
            <Container className = "test">
            <div className = "loginDiv">
                <div className = "tabContainer">
                   <Tab 
                   value  = "login"
                   label = {<span className="loginTabSpan">Login</span>}
                   className = "loginTab"
                   onClick = {this.loginTabEvent}
                   wrapped
                   /> |
                    <Tab 
                   value  = "signup"
                   label = {<span className="signUpTab">Sign Up</span>}
                   className = "signupTab"
                   onClick = {this.signupTabEvent}
                   wrapped
                   />
                </div>

                <div className = "tabContent">
                { this.state.loginDivDisplay ? (<div className = "loginTabContent">
                        <div className = "loginTabContentEmail">
                            <FormControl required>
                                    <InputLabel htmlFor="emailInput">Email address</InputLabel>
                                    <Input id="emailInput" name="email" value={this.state.email} onChange={this.handleChange}/>
                            </FormControl>
                        </div>
                        <br/>
                        <div className  = "loginTabContentPassword">
                            <FormControl required>
                                    <InputLabel htmlFor="passwordInput">Password</InputLabel>
                                    <Input id="standard-password-input" name="loginpassword"  type="password" value={this.state.loginpassword} onChange={this.handleChange}/>
                            </FormControl>
                        </div>
                        <div className = "buttonGroups">
                            <div className = "contentLoginButton">
                                <Fab
                                    variant="extended"
                                    size="medium"
                                    color="primary"
                                    aria-label="add"
                                    onClick = {this.loginValidation}
                                    >Login
                                <NavigationIcon/>
                                </Fab>
                            </div>
                            <div className = "contentClearButton">
                                <Fab
                                    variant="extended"
                                    size="medium"
                                    color="secondary"
                                    aria-label="add"
                                    onClick = {this.clearText}
                                    >Clear
                                    <DeleteIcon />
                                </Fab>
                            </div>
                        </div>
                </div>): 
                (<div className = "signupTabContent">
                <div className = "signupTabContentEmail">
                    <FormControl required>
                            <InputLabel htmlFor="signupEmail">Email address</InputLabel>
                            <Input id="signupEmail" name = "email" value={this.state.email} onChange={this.handleChange}/>
                    </FormControl>
                </div>
                <br/>
                <div className  = "signupTabContentPassword">
                    <FormControl required>
                            <InputLabel htmlFor="passwordInput">Password</InputLabel>
                            <Input id="standard-password-input" name="signUppassword" type="password" value={this.state.signUppassword} onChange={this.handleChange}/>
                    </FormControl>
                </div>
                <div className  = "signupTabContentPasswordReenter">
                    <FormControl required>
                            <InputLabel htmlFor="signupRePassword">Re-enter Password</InputLabel>
                            <Input id="standard-password-input" type = "password" name = "reenterPassword" value={this.state.reenterPassword} onChange={this.handleChange}/>
                    </FormControl>
                </div>
                <div className = "buttonGroups">
                    <div className = "contentLoginButton">
                        <Fab
                            variant="extended"
                            size="medium"
                            color="primary"
                            aria-label="add"
                            onClick={this.signUpValidation}
                            >Sign Up
                        <NavigationIcon/>
                        </Fab>
                    </div>
                    <div className = "contentClearButton">
                        <Fab
                            variant="extended"
                            size="medium"
                            color="secondary"
                            aria-label="add"
                            onClick = {this.clearText}
                            >Clear
                            <DeleteIcon />
                        </Fab>
                    </div>
                </div>
        </div>)}
            </div>
            </div>
            </Container>
        )
    }
}

export default Login