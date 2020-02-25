import React, {useState} from 'react'

const Toggle = props => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div>
      {isVisible && props.children}
      <button
        onClick={() => setIsVisible(!isVisible)}
      >
        SHOW/HIDE
      </button>
    </div>
  )
}

export default Toggle
