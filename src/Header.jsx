import React, {useState, createContext} from 'react'
import './CSS/header.css'
import jsonData from './Accounts.json';
import Content from './Content.jsx'

export const currentAccountContext = createContext();
export const accountsContext = createContext();

function Header() {
  const [accounts, newAccount] = useState(jsonData.accounts)
  const [currentAccount, setCurrentAccount] = useState(accounts[0]);

  const handleAccChange = (e) => {
    if (e.target.value === 'new') {
      const newAccName = prompt('Enter new account name:');
      if (newAccName) {
        newAccount([...accounts, newAccName]);
        setCurrentAccount(newAccName);
        e.target.value = newAccName;
      }
    } else {
      setCurrentAccount(e.target.value)
    }
  }

  return (
    <>
      <div className='flex justify-between align-center container'>
        <div>
          <p className='color-orange size-half-rem'>SO<span className='weight-800'>CIO.</span></p>
        </div>

        <div className='flex align-center gap-10px'>
          <img src="/public/check.png" alt="check-logo" className='logo'/>
          <p className='color-gray'><i>verified</i></p>
          <select id='account-select' onChange={handleAccChange}>
            {accounts.map((acc) => (
              <option key={acc} value={acc}>
                {acc}
              </option>
            ))}
            <option value="new">New Account</option>
          </select>
        </div>
      </div>
      <accountsContext.Provider value={accounts}>
      <currentAccountContext.Provider value={currentAccount}>
        <Content />
      </currentAccountContext.Provider>
      </accountsContext.Provider>
    </>
  )
}

export default Header;