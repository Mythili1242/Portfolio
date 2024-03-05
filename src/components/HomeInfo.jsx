import React from 'react';
import {Link} from "react-router-dom";
const InfoBox=({text,link,btnText})=>(
    <div className='card p-3 bg-primary text-white' style={{width: "18rem",position: 'relative'}}>
        <p className='fs-6 fs-sm-5 text-center card-text ' >{text}</p>
        {/* <Link to={link} className='btn btn-md fs-6 bg-white text-primary' style={{ position: 'absolute',  bottom: '-20%',width:"80%",transform:"translateX(50%)" }} >
            {btnText}<i className="fa-solid fa-arrow-right p-2 "></i> 
           
        </Link> */}
          <div className="d-flex justify-content-center" style={{ position: 'absolute', bottom: '-20%', width: '100%',marginRight:"20%" }}>
    <Link to={link} className='btn btn-md fs-6 bg-white text-primary' style={{ width: '80%',marginLeft: "-10%" }}>
      {btnText}<i className="fa-solid fa-arrow-right p-2"></i>
    </Link>
  </div>
    </div>
)

    const renderContent={
        1:(
            <h1 className='px-4 py-2 text-center text-white bg-primary mx-5 fs-6 my-2' style={{borderRadius:20}}>
                Hi, I am <span style={{fontSize:"bold"}}>Mythili</span> 👋
                <br />
                A Software Engineer from India
            </h1>
        ),
        2:(
            <InfoBox text="I have been working with Motivity labs and picked up many skills along the way" link="/about" btnText="Learn more" />
       
            ),
        3:(
            <InfoBox text="Led multiple projects to success over the years.Curious about the impact?" link="/projects" btnText="Visit my portfolio" />
       
        ),
        4:(
            <InfoBox text="Need a project done or looking for a dev? I'm just a few keystrokes away" link="/contact" btnText="Let's talk" />
       
        )
    }



    const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo