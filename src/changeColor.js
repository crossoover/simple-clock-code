var randomColor = require('randomcolor');

export const changeColor = () => {
   const app = document.querySelector('.App');
   app.style.background = randomColor({
      luminosity: 'dark',
      hue: 'random'
   });
};

export const changeText = () => {
   const text = document.querySelector('.text_sec');
   let i = text.textContent.slice(-1);
   if(i < 4){
      i++;
      text.textContent = `Now mode ${i}`;
   }else if(i==='4') {
      i=1;
      text.textContent = `Now mode ${i}`;
   }
}
