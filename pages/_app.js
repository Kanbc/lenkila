import App, {Container} from 'next/app'
import React from 'react'
// import withReduxStore from '../libs/with-redux-store'
import { Provider,connect } from 'react-redux'
import store from '../sagas'
import {compose,lifecycle} from 'recompose'
import Router from 'next/router';


const bodyEnhancer = compose(
  connect(
    state => {
      return({
      isLogin: state.auth.isLogin,
    })
  },
    {},
  ),
  lifecycle({
    componentDidMount() {
      var checkLogin = window.sessionStorage.getItem('LenkilaLogin')
      if(!checkLogin) Router.push({pathname:'/login'})
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