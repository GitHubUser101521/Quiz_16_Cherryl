import React, { useState, useEffect } from 'react'
import UserTweets from './UserTweets.jsx'
import CharacterCounter from './CharacterCounter.jsx'
import './CSS/tweet.css'

function Tweet() {
  const [tweetText, setTweetText] = useState('')
  const [tweetsData, setTweetsData] = useState([]);
  const [newTweet, setNewTweet]= useState({
    // account: currentaAccount,
    tweet: tweetText,
    likes: 0,
    comments: 0,
    shares: 0,
  });

  const handleChange = (e) => {
    console.log(tweetText)
    setTweetText(e.target.value);
    setNewTweet({
      // account: currentaAccount,
      tweet: tweetText,
      likes: 0,
      comments: 0,
      shares: 0,
    })
  }

  const handleTweetSubmit = () => {
    if (tweetText.trim() !== '') { // Check for empty tweets
      setTweetsData([...tweetsData, { tweet: tweetText, likes: 0, comments: 0, shares: 0 }]);
      setTweetText('');
    }
  };

  return (
    <>
      <div id="tweet-area">
        <div className='flex gap-20px'>
          <div id="profile-picture">
            C 
            {/* Slice the first initial of the account */}
          </div>

          <textarea id="tweet-something" placeholder='What happened today?' value={tweetText} onChange={handleChange}></textarea>
        </div>

        <div id="edit-tweet" className='flex align-center justify-between border-bottom'>
          <div className='flex gap-30px'>
            <img src="/public/microphone.png" className='icon-24'/>
            <img src="/public/image.png" className='icon-24'/>
            <img src="/public/smile.png" className='icon-24'/>
          </div>

          <div style={{position: 'relative',}}>
            <CharacterCounter value={tweetText}/>
            <button onClick={handleTweetSubmit}>Share</button>
          </div>
        </div>

        <div id="tweets">
          <h2 className='color-gray'>What's happening</h2>
          {tweetsData.map((tweet, index) => (
            <div className="tweet-box" key={index}>
              <p>{tweet.tweet}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Tweet
