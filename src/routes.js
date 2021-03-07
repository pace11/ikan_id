// layout
import Layout from './layout'

// pages
import Home from './pages/home'

const Routes = [
  {
    path: '/',
    exact: true,
    layout: Layout,
    component: Home,
  },
]

export default Routes
