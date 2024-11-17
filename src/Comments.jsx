import React, {useState} from 'react'
import './CSS/comments.css'

function Comments({comments, closeFunc}) {
    const [commentArr, setCommentArr] = useState(comments);
    const [newComment, setNewComment] = useState('');

    const handleOnChange = (e) => {
        setNewComment(e.target.value);
    }

    const addComment = () => {
        setCommentArr([...commentArr, newComment])
        new
        setNewComment('')
    }

  return (
    <>
        <div className="background-black"></div>
        <div className='comments-box'>
            <div className='flex justify-between' style={{justifyContent: 'space-between'}}>
                <h2 className='color-gray'>{`Comments (${commentArr.length})`}</h2>
                <span className='close-btn' onClick={closeFunc}>x</span>
            </div>

            {
                commentArr.map((el, index) => (
                    <p key={index}>{el}</p>
                ))
            }

            <textarea id="" value={newComment} placeholder='Leave a comment...' onChange={handleOnChange}></textarea>
            <button onClick={addComment}>Send</button>
        </div>
    </>
  )
}

export default Comments
