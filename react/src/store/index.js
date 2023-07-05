import { proxy } from 'valtio';

const state = proxy({
   intro: true,
   color: '#180429',
   isLogoTexture: true,
   isFullTexture: false,
   logoDecal: './icon.png',
   fullDecal: './threejs.png',
});

export default state;