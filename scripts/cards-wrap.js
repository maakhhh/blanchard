document.addEventListener("DOMContentLoaded", function () {

  function setCards() {
    const MIN_DESKTOP = 1023;
    const MIN_TABLET = 522;

    let isOpened = false;
    const cardsWrap = document.querySelector(".events__container");
    const hidden = "is-hidden";
    const interaction = "is-interaction";
    const openAnimation = "fade-in";
    const closeAnimation = "fade-out";
    const showText = "Все события"; // текст кнопки в закрытом состоянии
    const hideText = "Скрыть"; // текст кнопки в открытом состоянии
    let btn = cardsWrap.querySelector(".events__more-btn");
    const cards = Array.from(cardsWrap.querySelectorAll(".events__item"));
    /* Функция устанавливающая количество карточек к изначальному просмотру и скрывающая остальные */
    function setHiddenCards(quantity, isResize) {
      if (quantity) {
        cards.forEach((el, i) => {
          el.classList.remove(
            hidden,
            interaction,
            openAnimation,
            closeAnimation
          );

          if (i >= quantity) {
            el.classList.add(hidden, interaction);
          }

          el.addEventListener("animationend", function (evt) {
            if (!isOpened && evt.target.classList.contains(interaction)) {
              evt.target.classList.add(hidden);
              evt.target.classList.remove(closeAnimation, openAnimation);
            }
          });

          isOpened = false;
          btn.textContent = showText;

          if (isResize === "resize") {
            isOpened = false;
            btn.textContent = showText;
          }
        });

        btn.classList.remove(hidden);
      } else {
        cards.forEach((el, i) => {
          el.classList.remove(hidden);
        });

        btn.classList.add(hidden);
      }

      function setBtnListener() {
        btn.outerHTML = btn.outerHTML;
        btn = cardsWrap.querySelector(".events__more-btn");
        btn.addEventListener("click", function () {
          isOpened = !isOpened;

          if (isOpened) {
            btn.textContent = hideText;

            cards.forEach((el, i) => {
              el.classList.remove(hidden, closeAnimation);
              el.classList.add(openAnimation);
            });

            cards[quantity].scrollIntoView({
              block: "start",
              behavior: "smooth"
            });
          } else {
            btn.textContent = showText;

            cards.forEach((el, i) => {
              if (el.classList.contains(interaction)) {
                el.classList.add(closeAnimation);
              }
            });

            cards[0].scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }

      setBtnListener(isOpened);
    }

    /* функция для проверки ширины страницы, она же обработчик события resize */
    function checkDisplay(evt) {
      let isResize;

      if (evt) {
        isResize = evt.type;
      }

      const width = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
      );

      switch (true) {
        case width > MIN_DESKTOP:
          setHiddenCards(3, isResize); // цифра означает количество карточек, которые будут показаны изначально
          break;
        case width > MIN_TABLET && width <= MIN_DESKTOP:
          setHiddenCards(2, isResize);
          break;
        default:
          setHiddenCards(false, isResize);
      }
    }

    checkDisplay(); // проверяем ширину экрана при первой загрузке страницы
    window.addEventListener("resize", checkDisplay); // проверяем ширину при ресайзе без перезагрузки
  }

  setCards(); // вызываем главную функцию для всего этого дела

  /* Здесь можно заканчивать копировать */
});
