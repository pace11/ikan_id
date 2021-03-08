import React, { useState } from 'react'
import Outclick from 'react-outclick'

function Select({ label, onClick, value, items }) {
  const [show, setShow] = useState(false)

  return (
    <div className="uikit-select">
      <Outclick onOutsideClick={() => setShow(false)}>
        <p className="title">{label}</p>
        <div
          className="text-value"
          onClick={() => setShow((show) => !show)}
        >
          <input
            className="value-active"
            value={value}
            defaultValue={value}
          />
          <div className={`value-content ${show ? 'show' : ''}`}>
            {items &&
              items
                .filter((v, i, a) => a.indexOf(v) === i)
                .map((item, idx) => (
                  <p
                    key={String(idx)}
                    onClick={() => onClick(item)}
                    className={`${item === value ? 'active' : ''}`}
                  >
                    {item}
                  </p>
                ))}
          </div>
        </div>
      </Outclick>
    </div>
  )
}

export default Select
