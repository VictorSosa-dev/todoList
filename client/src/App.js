import React from 'react'
import BaseLayout from './layouts/BaseLayout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"


// Pages
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import NotFoundPage from './pages/NotFoundPage'
import TodoPage from './pages/TodoPage'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    window.localStorage.getItem('token')
      ? <Component {...props} />
      : <Redirect to={{
          pathname:'/',
          state:{from: props.location} 
      }}/>
  )} />
)

function App() {
  return (
    <Router>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          {/* <PrivateRoute exact path="/todo" component={TodoPage} /> */}
          <Route exact path="/todo" component={TodoPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BaseLayout>
    </Router>
  )
}

export default App
