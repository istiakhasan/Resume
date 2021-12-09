import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Nav,Navbar} from "react-bootstrap"
import {NavLink,withRouter} from "react-router-dom"
import HomeRounded from '@mui/icons-material/Home';
import resumeData from '../../Utils/resumeData'
import CustomButton from '../Button/Button'
import './Header.css'

import Telegram from '@mui/icons-material/Telegram';
const Header = (props) => {
    const pathName=props?.location?.pathname
    return (
        <Navbar sticky="top" className="header" expand="lg">
            {/* Home link*/}
        <Nav.Link as={NavLink} to='/home' className='header_navlink'>

            <Navbar.Brand className='header_home'>
                <HomeRounded />
            </Navbar.Brand>
        </Nav.Link>


        <Navbar.Toggle />
        <Navbar.Collapse>
            <Nav className="header_left">
                {/* Resume link */}

                <Nav.Link as={NavLink} to='/Resume'
                 className={pathName === "/Resume" ? "header_link_active":"header_link"}>
                Resume</Nav.Link>


                {/* Protfolio Link */}
                <Nav.Link as={NavLink} to='/Protfolio'
                 className={pathName === "/Protfolio" ? "header_link_active":"header_link"}>
                Portfolio</Nav.Link>
            </Nav>

            <div className="header_right" >
           {Object.keys(resumeData.socials).map(key=>( 
               <a href={resumeData.socials[key].link}>{resumeData.socials[key].icon}</a>

            ))}
            <CustomButton text={"Hire Me"} icon={<Telegram />} />
            </div>
        </Navbar.Collapse>
       
      </Navbar>
    )
}

export default withRouter(Header)

