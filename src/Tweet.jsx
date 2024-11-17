import React, { useState, useContext} from 'react'
import CharacterCounter from './CharacterCounter.jsx'
import TimeLine from './Timeline.jsx'
import NoTweetFallback from './NoTweetFallback.jsx'
import './CSS/tweet.css'
import { currentAccountContext } from './Header.jsx'

function Tweet() {
  const newTime = new Date().toLocaleString();
  const currentAccount = useContext(currentAccountContext);
  const [tweetText, setTweetText] = useState('')
  const [tweetsData, setTweetsData] = useState([
    { 
      account: 'Cherryl28',
      tweet: 'Hi', 
      timeStamp: newTime,
      likes: 0, 
      comments: [], 
      shares: 0 
    }
  ]);
  const [newTweet, setNewTweet]= useState();

  const handleChange = (e) => {
    if (tweetText.length >= 150) {
      alert('Your tweet is too long!')
      setTweetText(tweetText.slice(0, -1))
    } else {
      setTweetText(e.target.value);
    }
  }

  const handleTweetSubmit = () => {
    if (tweetText.trim() !== '') { // Check for empty tweets
      setTweetsData([...tweetsData, { 
        account: currentAccount,
        tweet: tweetText, 
        timeStamp: newTime,
        likes: 0, 
        comments: [], 
        shares: 0 
      }]);
      setTweetText('');
    }
  };

  return (
    <>
      <div id="tweet-area">
        <div id='background'></div>
        <div id="tweet-area-sticky">
          <div className='flex gap-20px'>
            <div id="profile-picture">
              {currentAccount[0]}
            </div>

            <textarea id="tweet-something" placeholder='What happened today?' value={tweetText} onChange={handleChange} ></textarea>
          </div>

          <div id="edit-tweet" className='flex align-center justify-between border-bottom'>
            <div className='flex gap-30px'>
              <img src="/public/microphone.png" className='icon-24'/>
              <img src="/public/image.png" className='icon-24'/>
              <img src="/public/smile.png" className='icon-24'/>
            </div>

            <div style={{position: 'relative',}}>
              <CharacterCounter value={tweetText}/>
              <button onClick={handleTweetSubmit} className='orange-btn'>Share</button>
            </div>
          </div>
        </div>

        <div id="tweets">
          {tweetsData.length === 0 ? <NoTweetFallback /> : <TimeLine data={tweetsData}/>}
        </div>
      </div>
    </>
  )
}

export default Tweet
