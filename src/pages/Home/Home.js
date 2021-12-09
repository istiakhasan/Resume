import React from 'react'
import { Grid,Typography } from '@mui/material'
import resumeData from '../../Utils/resumeData'

const Home = () => {
    return (
        <div>
              <Grid container className="section pb_45 pt_45">
            <Grid item  className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">About Me</h6>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body2" className="aboutme_text">
                    {resumeData.AboutMe}
                  
                  

                </Typography>


            </Grid>
        </Grid>
            
        </div>
    )
}

export default Home
