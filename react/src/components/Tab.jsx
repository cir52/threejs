import React from 'react'
import { useSnapshot } from 'valtio';

import state from '../store';

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick, idx }) => {
  const snap = useSnapshot(state);

  const activeStyles = isFilterTab && isActiveTab
        ? { backgroundColor: `${snap.color}88`, opacity: 1 }
        : { backgroundColor: 'transparent', opacity: 1 }
  

  return (
    <div
      key = {tab.name}
      className = {`tab-btn ${isFilterTab ? 'rounded-full glassmorphism' : 'rounded-full'} ${idx === 1 ? '!rounded-md' : ''} border border-white hover:border-gray-300`}
      onClick = {handleClick}
      style = { activeStyles }
    >
      <img 
        src={tab.icon} 
        alt={tab.name}
        className = {`${isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'}`}
      />
      
    </div>
  )
}

export default Tab