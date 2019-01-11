import React from 'react';
import '../Styles/Controls.scss';
import PropTypes from 'prop-types';

const Controls = props => {
  return (
    <div>
      <button className="button" onClick={props.startTimer}>start</button>
    </div>
  )
}

Controls.propTypes = {

}

export default Controls