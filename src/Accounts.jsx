import React, { useContext } from 'react'
import { currentAccountContext, accountsContext } from './Header.jsx'
import './CSS/accounts.css'
import followIcon from '/public/add.png'

function Accounts() {
  const currentAccount = useContext(currentAccountContext);
  const accs = useContext(accountsContext);

  const filteredAccs = accs.filter((acc) => acc !== currentAccount);

  return (
    <div id='account-preview'>
      <h3>Who to follow</h3>
      
      <div className='flex column'>
        {filteredAccs.map((acc, index) => (
            <div key={index} className='acc-card'>
              <div className="profile-picture">
                {acc[0]}
              </div>

              <p>{acc}</p>

              <img src={followIcon} className='follow-icon'/>
            </div>
          ))
        }
      </div>

      <p id="see-more-account">See more</p>
    </div>
  )
}

export default Accounts
