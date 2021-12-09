import React from 'react'
import {Grid,Paper, Typography,Icon, TextField} from '@mui/material'
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline'
import resumeData from '../../Utils/resumeData'
import './Resume.css'
import WorkIcon from '@mui/icons-material/Work';
import TimelineItem from '@mui/lab/TimelineItem'

import TimelineContent from '@mui/lab/TimelineContent'
import SchoolIcon from '@mui/icons-material/School';
import TimelineDot from '@mui/lab/TimelineDot'
import Custombutton from './../../components/Button/Button'

const Resume = () => {
    return (
        <>
        {/* About me */}
        {/* <Grid container className="section pb_45 pt_45">
            <Grid item  className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">About Me</h6>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body2" className="aboutme_text">
                    {resumeData.AboutMe}
                  
                  

                </Typography>


            </Grid>
        </Grid> */}
        {/* Education and Experiance */}
        <Grid container className="section pb_45 pt_45">
        <Grid item  className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">Resume</h6>
            </Grid>
            <Grid item xs={12}>
                <Grid container className="resume_timeline"> 
                {/* Experience */}
                <Grid item sm={12} md={6}>
               <CustomTimeline title="work Experience" icon={<WorkIcon />} >
                     {resumeData.experiences.map((experience)=>( 
                         <TimelineItem>
                             <CustomTimelineSeparator />
                             

                            
                             <TimelineContent className="timeline_content">
                                 <Typography className="timeline_title">{experience.title}</Typography>
                                 <Typography variant="caption" className="timeline_date">{experience.date}</Typography>
                                 <Typography variant="body2" className="timeline_description">{experience.description}</Typography>
                             </TimelineContent>
                         </TimelineItem>
                     ))}


                   </CustomTimeline>


                </Grid>
                {/* Education */}
                <Grid item sm={12} md={6}>
               <CustomTimeline title="Education" icon={<SchoolIcon />} >
                     {resumeData.education.map((education)=>( 
                         <TimelineItem>
                             <CustomTimelineSeparator />
                             

                            
                             <TimelineContent className="timeline_content">
                                 <Typography className="timeline_title">{education.title}</Typography>
                                 <Typography variant="caption" className="timeline_date">{education.date}</Typography>
                                 <Typography variant="body2" className="timeline_description">{education.description}</Typography>
                             </TimelineContent>
                         </TimelineItem>
                     ))}


                   </CustomTimeline>


                </Grid>
            </Grid>

           </Grid>
        </Grid>

        {/* Service */}

        <Grid container className="section pb_45">

        <Grid item  className="section_title mb_30 ">
                <span></span>
                <h6 className="section_title_text">My Services</h6>
            </Grid>


            <Grid item xs={12}  >
                <Grid container spacing={3} >
                    {resumeData.services.map(service=>(
                        <Grid item xs={12} sm={6} md={4}>
                            <div className="service">
                                <Icon className="service_icon">{service.icon}</Icon>
                                <Typography className="service_title" variant='h6'>{service.title}</Typography>
                                <Typography className="service_description" variant='body2'>{service.description}</Typography>
                            </div>

                        </Grid>
                    ))}
                </Grid>
            </Grid>

            </Grid>


        
        {/* Skills */}
        
        <Grid container   className="section pb_45 graybg p_50">
            <Grid item xs={12}>
                <Grid container justifyItems='space-between' spacing={3}>

                {resumeData.skills.map(skill=>(
                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={0} className='skill'>

                        <Typography variant='h6' className='skills_title'>
                            {skill.title}
                        </Typography>
                        {skill.description.map(element=>(
                            <Typography variant='body2' className="skill_description">
                                
                                <TimelineDot className='timeline_dot' variant={'outlined'} />
                                {element}
                            </Typography>
                        ))}
                    </Paper>
                </Grid>
            ))}
                    
                </Grid>
            </Grid>
      


        </Grid>
        {/* Contact */}
        <Grid container className="section pt_45 pb_45" spacing={6}>
            {/* contact form */}
    <Grid item xs={12} lg={7}>
        <Grid container> 
        <Grid item  className="section_title mb-3 ">
                <span></span>
                <h6 className="section_title_text">Contact Form</h6>
            </Grid>
            <Grid item xs={12}>
                <Grid container className="istiak" spacing={3} >
                    <Grid className="robin" item xs={12} sm={6}>
                        <TextField variant='standard' fullWidth name='name' label='Name' />
                        
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField variant='standard' fullWidth name='email' label='E-mail' />
                        
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant='standard' fullWidth name='message' label='Message' multiline rows={4} />
                        
                    </Grid>
                    <Grid item xs={12}>
                        <Custombutton text="Submit" />
                        
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
   

    </Grid>
    {/* contact information */}
    <Grid item xs={12} lg={5}>

        <Grid container >

        <Grid item  className="section_title mb_30 ">
                <span></span>
                <h6 className="section_title_text">Contact Information</h6>
            </Grid>
            <Grid item xs={12} >
                
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography className='contactInfo_item'>
                            <span>Address:</span>{resumeData.address}
                        </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography className='contactInfo_item'>
                            <span>Phone:</span>{"---------------------"}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className='contactInfo_item'>
                            <span>Email:</span>{resumeData.Email}
                        </Typography>
                    </Grid>
                </Grid>
           
           
           
           
            </Grid>
            <Grid item xs={12}>
                <Grid container className="contactInfo_socialsContainer">
                    {Object.keys(resumeData.socials).map(key=>(
                        <Grid item className="contactInfo_social">
                            <a href={resumeData.socials[key].icon}>{resumeData.socials[key].icon}</a>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

        </Grid>

    </Grid>



        </Grid>
        
        
            
        </>
    )
}

export default Resume
