import React, { Suspense, useRef, useState,useEffect } from 'react';
import {Canvas} from "@react-three/fiber";
import Loader from "../components/Loader";
import HomeInfo from "../components/HomeInfo";
import Island from '../models/island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from '../assets/icons';

const Home = () => {
  const audioRef=useRef(new Audio(sakura));
  audioRef.current.volume=0.4;
  audioRef.current.loop=true;

  const [isRotating,setIsRotating]=useState(false );
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic,setIsPlayingMusic]=useState(false);

  useEffect(()=>{
    if(isPlayingMusic){
      audioRef.current.play();
    }
    return ()=>{
      audioRef.current.pause();
    }
  },[isPlayingMusic])

  useEffect(() => {
    // Add or remove the "no-scroll" class based on whether it's the home page
    if (currentStage === 1) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [currentStage]);

const adjustIslandForScreenSize=()=>{
  let screenScale=null;
  let screenPosition=[0,-6.5,-43];
  let rotation=[0.1,4.7,0];
  if(window.innerWidth <768){
    screenScale=[0.9,0.9,0.9];
  }
  else{
    screenScale=[1,1,1];
  }
  return [screenScale,screenPosition,rotation]
}

const adjustPlaneForScreenSize=()=>{
  let screenScale,screenPosition;
  
  if(window.innerWidth <768){
    screenScale=[1.5,1.5,1.5];
    screenPosition=[0,-1.5,0]
  }
  else{
    screenScale=[3,3,3];
    screenPosition=[0,-4,-4]
  }
  return [screenScale,screenPosition]
}

const [islandScale,islandPosition,islandrotation]=adjustIslandForScreenSize();
const [planeScale,planePosition]=adjustPlaneForScreenSize();

  return (
    <section style={{width:"100%",height:"100vh",position:"relative"}}>
        <div  style={{position:"absolute",top:28,left:0,right:0,zIndex:10,display:"flex",justifyContent:"center",alignItems:"center"}}> 
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
<Canvas style={{width:"100%",height:"100vh",backgroundColor:"rgba(0,0,0,0.6)",cursor:isRotating?"grabbing":"grab"}}
camera={{near:0.1,far:1000}}>
     {/*objects close to near and far from camera wont be rendered which is setting up our playing ground  */}
<Suspense fallback={<Loader />}>
<directionalLight position={[1,1,1]} intensity={2} /> 
{/* directionallight simulates sun light */}
<ambientLight intensity={0.5}/>
{/* it illuminates all the objects in the scene equally without casting shadows */}
{/* <pointLight /> */}
{/* emits light in all direction from single point */}
{/* <spotLight /> */}
{/* emits  light in all direction in the shape of cone*/}
<hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
{/* it illuminates with gradient */}
<Bird />
<Sky isRotating={isRotating}/>
<Island position={islandPosition} scale={islandScale} rotation={islandrotation} isRotating={isRotating} setIsRotating={setIsRotating}  setCurrentStage={setCurrentStage}/>
<Plane isRotating={isRotating} scale={planeScale} position={planePosition} rotation={[0,20,0]} />
</Suspense>
</Canvas>
<div style={{position:"fixed",bottom:"0",left:"0"}}>
  <img src={isPlayingMusic?soundoff:soundon} style={{cursor:"pointer"}} alt='no-img' width={50} height={50} onClick={()=>setIsPlayingMusic(!isPlayingMusic)}/>
</div>
    </section>
  )
}

export default Home;