document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.header__search-btn2')
  const act = document.querySelector('.header__top-search')
  const logo = document.querySelector('.header__logo')
  const btn2 = document.querySelector('.header__top-search-close')

  btn.addEventListener('click', function(event){
    act.classList.toggle('header__top-search-active')
    logo.classList.toggle('header__logo-search')
  })

  btn2.addEventListener('click', function(event){
    act.classList.remove('header__top-search-active')
    logo.classList.remove('header__logo-search')
  })

})
