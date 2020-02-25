import React, { useState } from 'react'

const ToggleRenderProps = props => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="advanced-react-section">
      {props.render(isVisible, setIsVisible)}
    </div>
  )
}
export default ToggleRenderProps
