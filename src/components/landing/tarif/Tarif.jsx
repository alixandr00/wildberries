import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import {
  Instagram,
  PlusIcon,
  Telegram,
  Vk,
  Whatsapp,
  XIcon,
  Youtube,
} from "../../../assets";
import { Modal1 } from "../../modal/Modal1";
import { Modal2 } from "../../modal/Modal2";
import { Modal3 } from "../../modal/Modal3";
import { Modal4 } from "../../modal/Modal4";
import "./Tarif.css";

export const Tarif = ({ tarifRef }) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };
  const openCloseHandler1 = () => {
    setOpen1(!open1);
  };
  const openCloseHandler2 = () => {
    setOpen2(!open2);
  };
  const openCloseHandler3 = () => {
    setOpen3(!open3);
  };
  const openCloseHandler4 = () => {
    setOpen4(!open4);
  };
  useEffect(() => {
    AOS.init({
      offset: 100, // Начинать анимацию при достижении элемента с отступом в 100 пикселей от верха окна
      duration: 300, // Длительность анимации 1 секунда
      easing: "ease-in-out", // Использовать эффект плавного входа и выхода
      delay: 100, // Начать анимацию с задержкой в 200 миллисекунд
      once: false, // Анимация должна произойти только один раз
      anchorPlacement: "top-center", // Якорь для анимации - верхний центр fewnflkewnflkwen
    });
  }, []);
  return (
    <div
      ref={tarifRef}
      className="flex flex-col  items-center bg-[rgb(16,16,16)]  "
    >
      <div className="melg:w-[70rem] w-[50rem] h-[80vh] pll mt-8 pll ">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="cd:text-[3rem] text-[1.5rem] cd:ml-0 ml-[4rem] centeerr  font-extrabold text-white mb-8 tariff"
        >
          ТАРИФЫ
        </p>
        <div className="flex  gap-20  border-t-2 phh  border-[white] cd:px-0 px-[3rem]">
          <div className="mt-8 pl-4 w-[40rem]">
            <p
              data-aos="fade-right"
              className="text-[1.4rem] font-bold text-[purple] tariff"
            >
              БАЗОВЫЙ (без ограничений по местам)
            </p>
            <p
              data-aos="fade-right"
              className="text-[1.2rem] text-[white] tariff"
            >
              <span className="line-through">25 000</span> 19 500 kgs
            </p>
            <p data-aos="fade-right" className="text-[yellow] tariff">
              есть рассрочка
            </p>
          </div>
          <div className="mt-8 text-[white] text-[1.2rem] online">
            <p data-aos="fade-left ">
              - Онлайн-уроки по всем темам связанными с WILDBERRIES
            </p>
            <p className="online" data-aos="fade-left ">
              - Чат-поддержка с резидентами клуба
            </p>
            <p
              data-aos="fade-left "
              className="line-through text-[grey] online"
            >
              - 12 оффлайн-уроков в резиденции клуба
            </p>
            <p data-aos="fade-left " className="mt-8 online">
              продолжительность:
            </p>
            <p data-aos="fade-left " className="online">
              6 недель + доступ к онлайн-урокам 3 месяца
            </p>
            <div
              onClick={openCloseHandler1}
              data-aos="fade-right"
              className="bg-[#d3d369] w-[15rem]  ml-20 h-[7vh] flex justify-center items-center mt-12 cursor-pointer bron"
            >
              <p className="font-extrabold text-[black]">Заполнить анкету</p>
            </div>
          </div>
          {open1 && <Modal1 open1={open1} setOpen1={setOpen1} />}
          {open2 && <Modal2 open2={open2} setOpen2={setOpen2} />}
          {open3 && <Modal3 open3={open3} setOpen3={setOpen3} />}
          {open4 && <Modal4 open4={open4} setOpen4={setOpen4} />}
        </div>
      </div>
      <div className="melg:w-[70rem] w-[50rem] h-[80vh] pll mt-8 ">
        <div className="flex gap-20  border-t-2 phh cd:px-0 px-[3rem] border-[white]">
          <div className="mt-8 pl-4 w-[40rem]">
            <p
              data-aos="fade-right"
              className="text-[1.4rem] font-bold text-[purple] tariff"
            >
              БАЗОВЫЙ pro <span className="text-[yellow]">(МЕСТ НЕТ)</span>
            </p>
            <p
              data-aos="fade-right"
              className="text-[1.2rem] tariff text-[white]"
            >
              <span className="line-through">45 000</span> 34 500 kgs
            </p>
            <p data-aos="fade-right" className="text-[yellow] tariff">
              есть рассрочка
            </p>
          </div>
          <div className="mt-8 text-[white] text-[1.2rem] online">
            <p data-aos={isMobile ? "fade-right" : "fade-left"}>
              - Онлайн-уроки по всем темам связанными с WILDBERRIES
            </p>
            <p
              data-aos={isMobile ? "fade-right" : "fade-left"}
              className="online"
            >
              - Чат-поддержка с резидентами клуба
            </p>
            <p
              data-aos={isMobile ? "fade-right" : "fade-left"}
              className="online"
            >
              - 12 оффлайн уроков в резиденции клуба
            </p>
            <p
              data-aos={isMobile ? "fade-right" : "fade-left"}
              className="online"
            >
              - 12 посещений резиденции для консультаци
            </p>
            <p
              data-aos={isMobile ? "fade-right" : "fade-left"}
              className="mt-8 online"
            >
              продолжительность:
            </p>
            <p
              data-aos={isMobile ? "fade-right" : "fade-left"}
              className="online"
            >
              6 недель + доступ к онлайн-урокам 3 месяца
            </p>
            <div
              onClick={openCloseHandler2}
              data-aos="fade-right"
              className="bg-[#d3d369] bron cursor-pointer text-[1rem] w-[15rem]  ml-20 h-[7vh] flex justify-center items-center mt-12"
            >
              <p className=" font-extrabold text-[black]">
                Забронировать место
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="melg:w-[70rem] w-[50rem] pll melg:h-[70vh] h-[85vh] mt-8 expert">
        <div className="flex gap-20  border-t-2 phh cd:px-0 px-[3rem] border-[white]">
          <div className="mt-8 pl-4 w-[40rem]">
            <p
              data-aos="fade-right"
              className="text-[1.4rem] font-bold text-[purple] tariff"
            >
              ЭКСПЕРТ <span className="text-[yellow] tariff">(МЕСТ НЕТ)</span>
            </p>
            <p
              data-aos="fade-right"
              className="text-[purple] text-[1.4rem] tariff"
            >
              обучение и вход в клуб резидентов CARTEL
            </p>
            <p
              data-aos="fade-right"
              className="text-[1.2rem] text-[white] tariff"
            >
              <span className="line-through">120 000</span> 50 000 kgs + 12 000
              kgs - ежемесячный доступ в клуб (начиная со второго месяца)
            </p>
            <p data-aos="fade-right" className="text-[yellow] tariff">
              есть рассрочка
            </p>
          </div>
          <div className="mt-8 text-[white] text-[1.2rem] online">
            <p data-aos={isMobile ? "fade-right" : "fade-left"}>
              - Онлайн-уроки по всем темам связанными с WILDBERRIES
            </p>
            <p data-aos={isMobile ? "fade-right" : "fade-left"}>
              - Чат-поддержка с резидентами клуба
            </p>
            <p data-aos={isMobile ? "fade-right" : "fade-left"} className="">
              - 12 оффлайн уроков в резиденции клуба
            </p>
            <p data-aos={isMobile ? "fade-right" : "fade-left"}>
              - вход в клуб резидентов CARTEL
            </p>
            <p data-aos={isMobile ? "fade-right" : "fade-left"}>
              - доступ к базам поставщиков и подрядчиков
            </p>
            <p data-aos={isMobile ? "fade-right" : "fade-left"}>
              - доступ ко всем мероприятиям клуба
            </p>
            <p data-aos={isMobile ? "fade-right" : "fade-left"}>
              - встречи и возможность работать над своими проектами в резиденции
            </p>
            <p
              data-aos={isMobile ? "fade-right" : "fade-left"}
              className="mt-8"
            >
              продолжительность:
            </p>
            <p data-aos={isMobile ? "fade-right" : "fade-left"}>
              Обучение 6 недель + доступ к клубу на весь период продления
            </p>
            <div
              onClick={openCloseHandler3}
              data-aos="fade-right"
              className="bg-[#d3d369] bron cursor-pointer text-[1rem] w-[15rem]  ml-20 h-[7vh] flex justify-center items-center mt-12"
            >
              <p className=" font-extrabold text-[black]">
                Забронировать место
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="melg:w-[70rem] w-[50rem] h-[80vh] pll mt-8 ">
        <div className="flex gap-20 pl-4 border-t-2 border-[white] ">
          <div className="text-[1.1rem] ">
            <p
              data-aos="fade-right"
              className="text-[1.4rem] font-bold text-[purple] mt-8 cd:px-0 px-[3rem]"
            >
              Личное сопровождение{" "}
            </p>
            <p data-aos="fade-right" className="text-white cd:px-0 px-[3rem]">
              <span className="text-[grey] line-through">120 000</span> 4000$
            </p>
            <div className="text-[white]">
              <p className="cd:px-0 px-[3rem]" data-aos="fade-right">
                -минимум 2 месяца совместной работы
              </p>
              <p className="cd:px-0 px-[3rem]" data-aos="fade-right">
                -Изучим все тонкости работы с ВБ
              </p>
              <p className="cd:px-0 px-[3rem]" data-aos="fade-right">
                -Дам контакты подрядчиков
              </p>
              <p className="cd:px-0 px-[3rem]" data-aos="fade-right">
                -Вместе построим команду
              </p>
              <p className="cd:px-0 px-[3rem]" data-aos="fade-right">
                -Выберем товары
              </p>
              <p className="cd:px-0 px-[3rem]" data-aos="fade-right">
                -Запустим продажи
              </p>
              <p className="cd:px-0 px-[3rem]" data-aos="fade-right">
                -В общем, тут можно не париться, если есть бюджет на запуск от 1
                млн сом, то смело залетай, сделаем по-красоте
              </p>
            </div>
            <div className=" h-[10vh] flex justify-center">
              <div
                onClick={openCloseHandler4}
                data-aos="fade-right"
                className="bg-[#d3d369] bron cursor-pointer w-[15rem] cd:ml-20 ml-0 h-[7vh] flex justify-center items-center mt-12"
              >
                <p className=" font-extrabold text-[black]">Заполнить анкету</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[75%] h-[110vh] hei">
        <p
          data-aos="fade-right"
          className="text-white md:text-[3rem] text-[1.5rem] font-bold mb-8"
        >
          ОТВЕТЫ НА ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
        </p>
        {faqData.map((faq, index) => (
          <div key={index}>
            <div
              className="flex justify-between items-center border-t-2 border-[white] cursor-pointer h-[10vh]"
              onClick={() => toggleExpand(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <p
                data-aos="fade-right"
                className="md:text-[1.5rem] text-[1rem] text-[white]"
              >
                {faq.question}
              </p>
              {expandedIndex === index ? (
                <XIcon fill="#00BFFF" className="icons" />
              ) : (
                <PlusIcon
                  data-aos={isMobile ? "fade-right" : "fade-left"}
                  fill={hoveredIndex === index ? "#00BFFF" : "#8A2BE2"}
                  className="icons"
                />
              )}
            </div>
            <div
              className={`transition-all duration-1000 overflow-hidden ${
                expandedIndex === index ? "max-h-[200px]" : "max-h-0"
              }`}
            >
              <p className="md:text-[1rem] text-[0.8rem] pt-4 pb-10 text-[white]">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
        <div className="border-t-2 border-[white] "></div>
      </div>
      <p
        data-aos="fade-down"
        className="text-white gd:text-[3rem] text-[2rem] font-bold textt"
      >
        Если у вас остались вопросы пишите в соцсети
      </p>
      <div className="flex phh justify-center gap-4 mt-12">
        <a
          data-aos="zoom-in"
          href="https://www.instagram.com/aktilek.wb/"
          className="w-[13rem] h-[8vh] bg-[#c30593] rounded-[0.5rem] flex justify-center items-center"
        >
          <Instagram />
        </a>

        <a
          data-aos="zoom-in"
          href="https://t.me/+LLA6fr74crBlNWYy"
          className="w-[13rem] h-[8vh] bg-[#00BFFF] rounded-[0.5rem] flex justify-center items-center"
        >
          <Telegram />
        </a>
        <a
          data-aos="zoom-in"
          href="https://vk.com/leoshev4enkoschool?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-"
          className="w-[13rem] h-[8vh] bg-[#354ad3] rounded-[0.5rem] flex justify-center items-center"
        >
          <Vk />
        </a>
      </div>
      <div className="flex phh justify-center gap-4 mt-4">
        <a
          data-aos="zoom-in"
          href="https://dzen.ru/leoshev44enko?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-"
          className="w-[20rem] h-[8vh] bg-[#1dba1d] rounded-[0.5rem] flex justify-center items-center"
        >
          <Whatsapp fill="white" />
        </a>
        <a
          data-aos="zoom-in"
          href="https://www.youtube.com/channel/UCAy8eLRvaazCC5erOqAvIgw?ybp=-gEHYmlvX0xlbw%253D%253D"
          className="w-[20rem] h-[8vh] bg-[red] rounded-[0.5rem] flex justify-center items-center"
        >
          <Youtube />
        </a>
      </div>
      <div className="flex phh justify-center gap-[10rem] mb-20 mt-20">
        <div className="text-white">
          <p data-aos={isMobile ? "fade-right" : "fade-left"}>
            ИП Кадыркулов Адилет
          </p>
          <p data-aos={isMobile ? "fade-right" : "fade-left"}>
            ИНН 861710998730
          </p>
          <p data-aos={isMobile ? "fade-right" : "fade-left"}>
            ОГРНИП 321861700034520
          </p>
        </div>
        <div className="text-white">
          <p data-aos="fade-right" className="cursor-pointer">
            Договор оферты
          </p>
          <p data-aos="fade-right" className="mt-2">
            Электронная почта:
          </p>
          <p data-aos="fade-right">wb.cartel.kg@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "Будет ли запись Практикума?",
    answer: "Да. Запись будет в вашем личнем кабинете на нашей платформе.",
  },
  {
    question: "Для выхода на маркетплейсы нужен большой стартовый бюджет?",
    answer:
      "Стартовать на маркетплейсах можно с бюджетоми 50 000 руб. Главное научиться минимизировать риски, чтобы не потерять деньги на старте. На Практикуме за 2 дня вы пройдете путь селлера от выбора товара до создания карточки и убедитесь, что для старта не нужны большие вложения",
  },
  {
    question: "Я оплатил(а). Что дальше?",
    answer:
      "В течение суток после оплаты на почту, которую вы указали при регистрации, придет письмо с информацией. Если вы не можете найти письмо в папке «Входящие», проверьте папки «Спам» или «Промо».",
  },
  {
    question: "Чем ваше обучение лучше других?",
    answer:
      "Лео Шевченко — действующий селлер с 15-летним опытом, который обучался всему сам. Поэтому обо всех изменениях на маркетплейсах он узнает в числе первых и дает только качественную информацию. А собственная платформа помогает нашим ученикам быстрее адаптироваться к процессу обучения, потому что все нужные материалы собраны в одном месте.",
  },
  {
    question: "Что взять с собой на Практикум?",
    answer:
      "Обязательно возьми с собой заряженный ноутбук, потому что мы будем на практике разбирать работу с таблицами. И не забудь про хорошее настроение!",
  },
  {
    question: "Будут ли на Практикуме практические задания?",
    answer:
      "Конечно! 1-й день практикума больше теоретический. Во 2-й день вас ждет командная бизнес-игра, в которой вы сможете проявить себя как настоящий селлер, проработать свои навыки и применить полученные инструменты и первого дня.",
  },
  {
    question: "Если я не торгую на маркетплейсе, мне нужно идти на Практикум?",
    answer:
      "Практикум - это идеальное место, где вы можете начать свой путь селлера. А также Практикум однозначно стоит посетить, если вы - собственник производства, менеджер маркетплейсов, начинающий или действующий селлер и человек, который ищет новое окружение единомышленников.",
  },
];
