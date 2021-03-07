import React from 'react'
import Header from '../components/header'

function Layout({ children }) {
  return (
    <div className="uikit-layout">
      <Header />
      <div className="row-content">{children}</div>
    </div>
  )
}

export default Layout
