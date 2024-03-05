import React from 'react';
import { skills,experiences } from '../constants';
import {styled} from "@mui/material/styles";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const About = () => {

  const StyledImg=styled("img")`
  transition:transform 450ms;
  :hover{
  transform:scale(1.2);
  cursor:pointer;
}
  `  
  return (
    <section className='container mt-5'>
      <h2 >Hello,I'm <span className='shadow fw-bold' style={{background : "linear-gradient(to top, #43CBFF, #9708CC)",backgroundClip:"text",color: "transparent"}}>Mythili Galidevara</span></h2>
      <div className='mt-4 d-flex flex-column '>
        <p>
          Software engineer based in India,specializing in technical education through hands-on learning and building applications.
        </p>
      </div>
      <div className='py-5 flex flex-column'>
        <h2>My Skills</h2>
        <div className='mt-5 d-flex flex-wrap gap-5'>
          {skills.map((skill,index)=>(
            <div className='container' style={{display:"block",width:"20%",height:"20%"}} key={index}>
              <div>
                <StyledImg src={skill.imageUrl} alt={skill.name} width={50} height={50} style={{objectFit:"contain"}} />
                </div>
              </div>
          ))}
        </div>
      </div>

      <div className="py-5">
        <h2>Work Experience</h2>
        {/* <div className='mt-4 d-flex flex-column '>
        <p>
        I've worked with all sort of companies, levelling up my skills and teaming up with smart people,Here is the rundown:
        </p>
      </div> */}
      <div className="d-flex mt-5">
            <VerticalTimeline>
              {experiences.map((experience)=>(
                <VerticalTimelineElement key={experience.company_name} date={experience.date} icon={
                  <div className='d-flex justify-content-center align-items-center w-100 h-100'>
                    <img src={experience.icon} alt={experience.company_name}  style={{objectFit:"contain",width:"60%",height:"60%"}} />
                  </div>
                } iconStyle={{background:experience.iconBg}} contentStyle={{borderBottom:"8px",borderStyle:"solid",borderBottomColor:experience.iconBg,boxShadow:"none"}}>
                  <div>
                    <h5 className='fw-bold' style={{fontFamily: "'Poppins', 'sans-serif'"}}>{experience.title}</h5>
                    <p className='fw-medium m-0'>{experience.company_name}</p>
                  </div>
                  <ul className='my-2 list-type-disc ms-4 p-2'>
                    {experience.points.map((point,index)=>(
                      <li key={`experience-point-${index}`} className='fw-light '>
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
      </div>
      </div>
      <hr className='border-gray-200' />
      <CTA />
      <div></div>
    </section>
  )
}

export default About;