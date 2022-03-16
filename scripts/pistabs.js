document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.catalog__block-link').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event){
      event.preventDefault()
      const btnId = event.currentTarget.dataset.pis
      const opisAct = document.querySelector('[data-opis="'+ btnId +'"]')
      const cntry = $(opisAct).parents('.catalog__bottom')[0].dataset.cntrytabs

      document.querySelectorAll('.catalog__pis').forEach(function(step){
        if ($(step).parent('.catalog__bottom')[0].dataset.cntrytabs === cntry) {
          step.classList.remove('catalog__active')
        }
      })

      document.querySelectorAll('.catalog__block-link').forEach(function(btn){
        if ($(btn).parents('.catalog__bottom')[0].dataset.cntrytabs === cntry) {
          btn.classList.remove('catalog__tab-active')
        }
      })

      tabsBtn.classList.add('catalog__tab-active')
      opisAct.classList.add('catalog__active')
    })
  })
})
