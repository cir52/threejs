import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import state from '../store';
import {
   headContainerAnimation,
   headContentAnimation,
   headTextAnimation,
   slideAnimation,
} from '../config/motion';
import { CustomButton } from '../components';


const Home = () => {

   const snap = useSnapshot(state);

   return (

      <AnimatePresence>
         {snap.intro && (
            <motion.section className="home min-h-screen" {...slideAnimation('left')}>

               {/* <motion.header 
                  className='mt-5'
                  {...slideAnimation('down')}
               >
                  <img
                     src='./icon.png'
                     alt='logo'
                     className='w-12 h-12 object-contain'
                  />
               </motion.header> */}

               <motion.div className='home-content z-20' {...headContainerAnimation}>
                  <motion.div {...headTextAnimation}>
                     <h1 className='head-text' style={{color: snap.color}}>
                        STYLE <br className='xl:block hidden' />
                     </h1>
                  </motion.div>

                  <motion.div
                     {...headContentAnimation}
                     className='flex flex-col gap-5'
                  >
                     <p className="max-w-[35vw] font-normal text-gray-600 text-base">
                        your own unique shirt with this brand new 3D customization tool. <strong>Unleash your imagination</strong>{" "}or use AI to define your own style.
                     </p>
                     <CustomButton
                        type='filled'
                        title='Customize It'
                        handleClick={() => state.intro = false}
                        customStyles='w-fit px-4 py-2.5 font-bold text-sm'
                     />
                  </motion.div>
               </motion.div>
   
            </motion.section>
         )}
      </AnimatePresence>
   )
}

export default Home