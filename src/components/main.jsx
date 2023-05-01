import React from 'react'
import { useState } from 'react';
import MicIcon from '@mui/icons-material/Mic';
import SettingsIcon from '@mui/icons-material/Settings';
import '../styles/style.css'

const Main = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleToggleClick = () => {
    setMenuOpen(!menuOpen);
  }

   const handleCloseClick = () => {
    setMenuOpen(false)
  }

  return (
    <div className={'main'}>
        <h1 className={'title'}>
            Helper Reader
        </h1>
        <div className={'flexy'}>
            <div className={'voice'}>
                <MicIcon className={'icon'}/>
            </div>
            <div className={'settings'}>
            <SettingsIcon onClick={handleToggleClick}  className={'icon'}/>
            </div>
        </div>
    </div>
  )
}

export default Main