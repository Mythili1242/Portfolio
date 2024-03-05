import React from 'react';
import {projects} from "../constants";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link} from "react-router-dom";
import { arrow } from '../assets/icons';
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className='container mt-5'>
    <h2 >My <span className='shadow fw-bold' style={{background : "linear-gradient(to top, #43CBFF, #9708CC)",backgroundClip:"text",color: "transparent"}}>Projects</span></h2>
    <div className='mt-4 d-flex flex-column '>
      <p className='text-muted'>
      I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>
    </div>
    <div className="d-flex flex-wrap justify-content-center">
      {projects.map((project)=>(
        // <div  style={{width:"18rem"}} key={project.name}>
        //   <div className='d-block container' style={{width:"12rem", height:"12rem"}}>
        //     <div className={`btn bg-${project.theme} rounded`} >
        //     <div className='btn bg-success d-flex justify-content-center align-items-center' style={{transform:"rotateZ(15deg)"}} >
        //       <img src={project.iconUrl} alt='project icon' className='w-50 h-50 object-fit-contain'  />
        //     </div>
        //     </div>
        //   </div>
        //   </div>
        <Card sx={{ maxWidth: "22rem",m:3,p:2 }} key={project.name}>
      <CardActionArea >
        <CardMedia
          component="img"
           sx={{width:70,margin:"auto",background:"linear-gradient(to top, #43CBFF, #9708CC)",marginTop:2,objectFit:"contain"}}
          src={project.iconUrl}
          alt="green iguana"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontFamily:"poppins"}}>
            {project.name}
          </Typography>
          <Typography variant="body2" color="rgb(100 116 139)">
            {project.description}
          </Typography>
          <div className='mt-2'>
            <Link to={project.link} target='_blank' className='fw-bold text-primary text-decoration-none '>Live Link</Link>
            <img src={arrow}  alt='arrow' className='ms-2'/>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
      ))}
    </div>
    <hr className='border-gray-200'/>
    <CTA />
    </section>
  )
}

export default Projects