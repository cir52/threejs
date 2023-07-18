import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame, useLoader } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';
import { TextureLoader } from 'three';

const Shirt = () => {

   const snap = useSnapshot(state);
   const { nodes, materials } = useGLTF('/shirt_baked.glb');

   const logoTexture = useLoader(TextureLoader, snap.logoDecal);
   const fullTexture = useLoader(TextureLoader, snap.fullDecal);

   useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));

   const stateString = JSON.stringify(snap);

   return (
      <group
         key={stateString}         
      > 
          <mesh
            castShadow
            geometry={nodes.T_Shirt_male.geometry}
            material={materials.lambert1}
            material-roughness={1}
            dispose={null}
         >
            {snap.isFullTexture && (
               <Decal
                  position={[0, 0, 0]}
                  rotation={[0, 0, 0]}
                  scale={1}
                  map={fullTexture}

               >
                  <meshBasicMaterial 
                     map={fullTexture} 
                     transparent = {true}
                  />
               </Decal>
            )}

            {snap.isLogoTexture && (
               <Decal
                  position={[0, 0.04, 0.15]}
                  rotation={[0, 0, 0]}
                  scale={0.15}
                  map={logoTexture}
                  anisotropy={16}
                  depthTest={false}
                  depthWrite={true}
               />
            )}

         </mesh>

      </group>
   )
}

export default Shirt