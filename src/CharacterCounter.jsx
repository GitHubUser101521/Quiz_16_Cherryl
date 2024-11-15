import React from 'react'

function CharacterCounter(value) {
    const myStyle = {
        color: 'gray',
        position: 'absolute',
        top: '-20px',
        fontSize: '0.7rem',
        right: '0',
      };      

  return (
    <div>
      <p style={myStyle}>{value.value.length}/150</p>
    </div>
  )
}

export default CharacterCounter
