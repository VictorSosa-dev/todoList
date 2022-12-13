import React from 'react'
import PropTypes from 'prop-types'
import './Checkmark.css'

function Checkmark(props) {
  return (
    <span 
    className={`checkmark ${props.done ? 'dimmed': ''}`}
    onClick={e => {
      props.onClickCheckmark(props.index);
    }}
    >
      <div className="checkmark_stem"/>
      <div className="checkmark_kick"/>
    </span>
  )
}

Checkmark.propTypes = {
    done: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    onClickCheckmark: PropTypes.func.isRequired
}

export default Checkmark