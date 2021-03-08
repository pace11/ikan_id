import React from 'react'

function Button({ children, onClick, block, disabled }) {
  return (
    <button
      className={`uikit-button ${block ? 'block' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  block: false,
}

export default Button
