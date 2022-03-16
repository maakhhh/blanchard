document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.editions__checkbox').forEach(function(select){
    select.addEventListener('click', function(event){
      const btn = document.querySelector('.editions__select-btn')
      if (btn.classList.length === 1) {
        if ($(select).parent('.editions__label')[0].classList.length === 3) {
          $(select).parent('.editions__label')[0].classList.remove('editions__label-active')
        }
      }
      $(select).parent('.editions__label')[0].classList.toggle('editions__label-checked')


    })
  })
})
