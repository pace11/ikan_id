import React from 'react'
import Header from '../components/header'

function Layout({ children }) {
  return (
    <div className="uikit-layout">
      <Header />
      <div className="uikit-layout-content">
        <div className="wrapper-content">{children}</div>
      </div>
    </div>
  )
}

export default Layout
