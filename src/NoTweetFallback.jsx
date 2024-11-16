import React from 'react'

function NoTweetFallback() {

    const divStyle = {
        height: 'calc(100vh - 18rem)',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        color: 'gray',
        opacity: '0.5'
    }

  return (
    <div style={divStyle}>
        <h2>No tweets yet, be the one to start a conversation!</h2>
    </div>
  )
}

export default NoTweetFallback
