import React from 'react'
import authHoc from './AuthHoc'
import styleHoc from './styleHOC'

const Square = props => {
  return (
    <div {...props} style={{ ...props.style, width: '100px', height: '100px' }}>
      HELLO I AM A SQUARE
    </div>
  )
}

export default authHoc(styleHoc(Square))
