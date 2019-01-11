import React from 'react'
import PropTypes from 'prop-types'

const Display = (props) => {
    
    const onChange = (e) => {
        props.onSecondsChange(e.target.value);
    }

  return (
    <div>
        <div className='display'>
            <input value={props.time} onChange={onChange} />
        </div>

    </div>
  )
}

Display.propTypes = {

}

export default Display