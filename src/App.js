import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { StoreProvider } from 'easy-peasy'
import store from './redux/store'
import routes from './routes'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <StoreProvider store={store}>
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
    </StoreProvider>
  )
}

export default App
