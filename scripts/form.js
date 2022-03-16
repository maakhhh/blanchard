var tel = document.querySelector('input[type="tel"]');
var im = new Inputmask("+7(999) 999-99-99");

im.mask(tel);

new JustValidate('.contacts__form', {
  colorWrong: '#D11616',

  rules:{
    name: {
      required: true,
      minLength: 2,
    },

    tel: {
      required: true,
      function: (name, value) => {
        const phone = tel.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },

  messages:{
    name: {
      required: 'Это обязательное поле!',
      minLength: 'Недостаточно символов'
    },
    tel:{
      required: 'Это обязательное поле!',
      function: 'Недостаточно символов'
    }
  },
})
