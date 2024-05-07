import React, { useEffect } from "react";
import CARTEL from "../../../assets/1920.webp";
import {
  FirstImage,
  FourthImage,
  SecondImage,
  ThirdImage,
} from "../../../assets";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Main1.css";

export const Main1 = ({ tarifRef }) => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
      delay: 100,
      once: false,
      anchorPlacement: "top-center",
    });
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#000000]">
      <p
        data-aos="fade-down"
        className="cd:text-[4rem] text-[2rem] text-[white] font-bold mt-12"
      >
        КОЛЛЕДЖ
      </p>
      <div data-aos="fade-right" className="mt-8 cd:w-full w-[13rem]">
        <p className="text-[white] md:text-[1.3rem] text-[1rem] cd:ml-0  cd:text-center text-center  ">
          Обучение по <span className="text-[#e94560] ">WILDBERRIES</span> от
          бизнес клуба CARTEL
        </p>
        <p className="text-[white] md:text-[1.3rem] text-[1rem]  cd:text-center text-center">
          Подходит для новичков, менеджеров, селлеров и производителей
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="bg-[#16213e] w-[15rem] cursor-pointer h-[7vh] flex justify-center items-center mt-12"
      >
        <p
          onClick={() =>
            tarifRef.current &&
            tarifRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="text-[#e94560] font-extrabold"
        >
          Тарифы
        </p>
      </div>
      <img
        data-aos="fade-down"
        className="cd:w-[16rem] w-[10rem] mt-8 "
        src={CARTEL}
        alt="cartel"
      />
      <div className="melg:w-[60rem] flex flex-col cd:items-start items-center w-[45rem] melg:mr-[15rem] mr-0 h-[15vh] ">
        <p
          data-aos="fade-right"
          className="text-[white] text-[1.3rem] melg:mt-0 mt-4 font-extrabold cd:text-start text-center "
        >
          Почему сейчас?
        </p>
        <p
          data-aos="fade-right"
          className="text-[white] cd:text-[3rem] text-[1.2rem]  cd:w-[55rem] w-[15rem] font-extrabold cd:text-start text-center"
        >
          2024 год это лучшее время для того, чтобы изучить WILDBERRIES:
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-8 mt-[7rem] pb-12 border-b-2 border-[#0f3460]">
        <div
          data-aos="flip-right"
          className="flex flex-col items-center border-2 border-[#0f3460] w-[17rem] text-[#e94560] py-8 h-[60vh]"
        >
          <FirstImage />
          <p className="font-extrabold mt-4 mb-2 text-[#38388a] text-[1.4rem]">
            Большой спрос
          </p>
          <p className="text-center text-[1.2rem] w-[13rem]">
            В последний год заметен{" "}
            <span className="text-[#e94560]">большой рост</span> торговли
            онлайн:
          </p>
          <p className="mt-4 text-center text-[1.2rem] w-[14rem]">
            в сравнении с 2022 годом, в 2023, рынок вырос на 43% и рост в 2024
            прогнозируется еще выше
          </p>
        </div>
        <div
          data-aos="flip-left"
          className="flex flex-col items-center border-2 border-[#0f3460] w-[17rem] text-[#e94560] py-8 h-[60vh]"
        >
          <SecondImage />
          <p className="font-extrabold mt-4 mb-2 text-[#38388a] text-[1.4rem]">
            Легкий старт
          </p>
          <p className="text-center text-[1.2rem] w-[13rem]">
            Легкий старт как для профессии менеджера, так и для начинающего
            селлера.
          </p>
          <p className="mt-4 text-center text-[1.2rem] w-[15rem]">
            <span className="text-[#e94560]">
              При выполнении всех инструкций,
            </span>{" "}
            вы достигнете результата в короткие сроки
          </p>
        </div>
        <div
          data-aos="flip-right"
          className="flex flex-col items-center border-2 border-[#0f3460] w-[17rem] text-[#e94560] py-8 h-[60vh]"
        >
          <ThirdImage />
          <p className="text-center font-extrabold mt-4 mb-2 text-[#38388a] text-[1.3rem]">
            Повышенное доверие потребителей
          </p>
          <p className="text-center text-[1.2rem] w-[15rem]">
            С развитием онлайн-безопасности, пользователи все чаще делают
            покупки на маркетплейсах и{" "}
            <span className="text-[#e94560]">больше доверяют </span>популярным
            площадкам, чем физическим магазинам
          </p>
        </div>
        <div
          data-aos="flip-left"
          className="flex flex-col items-center border-2 border-[#0f3460] w-[17rem] text-[#e94560] py-8 h-[60vh]"
        >
          <FourthImage />
          <p className="text-center font-extrabold mt-4 mb-2 text-[#38388a] text-[1.4rem]">
            Объемы продаж
          </p>
          <p className="text-center text-[1.2rem] w-[14rem]">
            Онлайн-платформы позволяют продавцам охватывать огромное количество
            аудитории,{" "}
            <span className="text-[#e94560]">не привязываясь к месту</span>
          </p>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap justify-center mb-8 gap-12">
        <div>
          <p
            data-aos="fade-right"
            className="text-[#e94560] cd:text-[3rem] text-[2rem] font-extrabold "
          >
            Формат обучения
          </p>
          <p
            data-aos="fade-right"
            className="text-[#0f3460] gd:w-[25rem] w-[20rem] text-[1.5rem] font-bold "
          >
            практика на реальных задачах,{" "}
            <span className="text-white">внутри сообщества</span> уже
            действующих селлеров
          </p>
        </div>
        <div>
          <p
            data-aos="fade-right"
            className="text-[#0f3460] xl:w-[43rem] cd:w-[35rem] w-[20rem] cd:ml-0 ml-8 text-[1.3rem] "
          >
            Наше обучение{" "}
            <span className="text-[#e94560]">отличается от всех</span>{" "}
            предложенных на рынке, потому что происходит НА ПРАКТИКЕ уже
            действующих резидентов клуба CARTEL
          </p>
          <p
            data-aos="fade-right"
            className="text-white cd:text-[1.2rem] text-[1rem] cd:mt-0 mt-4 cd:pl-0 pl-8"
          >
            - онлайн уроки
          </p>
          <p
            data-aos="fade-right"
            className="text-white cd:text-[1.2rem] text-[1rem]  cd:pl-0 pl-8"
          >
            - живые встречи внутри клуба
          </p>
          <p
            data-aos="fade-right"
            className="text-white cd:text-[1.2rem] text-[1rem]  cd:pl-0 pl-8"
          >
            - работа с реальными кейсами и задачами
          </p>
        </div>
      </div>
    </div>
  );
};
