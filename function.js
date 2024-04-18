const btn = document.querySelector('.btn')
const container = document.querySelectorAll('.container')

containerLength = container.length

btn.addEventListener('click', function (){
    for (var i = 0; i < containerLength; i++) {
        container[i].classList.toggle('container')
    }
})



  $(document).ready(function(){
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();
  });
        