import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

import {delFunct} from '../actions'

let Word = ({dispatch, id, word}) => (
  <div>{word}
    <button
      onClick={() => dispatch(delFunct(id))}
      >DEL</button></div>
)

Word.propTypes = {
  id: PropTypes.number.isRequired,
  word: PropTypes.string.isRequired
}

Word = connect()(Word)

export default Word
