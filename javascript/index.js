const sr = ScrollReveal({
    container: document.querySelector('.snap-container'),
    reset: true 
  });
  
  sr.reveal('.reveal', {
    distance: '60px',
    duration: 1200,
    easing: 'ease-in-out',
    origin: 'bottom',
    opacity: 0,
    scale: 1.3, 
    interval: 200
  });
  
  sr.reveal('.reveal img', {
    distance: '0px',
    duration: 1000,
    easing: 'ease-in-out',
    scale: 1.5, 
    opacity: 0,
    interval: 300
  });