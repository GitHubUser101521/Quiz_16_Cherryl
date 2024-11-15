import React from 'react'
import UserTweets from './UserTweets.jsx'

import './CSS/tweet.css'

function Tweet() {
  return (
    <>
      <div id="tweet-area">
        <div className='flex gap-20px'>
          <div id="profile-picture">
            C
          </div>

          <textarea id="tweet-something" placeholder='What happened today?'></textarea>
        </div>

        <div id="edit-tweet" className='flex align-center justify-between border-bottom'>
          <div className='flex gap-30px'>
            <img src="/public/microphone.png" className='icon-24'/>
            <img src="/public/image.png" className='icon-24'/>
            <img src="/public/smile.png" className='icon-24'/>
          </div>

          <button>Share</button>
        </div>

        <div id="tweets">
          <h2 className='color-gray'>What's happening</h2>
          <UserTweets />
        </div>
      </div>
    </>
  )
}

export default Tweet
