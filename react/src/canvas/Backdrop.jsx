import React, { useRef } from 'react';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref = { shadows}
      temporal
      frames = { 10 }
      alphaTest = {0.77}
      scale = {10}
      rotation={[Math.PI/2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight 
        amount={2}
        radius={10}
        intensity={0.35}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight 
        amount={2}
        radius={6}
        intensity={0.55}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>    
  )
}

export default Backdrop