import React from 'react'
import styleHoc from './styleHOC'

const GoodButton = props => {
  return (
    <button
      style={props.style}
      onClick={props.onClick}
    >
      {props.text ? props.text : 'Good little button!'}
    </button>
  )
}

export default styleHoc(GoodButton)