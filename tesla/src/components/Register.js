/* eslint-disable */

import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import {Link} from 'react-router-dom';

import { createScope, map, transformProxies } from './helpers'


import AuthService from "../services/auth.service";


// const scripts = [

// ]

// let Controller

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div  role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div  role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};


class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/styles.css);
        ` }} />
        <span className="af-view">
          <div>
            <div className="af-class-login-header">
              <img src="images/tesla-black-logo.svg" loading="lazy" width={120} height={30} alt />
              <div className="af-class-localization-block">
                <img src="images/globe.svg" loading="lazy" width={24} height={24} alt />
                <div className="af-class-localization-text">en-US</div>
              </div>
            </div>
            <div className="af-class-register-section">
              <div className="af-class-register-container w-container">
                <div className="af-class-register-form w-form">
                  
                    <Form
                      onSubmit={this.handleRegister}
                      ref={c => { this.form = c ; }}
                    >
                    <h2 className="af-class-form-header">Create Account</h2>
                    
                    <label htmlFor="name" className="af-class-form-label">Full Name</label>
                    <Input 
                      type="text"
                      className="af-class-form-text-field w-input"
                      name="name"
                    />
                  
                    
                    <label htmlFor="username" className="af-class-form-label">Username</label>
                    <Input 
                      type="text"
                      className="af-class-form-text-field w-input"
                      name="username"
                      value={this.state.username}
                      onChange={this.onChangeUsername}
                      validations={[required, vusername]}
                    />
                    
                    <label htmlFor="email" className="af-class-form-label">Email Address</label>
                    <Input 
                      type="email"
                      className="af-class-form-text-field w-input"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      validations={[required, email]}
                    />
                    
                    <label htmlFor="password" className="af-class-form-label">Password</label>
                    <Input 
                      type="password" 
                      className="af-class-form-text-field w-input"
                      maxLength={256}
                      name="password"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      validations={[required, vpassword]}
                    />
                    
                    <label className="w-checkbox af-class-checkbox-field">
                      <div className="w-checkbox-input w-checkbox-input--inputType-custom af-class-register-checkbox" />
                      
                      <input type="checkbox" id="checkbox" name="checkbox" style={{opacity: 0, position: 'absolute', zIndex: -1}} />
                      <span className="af-class-checkbox-text w-form-label">By creating a Tesla Account, I <br />understand and agree to Tesla's <br />
                        <span className="af-class-checkbox-span">Privacy Notice</span> and &nbsp;<span className="af-class-checkbox-span">Term of Use</span><br />(Required)<br />‍
                      </span>
                    </label>
                    <label className="w-checkbox af-class-checkbox-field">
                      <div className="w-checkbox-input w-checkbox-input--inputType-custom af-class-register-checkbox" />
                      <input type="checkbox" id="checkbox-2" name="checkbox-2" style={{opacity: 0, position: 'absolute', zIndex: -1}} />
                      <span className="af-class-checkbox-text w-form-label">Send me <span className="af-class-checkbox-span">updates </span>from Tesla<br />(Optional)<br />‍</span>
                    </label>

                    <input type="submit" defaultValue="Submit" className="af-class-form-submit-button w-button" />

                    <div className="af-class-divider-with-or">
                      <div className="af-class-horizontal-devider" />
                      <div className="af-class-text-block-4">OR</div>
                      <div className="af-class-horizontal-devider" />
                    </div>
                    <Link  to={"/login"} className="af-class-create-account-button w-button w--current">
                      Sign In
                    </Link>

                    <CheckButton
                      style={{ display: "none" }}
                      ref={c => {
                        this.checkBtn = c;
                      }}
                    />
                  </Form>
                  
                  {this.state.message && (
                    
                  <div 
                    className={
                      this.state.successful
                        ? "w-form-done"
                        : "w-form-fail"
                    }
                    role="alert"
                    >
                    <div> {this.state.message} </div>
                  </div>
                  )}
                </div>
              </div>
            </div>
            <div className="af-class-footer">
              <a href="#" className="af-class-footer-item">Tesla © 2021</a>
              <a href="#" className="af-class-footer-item">Legal &amp; Privacy </a>
              <a href="#" className="af-class-footer-item">Contact</a>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default Signup

/* eslint-enable */