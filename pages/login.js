import React, { Component } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import {login} from '../store'
import {connect} from 'react-redux'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMessage: '',
    };

    this.handleValidation = this.handleValidation.bind(this);
  }
  componentDidMount() {
    var id = window.document.getElementById("username");
    var password = window.document.getElementById("password");
    id.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
       event.preventDefault();
       window.document.getElementById("login").click();
      }
    });
    
    password.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
       event.preventDefault();
       window.document.getElementById("login").click();
      }
    });
  }
  componentWillReceiveProps(nextProps){
    if(!nextProps.errMessage)
    this.setState({
      errorMessage: 'Username หรือ Password ไม่ถูกต้อง กรุณากรอกอีกครั้งหรือติดต่อเจ้าหน้าที่',
    });
  }

  handleValidation() {
    const username = this.state.username;
    const password = this.state.password;

    if (username === '' || password === '') {
      this.setState({
        errorMessage: 'กรุณากรอก Username และ Password ให้ครบ',
      });
    } else {
      // call login API
      // ถ้า success ไปหน้าแรกของระบบ(รายการวันนี้)
      // ถ้า fail set state errorMessage แบบข้างล่าง
      // ===== Example =====
      this.props.login({username:username,password:password})
   
    }
  }

 


  render() {
    const { errorMessage } = this.state;
    return (
      <div className="root">
        <Head>
          <title>Lenkila : Login</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/img/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/static/img/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/static/img/favicon/safari-pinned-tab.svg" color="#d58d5b" />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet" />
          <link href="/static/react-datepicker.min.css" rel="stylesheet" />
          <link href="/static/fullcalendar/fullcalendar.min.css" rel="stylesheet" />
          <link href="/static/fullcalendar-scheduler/scheduler.min.css" rel="stylesheet" />
          <link href="/static/fullcalendar/fullcalendar.print.min.css" rel="stylesheet" media="print" />
          <script type="text/javascript" src="/static/fullcalendar/lib/moment.min.js" />
        </Head>
        <div className="content d-flex flex-row">
          <div className="page-container">
            <div id="form-login">
              <div className="form-group">
                <label className="lenkila-label" htmlFor="username">
                  Username
                </label>
                <input type="text" className="form-control" id="username" placeholder="Enter username" onChange={e => this.setState({ username: e.target.value })} />
              </div>
              <div className="form-group">
                <label className="lenkila-label" htmlFor="password" >
                  Password
                </label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={e => this.setState({ password: e.target.value })} />
              </div>
              {
                errorMessage !== '' &&
                <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              }
              <button type="submit" id='login' className="btn btn-primary" onClick={()=>{
                  this.handleValidation()
              }}>
                Login
              </button>
              <div className="form-group lenkila-forgotpass">
                <a href="/forgot-password">
                  Forgot your password?
                </a>
              </div>
            </div>
          </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous" />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous" />
        <style jsx>
          {`
            .root {
              width: 100vw;
              height: 100vh;
              overflow: hidden;
            }
            #form-login {
              width: 30%;
              margin: 150px auto 0 auto;
            }
            .lenkila-forgotpass{
              text-align: center;
              margin-top: 20px;
              a{
                color: #fff;
              }
            }
            .page-container {
              background: linear-gradient(315deg, #000 0, #062a64 100%);
              padding: 25px;
              overflow: hidden;
              width: 100%;
              height: 100vh;
              overflow-y: scroll;
              label{
                color:#ababab;
              }
              .btn {
                width: 100%;
                margin-top: 1.5rem;
                background-color: #062c69;
                border: none;
              }
              .btn:hover{
                background-color: #0e3980;
              }
            }
            @media (max-width: 992px) {
              .page-container {
                padding: 25px 25px 100px 25px;
                width: 100%;
              }
              #form-login {
                width: 50%;
              }
            }
            @media (max-width: 576px) {
              .page-container {
                padding: 10px 10px 50px 10px;
                width: 100%;
              }
              #form-login {
                width: 80%;
              }
            }
          `}
        </style>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    isLogin: state.auth.isLogin,
    errMessage:state.auth.errorMessage,
  }
}

export default connect(mapStateToProps,{login})(Login);
