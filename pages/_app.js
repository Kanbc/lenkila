import App, {Container} from 'next/app'
import React from 'react'
// import withReduxStore from '../libs/with-redux-store'
import { Provider,connect } from 'react-redux'
import store from '../sagas'
import {compose,lifecycle} from 'recompose'
import Router from 'next/router';
import {getUserInfo} from '../store'


const bodyEnhancer = compose(
  connect(
    state => {
      return({
      isLogin: state.auth.isLogin,
    })
  },
    {getUserInfo},
  ),
  lifecycle({
    componentDidMount() {
      var checkLogin = window.sessionStorage.getItem('LenkilaLogin')
      var idLogin = window.sessionStorage.getItem('LenkilaLoginID')
      console.log('this.props',this.props)
      if(!checkLogin) {
        if(this.props.router.pathname === '/forgot-password'){
          Router.push({pathname:`/forgot-password`})
        }
        else  if(this.props.router.pathname === '/reset-password'){
          Router.push({pathname:`/reset-password`,query:{user_id:this.props.router.query.user_id}})
        }
        else{
          Router.push({pathname:'/login'})
        }
      }
      else {
        this.props.getUserInfo(idLogin)
      } 
    }
  }),
)

const Body = bodyEnhancer(({Component,...OtherProps}) => {
  return(
  <Component {...OtherProps} />
)})

class MyApp extends App {
  render () {
    return (
      <Container>
        <Provider store={store}>
         <Body  {...this.props}/>
        </Provider>
      </Container>
    )
  }
}



export default MyApp