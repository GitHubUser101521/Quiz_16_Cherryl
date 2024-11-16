import React from 'react'
import './CSS/timeline.css'

function Timeline({data}) {
  return (
    <div>
      <h2 className='color-gray'>What's happening</h2>
      {data.map((tweet, index) => (
        <div key={index} className='tweet-card'>
          <div className='flex align-center gap-10px'>
            <div className='profile-picture'>{tweet.account[0]}</div>

            <p className='weight-800'>{tweet.account}</p>

            <p className='time-stamp'>{tweet.timeStamp}</p>
          </div>
          <p>{tweet.tweet}</p>
          <div className='flex justify-around'>
            <div className='interact-icon'>
              <img src="/public/like.png"/>
              <p>{tweet.likes}</p>
            </div>

            <div className='interact-icon'>
              <img src="/public/chat-bubble.png"/>
              <p>{tweet.comments}</p>
            </div>

            <div className='interact-icon'>
              <img src="/public/share.png"/>
              <p>{tweet.shares}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
