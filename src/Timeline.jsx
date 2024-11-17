import React, { useEffect, useState } from 'react'
import './CSS/timeline.css'
import Comments from './Comments.jsx'

function Timeline({data}) {
  const [changeDetected, setDetection] = useState(false);
  const [isCommentOpen, setCommentVisibility] = useState(false);

  const addLike = (i) => {
    data[i].likes += 1;
    setDetection(true);
  }

  const addShare = (i) => {
    data[i].shares += 1;
    setDetection(true);
  }

  const openComment = () => {
    setCommentVisibility(true)
  }

  const closeFunc = () => setCommentVisibility(false);

  useEffect(() => {
    setDetection('false')
  }, [changeDetected, isCommentOpen])

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
            <div className='interact-icon' onClick={() => addLike(index)}>
              <img src="/public/like.png"/>
              <p>{tweet.likes}</p>
            </div>

            <div className='interact-icon' onClick={() => openComment()}>
              <img src="/public/chat-bubble.png"/>
              <p>{tweet.comments.length}</p>
            </div>

            <div className='interact-icon' onClick={() => addShare(index)}> 
              <img src="/public/share.png"/>
              <p>{tweet.shares}</p>
            </div>
          </div>

          {isCommentOpen && <Comments comments={tweet.comments} closeFunc={closeFunc}/>}
        </div>
      ))}
    </div>
  )
}

export default Timeline
