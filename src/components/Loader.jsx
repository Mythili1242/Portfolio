import React from 'react'
import CircularProgress from '@mui/joy/CircularProgress';
import {Html} from "@react-three/drei";
const Loader = () => {
  return (
    <Html>
  <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <CircularProgress color="primary" />
    </div>
    </Html>
  
  )
}

export default Loader;