import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline, createMuiTheme } from '@material-ui/core'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import rootReducer from './reducers'
import theme from './theme'

const store = createStore(rootReducer)

ReactDOM.render(
  <ThemeProvider theme={createMuiTheme(theme)}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,

  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
