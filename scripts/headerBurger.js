document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.header__burger')
  const btn2 = document.querySelector('.burger-open__close-btn')
  const brg = document.querySelector('.header__burger-open')

  btn.addEventListener('click', function(){
    brg.classList.add('header__burger-open-active')
  })

  btn2.addEventListener('click', function(){
    brg.classList.remove('header__burger-open-active')
  })

})
