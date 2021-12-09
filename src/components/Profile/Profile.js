import { Typography } from '@mui/material'
import React from 'react'
import './Profile.css'
import  imgistiak from '../../assets/images/istiak2.jpg'
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline'
import resumeData from '../../Utils/resumeData'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineContent from '@mui/lab/TimelineContent'
import CustomButtom from '../Button/Button'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Image from 'react-bootstrap/Image'



const CustomTimelineItem=({title,text,link})=>(  
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className="timeline_content">
            {link ? (
                <Typography className="timelineItem_text">
                    <span>{title}:</span>
                    <a href={link} >
                        {text} 
                    </a>
                </Typography>
            ):(
                <Typography className="timelineItem_text">
                    <span>{title}:</span>{text}
                </Typography>
            
            )}
        </TimelineContent>
    </TimelineItem>
);
const profile = () => {
    return (
        <div className='profile container_shadow col-sm-center'>
            <div className='profile_name'>
                <Typography className='name'>{resumeData.Name}</Typography>
                <Typography className='title'>{resumeData.Title}</Typography>
            </div>
            <figure className='profile_image'>
                <Image className='istiakimage' src={imgistiak}  fluid />

            </figure>
            <div className='profile_information'>
                <CustomTimeline icon={<PersonOutlineIcon />}>
                <CustomTimelineItem title='Name' text={resumeData.Name} />
                <CustomTimelineItem title='Title' text={resumeData.Title} />
     
                {Object.keys(resumeData.socials).map((key)=>(
                    <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />
                ))}
                </CustomTimeline>
              <div className="button_container">
              <CustomButtom text={'Download Cv'} icon={<CloudDownloadIcon />}  />
              </div>
                
            </div>
            
           
            
        </div>
    )
}

export default profile
