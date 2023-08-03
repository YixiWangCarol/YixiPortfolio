/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import React from 'react'// if I add this, the model can't be shown
import { Suspense,useEffect,useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({isMobile}) => {
  // const computer = useGLTF('./desktop_pc/scene.gltf')
  const computer = useGLTF('./xiavatar.glb')
  return (
    <mesh>
      <hemisphereLight intensity={1}
      groundColor='black'/>
      <pointLight intensity={1}/>
      <spotLight
        position={[-10,10,30]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-/>
      {/* <primitive object={computer.scene}
                 scale={isMobile?2:0.75}
                 position={isMobile?[0,-3,-2.2]:[0,-3.25,-1.5]}
                 rotation={[-0.01,-0.2,-0.1]}

      /> */}
         {/* <primitive object={computer.scene}
                 scale={isMobile?3:3.2}
                 position={isMobile?[0,-5.3,0]:[0, -5.7, 0]}
                 rotation={[0,0.7,0]}

      /> */}
       <primitive object={computer.scene}
                 scale={isMobile?6.5:7}
                 position={isMobile?[0,-12,0]:[0, -13, 0]}
                 rotation={[0,0.7,0]}
                 
      />
    </mesh>
  )
}

const ComputersCanvas = ()=>{
  const [isMobile, setIsMobile] = useState(false)
  useEffect(()=>{
    //Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width:500px)');
    //set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);
    //Define a callback function to hundle changes to the media query
    const handleMediaQueryChange =(event)=>{
      setIsMobile(event.matches)
    };
    //Add the callback function as a listenner for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    //Remove the listener when the component is unmounted
    return ()=>{
      mediaQuery.removeEventListener("change",handleMediaQueryChange)
    };
  },[])
  return(
    <Canvas
      // style={{ width: '600px', height: '350px',position: 'absolute', bottom:'0', left: '50%',transform: 'translateX(-50%)',}}
      frameloop='demand'
      shadows
      camera={{position:[5,18,5],fov:30}}
      // camera={{position:[5,3,5],fov:30}}
      gl={{preserveDrawingBuffer: true}}
      style={{zIndex:0}}
      >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          enablePan = {false} 
          maxPolarAngle={Math.PI /2}
          minPolarAngle={Math.PI /2}
          />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}
export default ComputersCanvas
// export default Computers