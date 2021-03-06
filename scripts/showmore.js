document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.events__more-btn')
  if (document.documentElement.clientWidth <= 1023 ) {
    const dop = document.querySelector('.events__dop-768')
    dop.classList.add('events__dop-item')
    dop.classList.add('events__not-active')
  }

  btn.addEventListener('click', function(event){
    if (btn.innerHTML === 'Все события'){
      document.querySelectorAll('.events__dop-item').forEach(function(item){
        item.classList.remove('events__not-active')
      })
      btn.innerHTML = 'Скрыть'
    }
    else {
      document.querySelectorAll('.events__dop-item').forEach(function(item){
        item.classList.add('events__not-active')
      })
      btn.innerHTML = 'Все события'
    }
  })
});
