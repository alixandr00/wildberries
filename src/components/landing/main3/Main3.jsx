import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Main3.css";

export const Main3 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      offset: 100, // Начинать анимацию при достижении элемента с отступом в 100 пикселей от верха окна
      duration: 500, // Длительность анимации 1 секунда
      easing: "ease-in-out", // Использовать эффект плавного входа и выхода
      delay: 100, // Начать анимацию с задержкой в 200 миллисекунд
      once: false, // Анимация должна произойти только один раз
      anchorPlacement: "top-center", // Якорь для анимации - верхний центр
    });
  }, []);
  //   data-aos="fade-right"

  return (
    <div className="mt-8 flex items-center flex-col pb-8">
      <p
        data-aos="fade-down"
        className="cd:text-[3rem] text-[1.5rem] font-extrabold"
      >
        Программа обучения
      </p>
      <div>
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          1. Вводный урок
        </p>
        <p
          data-aos="fade-right"
          className="melg:w-[70rem] w-[50rem] mll cd:text-[1rem] text-[0.7rem] text-center mt-4 "
        >
          В этом уроке обсуждается общая структура курса, цели и ожидания.
          Учащиеся знакомятся с основными понятиями и инструментами, которые
          будут использоваться в дальнейшем.
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          2. Юридические аспекты
        </p>
        <p
          data-aos="fade-right"
          className="melg:w-[70rem] w-[50rem] mll cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          Здесь рассматриваются юридические вопросы, связанные с запуском и
          управлением онлайн-бизнесом, включая регистрацию бизнеса, авторские
          права, и налогообложение.
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          3. Интерфейс ВБ
        </p>
        <p
          data-aos="fade-right"
          className="melg:w-[70rem] w-[50rem] mll cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          Урок посвящен особенностям работы с интерфейсом веб-браузера, который
          используется для управления онлайн-магазином, включая управление
          контентом и настройки.
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          4. Выбор товара
        </p>
        <p
          data-aos="fade-right"
          className="melg:w-[70rem] w-[50rem] mll cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          Обсуждаются стратегии выбора продуктов для продажи онлайн, анализ
          спроса, рентабельности и уникальности товара на рынке.
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          5. Поиск поставщика
        </p>
        <p
          data-aos="fade-right"
          className="melg:w-[70rem] w-[50rem] mll cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          Рассматриваются методы поиска и выбора надежных поставщиков, включая
          анализ предложений, условий сотрудничества и логистики.
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          6. Запуск товара
        </p>
        <p
          data-aos="fade-right"
          className="melg:w-[70rem] w-[50rem] mll cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          Учащиеся изучают процесс подготовки товара к продаже, включая листинг
          товара, оформление товарных страниц и оптимизацию для поисковых
          систем.
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          7. Продвижение товара
        </p>
        <p
          data-aos="fade-right"
          className="melg:w-[70rem] w-[50rem] mll cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          В этом уроке рассматриваются методы и стратегии продвижения товаров в
          Интернете, включая внутреннюю и внешнюю рекламу
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          8. Аналитика
        </p>
        <p
          data-aos="fade-right"
          className="melg:w-[70rem] w-[50rem] mll cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          Здесь уделяется внимание методам анализа данных о продажах,
          посещаемости карточек, влияния на ключевые показатели и эффективности
          рекламных кампаний для оптимизации бизнеса.
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          9. Финотчеты
        </p>
        <p
          data-aos="fade-right"
          className="melg:w-[70rem] w-[50rem] mll cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          Урок посвящен основам финансовой отчетности и бухгалтерскому учету в
          контексте управления онлайн-бизнесом.
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          10. Монетизация знаний
        </p>
        <p
          data-aos="fade-right"
          className="melg:w-[70rem] w-[50rem] mll cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          Обсуждаются способы заработка на собственных знаниях через
          предоставление разовых и постоянных услуг
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          11. Масштабирование
        </p>
        <p
          data-aos="fade-right"
          className="melg:w-[70rem] w-[50rem] mll cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          Изучаются стратегии роста и расширения бизнеса, включая добавление
          новых товаров, расширение на новые рынки и автоматизацию
          бизнес-процессов.
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          12. Цикл работы
        </p>
        <p
          data-aos="fade-right"
          className="melg:w-[70rem] w-[50rem] mll cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          Рассматривается повседневный цикл работы онлайн-бизнеса
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          13. Выпускной
        </p>
        <p
          data-aos="fade-right"
          className="melg:w-[70rem] w-[50rem] mll cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          Завершающий урок курса, где мы зафиксируем ваши знаний и прекрасно
          проведем последний день в резиденции клуба CARTEL, где каждый получит
          сертификат о прохождении обучения, а так же сможет стать резидентом
          клуба
        </p>
      </div>{" "}
    </div>
  );
};
