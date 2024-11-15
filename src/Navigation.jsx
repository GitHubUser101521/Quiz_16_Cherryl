import React from 'react'

import './CSS/navigation.css'

function Navigation() {
  return (
    <div className='flex column gap-20px'>
      <div className='flex align-center gap-20px size-half-rem'>
        <img className="icon-30" src="/public/home.png"/>
        <p className='weight-800'>Home</p>
      </div>
      <div className='flex align-center gap-20px size-half-rem'>
        <img className="icon-30" src="/public/notification.png"/>
        <p className='weight-800'>Notification</p>
      </div>
      <div className='flex align-center gap-20px size-half-rem'>
        <img className="icon-30" src="/public/messenger.png"/>
        <p className='weight-800'>Messages</p>
      </div>
      <div className='flex align-center gap-20px size-half-rem'>
        <img className="icon-30" src="/public/user.png"/>
        <p className='weight-800'>Profile</p>
      </div>

      <button id='trending-btn'>Trending</button>
    </div>
  )
}

export default Navigation
