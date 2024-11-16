import React from 'react'
import Navigation from './Navigation.jsx'
import Tweet from './Tweet.jsx'
import Accounts from './Accounts.jsx'

import './CSS/content.css'

function Content() {
  return (
    <div className='content-container'>
      <Navigation />
      <Tweet />
      <Accounts />
    </div>
  )
}

export default Content
