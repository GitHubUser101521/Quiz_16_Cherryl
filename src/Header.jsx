import React from 'react'
import './CSS/header.css'

function Header() {
  return (
    <div className='flex justify-between align-center container'>
      <div>
        <p className='color-orange size-half-rem'>SO<span className='weight-800'>CIO.</span></p>
      </div>

      <div className='flex align-center gap-10px'>
        <img src="/public/check.png" alt="check-logo" className='logo'/>
        <p className='color-gray'><i>verified</i></p>
        <select id="account-select">
          <option value="">acc 1</option>
          <option value="">acc 2</option>
          <option value="">acc 3</option>
        </select>
      </div>
    </div>
  )
}

export default Header