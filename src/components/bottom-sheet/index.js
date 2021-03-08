import React from 'react'

function BottomSheet({ show, onClick, children }) {
  return (
    <React.Fragment>
      <div
        className={`bottom-sheet-filter ${show ? 'show' : ''} `}
        onClick={() => onClick()}
      ></div>
      <div className={`uikit-bottom-sheet ${show ? 'show' : ''}`}>
        <div className="bottom-sheet-content">{children}</div>
      </div>
    </React.Fragment>
  )
}

export default BottomSheet
