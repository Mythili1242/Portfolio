import { indigo } from '@mui/material/colors';
import React from 'react';

const Alert = ({type,text}) => {
  return (
    <div className='absolute top-10 left-0 right-0 d-flex justify-content-center align-items-center'>
        {/* ${type==='danger' ? 'bg-danger': 'bg-primary'} */}
        <div className="p-2 d-flex inline-flex align-items-center" role='alert' style={{color:"white",backgroundColor:type==='danger'?"maroon":"green"}}>
            <p className="d-flex text-uppercase rounded-circle px-2 py-1 mr-3 font-weight-bold text-muted" style={{backgroundColor:type==='danger'?"red":"lightgreen"}}>{type==="danger"?"Failed":"Success"}</p>
            <p className='mr-2 text-left'>{text}</p>
        </div>
    </div>
  )
}

export default Alert