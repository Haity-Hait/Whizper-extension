import React from 'react'
import { useState, useEffect } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

const Settings = () => {

  //SELECT FONT ACTION
  const [selectedFont, setSelectedFont] = useState('Arial')

  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  }

  //FONT SIZE ACTION
  const [fontSize, setFontSize] = useState(16)

  const handleFontSizeChange = (event) => {
    setFontSize(parseInt(event.target.value))
  }

  //CLOSE TOGGLE BTN
  const [menuOpen, setMenuOpen] = useState(true)

  const handleToggleClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div
      className='overlay'
      style={{ visibility: menuOpen ? 'visible' : 'hidden' }}
    >
      <div className='container'>
        <header>
          <h2>settings</h2>

          <div className='icon'>
            <HighlightOffIcon
              onClick={handleToggleClick}
              className={'close_icon'}
            />
          </div>
        </header>

        <div className='iteam_container'>
          <h2>text settings</h2>

          <div className='iteam'>
            <div className='size_slider'>
              <h3>font size</h3>
              <input
                type='range'
                min='12'
                max='30'
                value={fontSize}
                onChange={handleFontSizeChange}
              />
            </div>

            <div className='select'>
              <h3>font style</h3>
              <select
                id='font-dropdown'
                value={selectedFont}
                onChange={handleFontChange}
                onClick={() => {
                  document.p.style.fontFamily = selectedFont
                }}
              >
                <option value='Arial'>Arial</option>
                <option value='Helvetica'>Helvetica</option>
                <option value='Times New Roman'>Times New Roman</option>
                <option value='Courier New'>Courier New</option>
                <option value='Verdana'>Verdana</option>
              </select>
              {/* <p>{selectedFont}</p> */}
            </div>
          </div>
        </div>
        <p style={{ fontSize: `${fontSize}px` }}>Sample Text</p>
      </div>
    </div>
  )
}

export default Settings