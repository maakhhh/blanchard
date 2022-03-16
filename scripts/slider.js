var swiper = new Swiper(".gallery__swiper", {

  slidesPerView: 3,
  slidesPerGroup: 3,
  slidesPerColumn: 2,
  spaceBetween: 50,
  // loopFillGroupWithBlank: true,
  // slidesPerColumnFill: "row",

  breakpoints: {

    200: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 34,
      slidesPerGroup: 1,
      loopFillGroupWithBlank: true,
    },

    767: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
      loopFillGroupWithBlank: true,
    },

    1651: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
      slidesPerGroup: 3,
      loopFillGroupWithBlank: true,
    },

  },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    beforeResize: function () {
      this.slides.forEach((el) => {
        el.style.marginTop = "";
      });
    }
  }

});

var swiper2 = new Swiper(".editions__slider", {
  slidesPerView: 3,
  spaceBetween: 50,

  breakpoints: {

    0: {
      enabled: false,
      spaceBetween: 30,
    },

    525: {
      enabled: true,
      slidesPerView: 1,
      spaceBetween: 34,
    },

    767: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    1025: {
      slidesPerView: 2,
      spaceBetween: 49,
    },

    1651: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

  },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    beforeResize: function () {
      this.slides.forEach((el) => {
        el.style.marginTop = "";
      });
    }
  }

});

var swiper3 = new Swiper(".projects__slider", {
  slidesPerView: 3,
  spaceBetween: 50,

  breakpoints: {

    200: {
      slidesPerView: 1,
      spaceBetween: 34,
    },

    767: {
      slidesPerView: 2,
      spaceBetween: 34,
    },


    1025: {
      slidesPerView: 2,
      spaceBetween: 50,
    },

    1651: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    beforeResize: function () {
      this.slides.forEach((el) => {
        el.style.marginTop = "";
      });
    }
  }

});

var swiper4 = new Swiper(".events__container", {
  enabled: true,
  slidesPerView: 1,
  spaceBetween: 27,

  breakpoints: {

    524: {
      enabled: false,
      slidesPerView: 2,
      spaceBetween: 20,
    },

    768: {
      enabled: false,
      slidesPerView: 2,
      spaceBetween: 34,
    },

    1024: {
      enabled: false,
      slidesPerView: 3,
      spaceBetween: 27,
    },

    1271: {
      enabled: false,
      slidesPerView: 3,
      spaceBetween: 30,
    },

    1650: {
      enabled: false,
      slidesPerView: 3,
      spaceBetween: 50,
    }

  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  on: {
    beforeResize: function () {
      this.slides.forEach((el) => {
        el.style.marginTop = "";
      });
    }
  }

});

const slider = swiper4;
const wrapper = swiper4.wrapperEl;

[].forEach.call(slider.slides, function(slide) {
  slide.style.height = "";
});

setTimeout(() => {
    [].forEach.call(slider.slides, function(slide) {
      slide.style.height = wrapper.clientHeight + "px";
    });
}, 300);

