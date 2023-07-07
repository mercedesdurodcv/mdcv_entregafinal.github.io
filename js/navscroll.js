const div = document.querySelector('nav');
let prevY = window.scrollY;
window.addEventListener('scroll', function( ){
  


  if( window.scrollY > 30 ){
    div.classList.add('navScroll');
  }else{
    div.classList.remove('navScroll');
  }
  prevY = window.scrollY;

  
} );


