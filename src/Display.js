import React from 'react'
import PropTypes from 'prop-types'

const Display = (props) => {
    
    const onChange = (e) => {
        props.onSecondsChange(e.target.value);
    }

  return (
    <div>
        <div className='display'>
            {props.time}
        </div>

        <input value={props.seconds} onChange={onChange}/>
    </div>
  )
}

Display.propTypes = {

}

export default Display