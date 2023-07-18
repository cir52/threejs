import React from 'react'
import BarLoader from "react-spinners/PacmanLoader";
import CustomButton from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <>
      <textarea 
        placeholder='Ask AI - Enter your prompt here... 
        (Please allow for some time as the image renders.)'
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className='aipicker-textarea'
      />
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <>
            <BarLoader 
              color="#36d7b7" 
              size={15}
            />
            <CustomButton
              type='outline'
              title='Asking AI...'
              customStyles='text-xs'
            />
          </> 
          ) :
          (
            <>
              <CustomButton
                type='outline'
                title='AI Logo'
                handleClick={() => handleSubmit('logo')}
                customStyles='text-xs'
              />
              <CustomButton
                type='filled'
                title='AI Full'
                handleClick={() => handleSubmit('full')}
                customStyles='text-xs'
              />
            </>
          )
        }
      </div>    
    </>
  )
}

export default AIPicker