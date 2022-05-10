import React from 'react'
import TittleContainer from './TittleContainer'
import {MenuContainer} from './MenuContainer'

export default function header() {
  return (
    <header className='header'>
      <TittleContainer />
      <MenuContainer />
    </header>
  )
}
