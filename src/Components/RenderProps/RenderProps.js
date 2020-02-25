import React from 'react'
import '../style.css'
import Toggle from './Toggle'
import Square from '../HOCS/Square'

const RenderProps = props => {
  return (
    <section className="advanced-react-section">
      <h1>
        Render Props
        <a
          href="https://reactjs.org/docs/render-props.html"
          rel="noopener"
          target="__blank"
        >
          Docs
        </a>
      </h1>
      <Toggle>
        <Square isAdmin darkMode />
      </Toggle>
    </section>
  )
}
export default RenderProps
