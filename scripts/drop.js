window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.header__bottom-link').forEach(function(btn){
    btn.addEventListener('click', function(event) {
      const scrollbtn = event.currentTarget.dataset.scrollbtn
      const scrollact = document.querySelector('[data-scroll="'+ scrollbtn +'"]')
      document.querySelectorAll('.header__scroll').forEach(function(scroll){
        if (scrollbtn != scroll.dataset.scroll){
          scroll.classList.remove('header__scroll-active')
        }
      })

      document.querySelectorAll('.header__bottom-link').forEach(function(btn2){
        if (btn != btn2){
          btn2.classList.remove('header__scrolact')
        }
      })

      btn.classList.toggle('header__scrolact')
      scrollact.classList.toggle('header__scroll-active')
    })
  })
})
