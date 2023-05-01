import React from 'react'
import Main from './components/main'
import Settings from './components/settings'

// importing styles
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <Main />
      <Settings />    
    </div>
  )
}

export default App