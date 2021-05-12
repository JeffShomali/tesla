/* eslint-disable */

import React, { Component } from "react";
import { createScope, map, transformProxies } from './helpers'

import AuthService from "../services/auth.service";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };
  }

  logOut() {
    AuthService.logout();
  }

  
  render() {
    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/styles.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body">
            <div className="af-class-nav">
              <div className="af-class-nav-wrapper w-row">
                <div className="af-class-logo-wrapper w-col w-col-2">
                  <img src="images/logo.png" loading="lazy" width={102} height={18}  alt className="af-class-image" />
                </div>
                <div className="af-class-nav-item-wrapper w-col w-col-6">
                  <div className="af-class-div-block">
                    <a href="#" className="af-class-nav-item-text">model s</a>
                    <a href="#" className="af-class-nav-item-text">model 3</a>
                    <a href="#" className="af-class-nav-item-text">model X</a>
                    <a href="#" className="af-class-nav-item-text">model Y</a>
                    <a href="#" className="af-class-nav-item-text">solar panels</a>
                  </div>
                </div>
                <div className="af-class-nav-right-column-wrapper w-col w-col-4">
                  <a href="#" className="af-class-nav-item-text">Shop</a>
                  <a href="#" className="af-class-nav-item-text">tesla account</a>
                  <a href="/login" className="af-class-nav-item-text" onClick={this.logOut} >log out</a>
                </div>
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default Nav

/* eslint-enable */