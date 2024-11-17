import React, {useState, useContext} from 'react'
import './CSS/comments.css'
import { currentAccountContext } from './Header.jsx'

function Comments({comments, closeFunc}) {
    const currentAccount = useContext(currentAccountContext);
    const [newComment, setNewComment] = useState('');

    const handleOnChange = (e) => {
        setNewComment(e.target.value);
    }

    const addComment = () => {
        comments.push(newComment);
        setNewComment('')
    }

  return (
    <>
        <div className="background-black"></div>
        <div className='comments-box flex column justify-between'>
            <div>
                <div className='flex justify-between' style={{justifyContent: 'space-between'}}>
                    <h2 className='color-gray'>{`Comments (${comments.length})`}</h2>
                    <span className='close-btn' onClick={closeFunc}>x</span>
                </div>
                <div>
                    {
                        comments.map((el, index) => (
                            <p key={index}>{el}</p>
                        ))
                    }
                </div>
            </div>

            <div className='flex justify-between align-center'>
                <div className="profile-picture" style={{width: '35px'}}>{currentAccount[0]}</div>

                <textarea id="comment-something" value={newComment} placeholder='Leave a comment...' onChange={handleOnChange} className='flex align-center' />

                <button onClick={addComment} className="orange-btn" style={{borderRadius: '5px'}}>Send</button>
            </div>
        </div>
    </>
  )
}

export default Comments
