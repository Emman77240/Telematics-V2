import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { logIn } from '../api';
import { Button } from 'reactstrap';

function setStateOnChange (setState) {
  return (e) => {
    setState(e.target.value)
  }
}

export default function SignIn () {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [done, setDone] = useState(false)

  function handleSubmit (e) {
    e.preventDefault()
    setDisabled(true)
    const formData = new FormData()
    formData.append('username', userName)
    formData.append('password', password)
    logIn(formData).then(({ data: { token } }) => {
      localStorage.setItem('token', token)
      setDone(true);
      setDisabled(false)
    }).catch(({ data }) => {
      const errorMessage = Object.values(data)[0][0]
      alert(errorMessage)
      setDisabled(false)
    })
  }

  if (done) {
    return <Redirect to="/dashboard"/>
  }

  return (
    <div className="login-container">
      <div className="login">
        <div className="login__title">
          Login
        </div>
        <form onSubmit={handleSubmit}>
          <div className="login-form">
            <div className="form-group">
              <label className="form-group__label"
                     htmlFor="username">Username</label>
              <input className="form-group__input" type="text"
                     name="username" id="" value={userName}
                     onChange={setStateOnChange(setUserName)}/>
            </div>

            <div className="form-group">
              <label className="form-group__label"
                     htmlFor="password">Password</label>
              <input className="form-group__input" type="password"
                     name="password" id="" value={password}
                     onChange={setStateOnChange(setPassword)}/>
            </div>
          </div>
          <div className="login-controls">
            <p className="link-text">Not yet a member? <Link
              to="/signup">Register</Link></p>
            <Button color="primary" type="submit" disabled={disabled}>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  )
}



/*import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authentication';
import { Button } from 'reactstrap';

class SignIn extends Component {

    constructor() {
      super();
      this.state = {
        username: '',
        password: '',
        errors: {}
      }
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleSubmit(e) {
      e.preventDefault();
      const user = {
        username: this.state.username,
        password: this.state.password,
      }
      this.props.loginUser(user);
    }

    componentDidMount() {
      if(this.props.auth.isAuthenticated) {
          this.props.history.push('/dashboard');
      }
  }

    componentWillReceiveProps(nextProps) {
      if(nextProps.auth.isAuthenticated) {
          this.props.history.push('/dashboard')
      }
      if(nextProps.errors) {
          this.setState({
              errors: nextProps.errors
          });
      }
    }

    render() {
      return (
        <div className="login-container">
          <div className="login">
            <div className="login__title">
              Login
            </div>
            <form onSubmit={ this.handleSubmit }>
              <div className="login-form">
                <div className="form-group">
                  <label className="form-group__label"
                         htmlFor="username">Email</label>
                  <input className="form-group__input" type="text" name="username" id="" 
                         onChange={this.handleInputChange} value={this.state.username} required/>
                </div>
    
                <div className="form-group">
                  <label className="form-group__label"
                         htmlFor="password">Password</label>
                  <input className="form-group__input" type="text" name="password" id=""
                         onChange={this.handleInputChange} value={this.state.password} required/>
                </div>
              </div>
              <div className="login-controls">
                <p className="link-text">Not yet a member? <Link
                  to="/signup">Register</Link></p>
                <Button color="primary" type="submit" >Submit</Button>
              </div>
            </form>
          </div>
        </div>
      )
    }
}

SignIn.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(SignIn)*/

