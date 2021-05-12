/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

import AuthService from "../services/auth.service";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        
      });
    }
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
          <div>
            <div className="af-class-nav">
              <div className="af-class-nav-wrapper w-row">
                <div className="af-class-logo-wrapper w-col w-col-2">
                  <img src="images/logo.png" loading="lazy" width={102} height={18} srcSet="images/logo-p-500.png 500w, images/logo-p-800.png 800w, images/logo-p-1080.png 1080w, images/logo-p-1600.png 1600w, images/logo.png 2400w" sizes="102px" alt className="af-class-image" />
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
                  <a href="#" className="af-class-nav-item-text">SHop</a>
                  <a href="#" className="af-class-nav-item-text">tesla account</a>
                  <a href="/login" className="af-class-nav-item-text" onClick={this.logOut} >log out</a>
                </div>
              </div>
            </div>
            <div className="af-class-dasboard-container w-container">
              <div className="af-class-user-status">
                <div className="af-class-left-status">
                  <h1 className="af-class-h1">Jeff's Tesla</h1>
                </div>
                <div className="af-class-user-status-right-itemm">
                  <div className="af-class-right-block-item">Home</div>
                  <div className="af-class-right-block-item">Account</div>
                  <a href="/login" className="af-class-right-block-item">Sign Out</a>
                </div>
              </div>
              <div className="af-class-card">
                <div className="af-class-card-item">
                  <div className="af-class-card-left-column">
                    <h4 className="af-class-dashbiard-card-tiltle">Power Everything with Solar</h4>
                    <p className="af-class-paragraph-2">Order solar and receive a $400 award after system activation<br /></p>
                    <a href="#" className="af-class-solar-button w-button">Order Solar Panels</a>
                  </div>
                  <div className="af-class-card-right-column" />
                </div>
                <div className="af-class-card-item">
                  <div className="af-class-card-left-column-40">
                    <h4 className="af-class-dashbiard-card-tiltle">Cybertruck</h4>
                    <p className="af-class-paragraph-2">RN112982051<br /></p>
                    <a href="#" className="af-class-card-button w-button">Manage</a>
                  </div>
                  <div className="af-class-card-right-column-60">
                    <img src="images/multiview_NVRP_tx9o6kxjwvf.png" loading="lazy" width={400} height={120} alt />
                  </div>
                </div>
                <div className="af-class-card-item">
                  <div className="af-class-card-left-column-40">
                    <h4 className="af-class-dashbiard-card-tiltle">Model Y</h4>
                    <p className="af-class-paragraph-2">RN114787313<br /></p>
                    <a href="#" className="af-class-card-button w-button">Manage</a>
                  </div>
                  <div className="af-class-card-right-column-60">
                    <img src="images/compositor.png" loading="lazy" width={350} height={180} srcSet="images/compositor-p-500.png 500w, images/compositor-p-800.png 800w, images/compositor-p-1080.png 1080w, images/compositor.png 1440w" sizes="(max-width: 767px) 59vw, 350px" alt />
                  </div>
                </div>
                <div className="af-class-card-item">
                  <div className="af-class-card-left-column-40">
                    <h4 className="af-class-dashbiard-card-tiltle">Tesla Shop</h4>
                    <p className="af-class-paragraph-2">Order History<br /></p>
                    <a href="#" className="af-class-card-button w-button">view</a>
                  </div>
                  <div className="af-class-card-right-column-60 af-class-shop-image">
                    <img src="images/shop-block.png" loading="lazy" width={124} height={130} alt className="af-class-other-car" />
                  </div>
                </div>
                <div className="af-class-card-item">
                  <div className="af-class-card-left-column-40">
                    <h4 className="af-class-dashbiard-card-tiltle">Tesla Shop</h4>
                    <p className="af-class-paragraph-2">Purchased a car from a third party?<br /></p>
                    <a href="#" className="af-class-card-button w-button">add</a>
                  </div>
                  <div className="af-class-card-right-column-60">
                    <img src="images/model_3--side_profile2x.png" loading="lazy" height={157} width={336} srcSet="images/model_3--side_profile2x-p-500.png 500w, images/model_3--side_profile2x.png 672w" sizes="(max-width: 767px) 59vw, 336px" alt className="af-class-other-car" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default Dashboard

/* eslint-enable */