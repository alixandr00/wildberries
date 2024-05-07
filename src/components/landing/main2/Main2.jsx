import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Main2.css";

export const Main2 = () => {
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
    <div className="bg-[rgb(17,17,17)] pb-12">
      <div className="flex flex-col cd:px-[z12rem] px-[3rem]  ">
        <p
          data-aos="fade-right"
          className="text-[3rem] font-bold mt-12 text-white"
        >
          НАВЫКИ
        </p>
        <p
          data-aos="fade-right"
          className="cd:text-[1.5rem] text-[0.8rem] font-extrabold text-white mt-8 skills"
        >
          которые вы приобретете во время обучения:
        </p>
        <p className="text-[red] font-extrabold mt-8">
          Эти навыки помогут в любом бизнесе, как в онлайн, так и в оффлайн
          варианте
        </p>
        <div></div>
      </div>
      <div className="flex flex-wrap  justify-center mt-12 gap-8 ">
        <div
          data-aos={isMobile ? "fade-right" : "fade-down-right"}
          // data-aos="fade-down-right"
          className="w-[19rem] px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460] "
        >
          <p className="text-white  text-[1.3rem] font-extrabold">
            Аналитические и стратегические навыки
          </p>
          <p className="text-white mt-4">
            Способность <span className="text-[red]">анализировать</span> рынок
            и определять целевую аудиторию, а также{" "}
            <span className="text-[red]">
              разрабатывать бизнес и маркетинг стратегии
            </span>
          </p>
        </div>
        <div
          data-aos="flip-left"
          className="w-[19rem] px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460]  "
        >
          <p className="text-white  text-[1.3rem] font-extrabold">
            Брендинг и маркетинг
          </p>
          <p className="text-white mt-4">
            Умение разрабатывать УТП,{" "}
            <span className="text-[red]">создавать бренд</span> и его миссию, а
            также использовать все современные методы{" "}
            <span className="text-[red]">цифрового маркетинга</span> для
            продвижения своего продукта
          </p>
        </div>
        <div
          data-aos="flip-right"
          className="w-[19rem] px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460] "
        >
          <p className="text-white  text-[1.3rem] font-extrabold">
            Психология предпринимателя
          </p>
          <p className="text-white mt-4">
            Умение превращать{" "}
            <span className="text-[red]">проблемы в задачи</span> и находить
            решения задач максимально эффективно
          </p>
        </div>
        <div
          data-aos={isMobile ? "fade-right" : "fade-down-left"}
          // data-aos="fade-down-left"
          className="w-[19rem] px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460] "
        >
          <p className="text-white  text-[1.3rem] font-extrabold">
            Финансовое планирование
          </p>
          <p className="text-white mt-4">
            Рассчет себестоимости и маржинальности товара, анализ срока
            окупаемости проекта, оценивание рисков и отслеживание всех новостных
            тенденций для замены товаров
          </p>
        </div>
        <div
          data-aos="fade-up-right"
          className="w-[19rem] px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460] "
        >
          <p className="text-white  text-[1.3rem] font-extrabold">
            Навыки тайм-менеджмента
          </p>
          <p className="text-white mt-4">
            Эффективное{" "}
            <span className="text-[red]">планирование своего времени</span> и
            способности глубокой концентрации
          </p>
        </div>
        <div
          data-aos="flip-up"
          className="w-[19rem] px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460] "
        >
          <p className="text-white  text-[1.3rem] font-extrabold">
            Юридические основы
          </p>
          <p className="text-white mt-4">
            Регистрация бренда, оплата налогов, получение сертификатов, товарных
            знаков, открытие рассчетного счета и вывод средств
          </p>
        </div>
        <div
          data-aos="flip-down"
          className="w-[19rem] px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460] "
        >
          <p className="text-white  text-[1.3rem] font-extrabold">
            Проектное управление
          </p>
          <p className="text-white mt-4">
            Навык подбора подрядчиков и{" "}
            <span className="text-[red]">управление командой</span>{" "}
            исполнителей, умение организовать рабочий процесс от начала и до
            полного включения
          </p>
        </div>
        <div
          data-aos={isMobile ? "fade-right" : "fade-up-left"}
          // data-aos="fade-up-left"
          className="w-[19rem] px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460] "
        >
          <p className="text-white  text-[1.3rem] font-extrabold">
            Коммуникационные навыки
          </p>
          <p className="text-white mt-4">
            Способность{" "}
            <span className="text-[red]">
              эффективно выстраивать коммуникацию
            </span>{" "}
            с партнерами, клиентами, поставщиками
          </p>
        </div>
      </div>
    </div>
  );
};
