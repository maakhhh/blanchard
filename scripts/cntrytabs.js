document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.catalog__tabs-btn').forEach(function(btn){
    btn.addEventListener('click', function(event){
      const btnId = event.currentTarget.dataset.cntry
      const cntryTab = document.querySelector('[data-cntrytabs="'+ btnId +'"]')

      document.querySelectorAll('.catalog__bottom').forEach(function(tab){
        tab.classList.remove('catalog__bottom-active')
      })

      document.querySelectorAll('.catalog__tabs-btn').forEach(function(btn){
        btn.classList.remove('catalog__tabs-btn-active')
      })

      btn.classList.add('catalog__tabs-btn-active')
      cntryTab.classList.add('catalog__bottom-active')
    })
  })
})
