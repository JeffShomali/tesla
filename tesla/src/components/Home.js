/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class Home extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = Home

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    /* View has no WebFlow data attributes */

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = Home.Controller !== Home ? transformProxies(this.props.children) : {

    }

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
                <img src="images/logo.png" loading="lazy" width={102} height={18}  alt className="af-class-image" /></div>
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
                  <a href="#" className="af-class-nav-item-text">log out</a>
                </div>
              </div>
            </div>
            <div className="af-class-container w-container">
              <div className="af-class-user-status">
                <div className="af-class-left-status">
                  <h1 className="af-class-h1">Jeff's Tesla</h1>
                </div>
                <div className="af-class-user-status-right-itemm">
                  <div className="af-class-right-block-item">Home</div>
                  <div className="af-class-right-block-item">Account</div>
                  <div className="af-class-right-block-item">Sign Out</div>
                </div>
              </div>
              <div className="af-class-car-order">
                <div className="af-class-hero-image"><img src="images/compositor.png" loading="lazy" width={760} height={427} className="af-class-image-4" />
                </div>
                <div className="af-class-overview">
                  <div className="af-class-text-block">Overview</div>
                  <img src="images/info-sign.svg" loading="lazy" width={16} height={16} alt className="af-class-info-sign" />
                </div>
                <div className="af-class-tabs w-tabs">
                  <div className="af-class-tabs-menu w-tab-menu">
                    <a data-w-tab="next" className="af-class-tab-link-tab-1 w-inline-block w-tab-link w--current">
                      <div>Next Steps</div>
                    </a>
                    <a data-w-tab="Tab 2" className="af-class-tab2 w-inline-block w-tab-link">
                      <div>Completed Tasks</div>
                    </a>
                  </div>
                  <div className="af-class-tabs-content w-tab-content">
                    <div data-w-tab="next" className="af-class-tab-content w-tab-pane w--tab-active">
                      <div className="af-class-tab-columns w-row">
                        <div className="af-class-tab-left-column w-col w-col-8">
                          <div className="af-class-accordion-wrapper">
                            <div className="af-class-accordion-item">
                              <div className="af-class-accordion-item-trigger">
                                <img src="images/plus.svg" loading="lazy" width={28} height={28} alt className="af-class-tab-icon" />
                              </div>
                              <h2 className="af-class-tab-header">Insurance</h2>
                            </div>
                            <div className="af-class-accordion-item-content">
                              <div className="af-class-left-column-description">
                                <strong className="af-class-next-step-header">Next Steps</strong>
                                ‍</div>
                              <ul role="list" className="af-class-next-step-items">
                                <li className="af-class-item">We will contact you to sign contracts and make final payment prior to delivery.</li>
                                <li className="af-class-item">Prepare to drive and charge your Tesla by completing the <a href="#" className="af-class-link">Meet Your Tesla</a> overview.</li>
                              </ul>
                              <div className="af-class-left-column-description"><strong className="af-class-next-step-header">Who must be present at delivery?</strong>
                              </div>
                              <ul role="list" className="af-class-next-step-items">
                                <li className="af-class-item">All persons listed on the registration must be present to sign at delivery. If you are trading in a vehicle, all registered owners must be present.</li>
                              </ul>
                              <div className="af-class-left-column-description"><strong className="af-class-next-step-header">What do I need to bring with me to delivery?</strong><br />
                              </div>
                              <ul role="list">
                                <li className="af-class-item">Valid driver’s license (for all registrants)</li>
                                <li className="af-class-item">Copy of your current auto insurance (or Tesla VIN specific policy, if required)</li>
                                <li className="af-class-item">Title of your trade-in vehicle, all keys, and owner’s manuals. If you are currently making monthly payments and your vehicle is registered in a state other than KY, NY, TN, MT, MD, MI, MO, MN, or OK, bring your vehicle registration instead. Please do not sign your trade-in title or other ownership documents prior to delivery.<br /></li>
                                <li className="af-class-item">Download and login into your tesla app on your phone. You will see your phone to access to your Tesla on delivary day.<br /></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-tab-right-column w-col w-col-4">
                          <h4 className="af-class-right-column-header">Your Model Y</h4>
                          <div className="af-class-text-block-2">RN114787313<br /></div>
                          <a href="#" className="af-class-link-2">View Design Details</a>
                          <h5 className="af-class-left-column-h5">Autopilet</h5>
                          <p className="af-class-paragraph">Your Model Y comes standard with Autopilot and has been upgraded to Full-Self Driving.</p>
                          <a href="#" className="af-class-button w-button">remove full self-driving</a>
                          <h5 className="af-class-left-column-h5">Estimated Delivery: June 01 - June 21<br /></h5>
                          <p className="af-class-paragraph">We will reach out to you to schedule your delivery date. Delivery time frame is based on order date, profile submission, delivery location and vehicle configuration.</p>
                          <div className="af-class-div-block-2">
                            <p className="af-class-paragraph">To cancel your order, </p>
                            <a href="#" className="af-class-link-3">submit a request</a>
                          </div>
                          <h5 className="af-class-left-column-h5">Estimated Delivery: June 01 - June 21<br /></h5>
                          <p className="af-class-paragraph">Access driving tutorials and unlock your referral code.<br /></p>
                          <div className="af-class-download-block">
                            <img src="images/apple-store.jpg" loading="lazy" width={149} height={51} alt />
                            <img src="images/playstore.png" loading="lazy" width={149} height={51} alt className="af-class-image-5" /></div>
                          <h5 className="af-class-left-column-h5">Documents<br /></h5>
                          <div className="af-class-document-item">
                            <div>Order Agreement</div>
                            <a href="#" className="af-class-link">View</a>
                          </div>
                          <div className="af-class-document-item">
                            <div>Lemon Law Disclosure</div>
                            <a href="#" className="af-class-link">View</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="Tab 2" className="af-class-completed-task w-tab-pane" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-container">
                <div className="af-class-learn-wrapper">
                  <h1 className="af-class-heading">Learn</h1>
                  <div className="af-class-learn-more-items">
                    <div className="af-class-learn-more-item"><img src="images/autopilot.jpg" loading="lazy" height={191} alt className="af-class-image-6" /></div>
                    <div className="af-class-learn-more-item"><img src="images/software.jpg" loading="lazy" height={191} alt /></div>
                    <div className="af-class-learn-more-item"><img src="images/home-charging.jpg" loading="lazy" width={190} height={191} alt className="af-class-image-7" /></div>
                    <div className="af-class-learn-more-item"><img src="images/supercharging.jpg" loading="lazy" height={191} alt /></div>
                    <div className="af-class-learn-more-item"><img src="images/car_owners.png" loading="lazy" sizes="100vw" height={191} alt /></div>
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

export default Home

/* eslint-enable */