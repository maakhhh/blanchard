document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.editions__select-btn')

  btn.addEventListener('click', function(){
    const label = document.querySelectorAll('.editions__label')

    btn.classList.toggle('editions__btn-active')

    label.forEach(function(lab){
      if (!(lab.classList.length === 3)) {
        lab.classList.toggle('editions__label-active')
      }
    })
  })
})
