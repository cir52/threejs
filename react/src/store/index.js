import { proxy } from 'valtio';

const state = proxy({
   intro: true,
   color: '#469a83',
   isLogoTexture: true,
   isFullTexture: false,
   logoDecal: './icon2.png',
   fullDecal: './texturepalms.png',
});

export default state;