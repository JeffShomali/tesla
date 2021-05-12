/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import {Link} from 'react-router-dom';

const scripts = [

]

let Controller

class Signup extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SignupController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = Signup

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
    const proxies = Signup.Controller !== Signup ? transformProxies(this.props.children) : {

    }

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
                  <form id="email-form" name="email-form">
                    <h2 className="af-class-form-header">Create Account</h2>
                    <label htmlFor="name" className="af-class-form-label">First Name</label>
                    <input type="text" className="af-class-form-text-field w-input" maxLength={256} name="name" />
                    <label htmlFor="email" className="af-class-form-label">Last Name</label>
                    <input type="text" className="af-class-form-text-field w-input" maxLength={256} name="email" />
                    <label htmlFor="Email-4" className="af-class-form-label">Email Address</label>
                    <input type="email" className="af-class-form-text-field w-input" maxLength={256} name="Email" />
                    <label htmlFor="email-2" className="af-class-form-label">Password</label>
                    <input type="password" className="af-class-form-text-field w-input" maxLength={256} name="email-2" />
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
                  </form>
                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
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