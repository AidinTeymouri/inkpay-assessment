import React, { useState } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import AddIcon from '@material-ui/icons/Add'
import { incrementCounter } from '../../actions'
import HomePage from '../HomePage'
import CounterPage from '../CounterPage'
import Counter from '../Counter'

function App({ ...props }) {
  const [value, setValue] = useState(0)
  const { incrementCounter, navigation } = props

  return (
    <Router>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          incrementCounter()
          setValue(newValue)
        }}
        showLabels
      >
        <BottomNavigationAction disabled={value === 0} label="HOME PAGE" icon={<HomeIcon />} component={Link} to="/" />
        <BottomNavigationAction
          disabled={value === 1}
          label="COUNTER PAGE"
          icon={<AddIcon />}
          component={Link}
          to="/counter"
        />
      </BottomNavigation>

      <Switch>
        <Route path="/counter">
          <CounterPage>
            <Counter counter={navigation.counter} />
          </CounterPage>
        </Route>
        <Route path="/">
          <HomePage>
            <Counter counter={navigation.counter} />
          </HomePage>
        </Route>
      </Switch>
    </Router>
  )
}

const mapStateToProps = state => ({
  navigation: state.navigation,
})

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(incrementCounter()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
