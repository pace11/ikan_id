import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import routes from './routes'
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      {routes.map((route, idx) => (
        <Route
          key={String(idx)}
          path={route.path}
          exact={route.exact}
          component={(props) => (
            <route.layout>
              <route.component {...props} />
            </route.layout>
          )}
        />
      ))}
    </BrowserRouter>
  )
}

export default App
