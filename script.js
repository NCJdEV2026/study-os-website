const modal=document.getElementById('demoModal'), open=document.getElementById('watchDemo'), close=document.getElementById('closeDemo'), video=document.getElementById('demoVideo');
const baseSrc='https://www.youtube.com/embed/VNIituKA-ao?rel=0';
open.addEventListener('click',()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false');video.src=baseSrc+'&autoplay=1'});
function shut(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');video.src=baseSrc}
close.addEventListener('click',shut);modal.addEventListener('click',e=>{if(e.target===modal)shut()});document.addEventListener('keydown',e=>{if(e.key==='Escape')shut()});
