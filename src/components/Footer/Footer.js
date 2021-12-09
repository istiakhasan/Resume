import React from 'react'
import './Footer.css'
import {Typography} from '@mui/material'
import resumeDtata from '../../Utils/resumeData'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_left">
                <Typography className="footer_name">
                    {resumeDtata.name}

                </Typography>
            </div>
            <div className="footer_right">

            <Typography className="footer_copyright">
                Designed and Developed by <a href='/' >Istiak Hasan</a>
                <br/>
                Clone idea from Them Forest 

            </Typography>
            </div>
 
            
        </div>
    )
}

export default Footer
