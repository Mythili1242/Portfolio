import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    
    // <section >
    //     <p className='lead fw-bold'>Have a project in mind?<br className='d-none d-sm-block'/>Let's build something together!</p>
    //     <Link to="/Contact" className='btn btn-primary'>Contact</Link>
    // </section>
 <div className="container mt-4">
<div className="row">
    <div className="col-md-6 text-center">
    <h4 className=' fw-bold'>Have a project in mind?<br className='d-none d-sm-block'/>Let's build something together!</h4>
    </div>
    <div className="col-md-6 text-center mt-2">
    <Link to="/Contact" className='btn btn-primary btn-md' style={{background : "linear-gradient(to top, #5EFCE8, #736EFE)",color: "white"}}>Contact </Link>
    </div>
</div>
</div> 

/* <div className="container d-flex justify-content-center">

    <div className="column" style={{flex:1}}>
    <p className='lead fw-bold'>Have a project in mind?<br className='d-none d-sm-block'/>Let's build something together!</p>
    </div>
    <div className="column" style={{flex:1}}>
    <Link to="/Contact" className='btn btn-primary btn-md' style={{background : "linear-gradient(to top, #5EFCE8, #736EFE)",color: "white"}}>Contact </Link>
    </div>

</div> */
    
  )
}

export default CTA