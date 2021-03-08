import React from 'react'

function Input({ label, placeholder, value, onChange, type }) {
  return (
    <div className="uikit-input">
      <p className="title">{label}</p>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
}

export default Input
