import App, {Container} from 'next/app'
import React from 'react'
// import withReduxStore from '../libs/with-redux-store'
import { Provider,connect } from 'react-redux'
import store from '../sagas'
import {compose} from 'recompose'
import Login from './login'


const bodyEnhancer = compose(
  connect(
    state => ({
      isLogin: state.auth.isLogin,
    }),
    {},
  ),

)

const Body = bodyEnhancer(({isLogin, Component, ...OtherProps}) => console.log('islogin',isLogin) ||(
  isLogin?<Component {...OtherProps} />:<Login/>
))
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