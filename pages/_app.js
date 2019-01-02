import App, {Container} from 'next/app'
import React from 'react'
// import withReduxStore from '../libs/with-redux-store'
import { Provider,connect } from 'react-redux'
import store from '../sagas'


class MyApp extends App {
  render () {
    const {Component, pageProps, reduxStore} = this.props
    return (
      <Container>
        <Provider store={store}>
         <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}



export default MyApp