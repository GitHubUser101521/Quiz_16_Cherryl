import React from 'react'
import Navigation from './Navigation.jsx'
import Tweet from './Tweet.jsx'
import Accounts from './Accounts.jsx'

import './CSS/content.css'

function Content() {
  return (
    <div className='content-container'>
      <div>
        <Navigation />
      </div>
      <div style={{flex: '1',}}>
        <Tweet />
      </div>
      <div>
        <Accounts />
      </div>
    </div>
  )
}

export default Content
