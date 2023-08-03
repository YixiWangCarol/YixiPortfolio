/* eslint-disable react/no-unknown-property */
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from '../Loader'

const Earth = () => {
  const earth = useGLTF('./com/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.2}
      groundColor='green'/>
      <pointLight intensity={1}/>
      <spotLight
        position={[-10,10,30]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-/>
         <primitive 
      object={earth.scene}
      scale={0.035}
      rotation={[0,-0.6,0]}
      position-y={-4}
      position-x={0}
       />
    </mesh>
   
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{preserveDrawingBuffer:true}}
      camera={{
        fov:45,
        near:0.1,
        far:200,
        position:[-4,3,6]
      }}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          autoRotate={false}
          enableZoom={false}
          enablePan = {false}          
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all/>
      </Suspense> 
    </Canvas>
  )
}

export default EarthCanvas