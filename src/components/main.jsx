import React from 'react'
import classes from '../scss/styles.module.scss'
import MicIcon from '@mui/icons-material/Mic';
import SettingsIcon from '@mui/icons-material/Settings';


const main = () => {
  return (
    <div className={classes.main}>
        <h1 className={classes.title}>
            Helper Reader
        </h1>
        <div className={classes.flexy}>
            <div className={classes.voice}>
                <MicIcon className={classes.icon}/>
            </div>
            <div className={classes.settings}>
            <SettingsIcon  className={classes.icon}/>
            </div>
        </div>
    </div>
  )
}

export default main