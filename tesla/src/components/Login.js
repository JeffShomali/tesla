/* eslint-disable */

import React from 'react'
import {Link} from 'react-router-dom'
import { createScope, map, transformProxies } from './helpers'


const scripts = [

]

let Controller

class Login extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/LoginController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = Login

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
    const proxies = Login.Controller !== Login ? transformProxies(this.props.children) : {

    }

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
                  <form id="email-form" name="email-form" className="af-class-form">
                    <h2 className="af-class-form-header">Sign In</h2>
                    <label htmlFor="name" className="af-class-form-label">Email Address</label>
                    <input type="text" className="af-class-form-text-field w-input" maxLength={256} name="name" placeholder />
                    <label htmlFor="email" className="af-class-form-label">Password</label>
                    <input type="email" className="af-class-form-text-field w-input" maxLength={256} name="email" placeholder />
                    <input type="submit" defaultValue="Sign in" className="af-class-form-submit-button w-button" />
                  </form>
                  <div className="w-form-done">
                    <div className="af-class-text-block-3">Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
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