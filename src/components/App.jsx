import React from 'react'

import AddWord from './AddWord'
import WordsContainer from '../containers/WordsContainer'
import ImgsContainer from '../containers/ImgsContainer'
import AddImg from './AddImg'

export default React.createClass({
  render () {
    return (
      <div className='app-container'>
        <WordsContainer />
        <AddWord />
        <AddImg />
        <ImgsContainer />
      </div>
    )
  }
})
