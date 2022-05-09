import React, { Component } from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
    <p style={{color:'#056078', fontSize:'2rem'}}>Loading...</p>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Forgetpassword = React.lazy(() => import('./views/pages/forgetpassword/Forgetpassword'))
const Resendotp = React.lazy(() => import('./views/pages/resendotp/Resendotp'))


class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            
            <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/forgetpassword"
              name="Forgetpassword Page"
              render={(props) => <Forgetpassword {...props} />}
            />
             <Route
              exact
              path="/Resendotp"
              name="Resendotp Page"
              render={(props) => <Resendotp {...props} />}
            />
           
            <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
            {/*<Redirect from='/' to="/login" name="Login Page" render={(props) => <Login {...props} />} />*/}
          </Switch>
        </React.Suspense>
      </HashRouter>
    )
  }
}

export default App
