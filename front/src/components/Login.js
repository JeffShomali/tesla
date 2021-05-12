/* eslint-disable */
/**
* This page has a Form with username & password.
* We’re gonna verify them as required field.
* If the verification is ok, we call AuthService.login() method, then direct user to Profile page: this.props.history.push("/profile");, or show message with response error.
*/

import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

import {Link} from 'react-router-dom'
import { createScope, map, transformProxies } from './helpers'


// const scripts = [

// ]

// let Controller

const required = value => {
  if (!value) {
    return (
      <div className="w-form-fail" role="alert">
        This field is required!
      </div>
    );
  }
};


class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/dashboard");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
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
          <div className="af-class-login-body">
            <div className="af-class-login-header"><img src="images/tesla-black-logo.svg" loading="lazy" width={120} height={30} alt />
              <div className="af-class-localization-block"><img src="images/globe.svg" loading="lazy" width={24} height={24} alt />
                <div className="af-class-localization-text">en-US</div>
              </div>
            </div>
            <div className="af-class-section">
              <div className="af-class-login-container w-container">
                <div className="af-class-login-form w-form">
                <Form onSubmit={this.handleLogin} ref={c => { this.form = c; }}>
                  
                    <h2 className="af-class-form-header">Sign In</h2>
                    <label htmlFor="username" className="af-class-form-label">Email Address</label>
                    <Input 
                    type="text"
                    className="af-class-form-text-field w-input"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required]}
                    />
                    
                    <label htmlFor="password" className="af-class-form-label">Password</label>
                    <Input 
                      type="password"
                      className="af-class-form-text-field w-input"
                      name="password" 
                      value={ this.state.password}
                      onChange={this.onChangePassword}
                      validations={[required]}
                    />
                    
                    <button
                      className="af-class-form-submit-button w-button"
                      disabled={this.state.loading}
                      >
                      <span>SUBMIT</span>
                    </button>

                    <CheckButton
                      style={{ display: "none" }}
                      ref={c => {
                        this.checkBtn = c;
                      }}
                    />
                  
                  </Form>
                  
                  {this.state.message && (
                    <div className="w-form-fail">
                        <div>{this.state.message}</div>
                    </div>
                  )}

                  <div className="af-class-forget-pass-block">
                    <a href="#" className="af-class-text-link">Forget email?</a>
                    <div className="af-class-divider" />
                    <a href="#" className="af-class-text-link">Forget password?</a>
                  </div>
                  <div className="af-class-divider-with-or">
                    <div className="af-class-horizontal-devider" />
                    <div className="af-class-text-block-4">OR</div>
                    <div className="af-class-horizontal-devider" />
                  </div>
                  <Link to={"/register" } className="af-class-create-account-button w-button">
                    Create account
                  </Link>
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

export default Login

/* eslint-enable */