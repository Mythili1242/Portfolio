import React, { Suspense, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@material-ui/core';
import { Button, getImageListItemBarUtilityClass } from '@mui/material';
import emailjs from "@emailjs/browser";
import { Canvas } from '@react-three/fiber';
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
    const formRef=useRef(null);
    const [form,setForm]=useState({name:"",email:"",message:""});
    const [isLoading,setIsLoading]=useState(false);
    const [currentAnimation,setCurrentAnimation]=useState('idle');
    const {alert,showAlert,hideAlert}=useAlert();

    const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value})
    }
    const handleFocus=()=>setCurrentAnimation('walk')
    const handleBlur=()=>setCurrentAnimation('idle')

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!form.email || !form.message || !form.name){
        window.alert("enter values in all fields")
        }
        else{
          setIsLoading(true);
        setCurrentAnimation('hit');
        console.log( process.env.REACT_APP_EMAILJS_SERVICE_ID);
        
        emailjs.send(
      
         process.env.REACT_APP_EMAILJS_SERVICE_ID,
         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        //  import.meta.env.REACT_APP_EMAILJS_SERVICE_ID,
        //    import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID,
           {
            from_name:form.name,
            to_name:"Mythili",
            from_email:form.email,  
            to_email:'mythiligalidevara28@gmail.com',  
            message:form.message
           },
           process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        ).then(()=>{
            setIsLoading(false);
            showAlert({show:true,text:"Message sent successfully",type:"success"})
            setCurrentAnimation('idle');
            setTimeout(()=>{
              hideAlert(false);
              setCurrentAnimation('idle');
              setForm({name:"",email:"",message:""});
            },[3000])
            
        }).catch((err)=>{setIsLoading(false);console.log(err);showAlert({show:true,text:"I didn't receive your message",type:"danger"})})

        }
            }

  return (
    // <section className='relative flex flex-sm-column flex-row container mt-3'>
    //     <div className='flex-1 flex flex-column' style={{minWidth:"50%"}} >
    <div className="container mt-3">
      {console.log(alert.show)}
      {alert.show && <Alert {...alert}/>}
      <div className="row">
        <div className='col-lg-6 col-md-12'>
            <h3>Get in Touch</h3>
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1,gap:3,mt:4 },display:"flex",flexDirection:"column"
      }}
      // width: '25ch'
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <label className='text-dark fw-bold'>Name
      <TextField fullWidth id="outlined-basic"  name='name' variant="filled" value={form.name} onChange={handleChange} 
      onFocus={handleFocus} onBlur={handleBlur} required/>
      </label>

      <label className='text-dark fw-bold'>Email
      <TextField fullWidth id="outlined-basic"  name='email' variant="filled" value={form.email} onChange={handleChange} 
      onFocus={handleFocus} onBlur={handleBlur} required/>
      </label>


      <label className='text-dark fw-bold'>Message
      <TextareaAutosize
      name="message"
      aria-label="empty textarea"
      placeholder="Enter your text here"
      style={{ width: '100%' }}
      minRows={3} // Minimum number of rows to display
      required
      value={form.message}
     onChange={handleChange} 
      onFocus={handleFocus} onBlur={handleBlur}/>
      </label>
<Button type='submit' variant="contained"   style={{backgroundColor:"radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(7,62,156,1) 0%, rgba(8,75,162,1) 0%, rgba(63,3,214,1) 25%, rgba(2,143,222,1) 37%, rgba(1,178,232,1) 89%, rgba(1,190,240,1) 93%, rgba(0,212,255,1) 100%)"}}
      onFocus={handleFocus} onBlur={handleBlur} disabled={isLoading}>
        {isLoading?'Sending...':'Send Message'}
      </Button>
</Box>
        </div>

        <div className='col-lg-6 col-md-12 h-auto md:h-md-550 h-350'>
        {/* <div className="h-auto md:h-md-550 h-350"> */}
          <Canvas camera={{position:[0,0,5],fov:75,near:0.1,far:1000}} > 
          {/* fov-field of view */}
          <directionalLight intensity={2.5} position={[0,0,1]} />
          <ambientLight intensity={0.5} />
            <Suspense fallback={<Loader />}>
              <Fox currentAnimation={currentAnimation} position={[0.5,0.35,0]} rotation={[12.6,-0.6,0]} scale={[0.5,0.5,0.5]} />
            </Suspense>
          </Canvas>
          </div>
          </div>
        </div>
        // </div>
//         <div >
// </div>
        /* </div>
    </section> */
  )
}

export default Contact;

