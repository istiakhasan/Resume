import { Container,Grid} from '@mui/material';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Protfolio from './pages/Protfolio/Protfolio';
import Resume from './pages/Resume/Resume';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home'


import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'



function App() {
  return (
   <Container className={'top_60'}>
   

   
     <Grid  container  spacing={3}>
    
  
       <Grid 
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}>
           <Profile />
      
       </Grid>
       <Grid item xs >
       
      
       <Router>
         <Header />
         <div className="main-content">
           
             <Switch>
              <Route path="/protfolio" >
               <Protfolio />
              </Route>
              <Route path="/resume">
              <Resume />
       
              </Route>
              <Route path='/home' >
                <Home />
              </Route>
       
           </Switch>
        </div>
       
        
        
       
       </Router>
      
       <Footer />
      
       
       </Grid>

     </Grid>
   
        
   

   </Container>
  );
}

export default App;
