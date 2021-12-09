import React,{useState} from 'react'
import {Grid,Tabs,Tab, CardMedia, CardContent, Typography,Card,Grow, DialogTitle, DialogContent, Dialog, DialogActions} from '@mui/material'
import resumeData from '../../Utils/resumeData'
import ImageGallery from '../../components/ImageGallary/Imagegallary';



import './Protfolio.css'


const Protfolio = () => {
    const [tabvalue,setTabValue]=useState('All')
    const [projectDialog,setprojectDialog]=useState(false)
 
    return (
        
           <Grid container className="section pb_45 pt_45">
               {/* Title*/}
               <Grid item className="section_title" mb_30>
                   <span></span>
                   <h6 className="section_title_text">Portfolio</h6>

               </Grid>
               {/* Tabs*/}
               <Grid item xs={12}>
                   <Tabs value={tabvalue} indicatorColor='white' className='custom_tabs'
                   onChange={(event,newValue)=>setTabValue(newValue)}>
                       <Tab label='All' value='All' className={tabvalue==='All'?'customTabs_item active':'customTabs_item'} />
                  
                  {[...new Set(resumeData.projects.map(item=>item.tag))].map(
                      (tag)=>(
                          <Tab label={tag}
                          value={tag}
                          className={ tabvalue===tag?"customTabs_item active":"customTabs_item"}
                          />

                  ))}
                   </Tabs>
               </Grid>
               {/* Cards */}
               <Grid item xs={12}>
                   <Grid container spacing={3}>
                      {resumeData.projects.map((project)=>(
                          <> 
                          {tabvalue===project.tag || tabvalue==="All"?(
                              <Grid item xs={12} sm={6} md={4} lg={3}>
                                  <Grow in timeout={1000}>
                                      <Card className="customCard" onClick={()=>setprojectDialog(project)}>
                                          
                                              <CardMedia className="customCard_image" image={project.images[0]}
                                               title={project.title} />
                                              <CardContent>
                                                  <Typography variant='body2' className="customcard_title">{project.title}</Typography>
                                                  <Typography variant='caption' className="customcard_caption">{project.caption}</Typography>
                                              </CardContent>
                                          
                                      </Card>
                                  </Grow>
                              </Grid>
                          ):null}
                          </>
                      ))}

                   </Grid>
               </Grid>
 <Dialog 
 open={Boolean(projectDialog)}
  onClose={()=>setprojectDialog(false)}
   className="projectDialog"
    maxWidth={"lg"}
     fullWidth>

     <DialogTitle onClose={()=>setprojectDialog(false)}>
         {projectDialog.title}
         </DialogTitle>
                {/* <DialogTitle className="projectDialog" open={projectDialog} onClose={()=>setprojectDialog(false)} fullWidth>{projectDialog.title}</DialogTitle> */}
               <DialogContent style={{height:"80vh"}}>
                   {projectDialog.images &&(
                       <ImageGallery images={projectDialog.images} />
                   )}
               
          
               
                    <Typography className="projectdialog_description">
                         {projectDialog.description}
                         </Typography>
                   
                 </DialogContent>  
                <DialogActions className="projectdialog_action">
                    {projectDialog?.links?.map(link=>(
                    <a href={link.link} 
                    className="projectdialog_icon">
                        {link.icon}
                        </a>
                    ))}
                </DialogActions>
</Dialog>


           </Grid>
            
        
    )
}

export default Protfolio
