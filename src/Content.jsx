import React from 'react'
import Tweet from './Tweet.jsx'
import Accounts from './Accounts.jsx'
import Navigation from './Navigation.jsx'

import './CSS/content.css'

function Content() {
  return (
    <div className='content-container'>
      <div>
        <Navigation />
      </div>

      <div>
        <Tweet />
      </div>

      <div>
        <Accounts />
      </div>
    </div>
  )
}

export default Content
