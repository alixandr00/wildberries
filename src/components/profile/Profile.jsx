import React, { useState } from "react";
import "./Profile.css";
import Image1 from "../../assets/Снимок экрана 2024-05-06 203301.png";
import Image2 from "../../assets/Снимок экрана 2024-05-06 203559.png";
import {
  FaFacebookF,
  FaYoutube,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";

export const Profile = () => {
  const [image, setImage] = useState(Image1);

  return (
    <div className="h-[65vh] ">
      <div className="bg-[#000000] h-[20vh]"></div>
      <div className="bg-[#000000] h-[55vh] flex justify-center">
        <div className="bg-[white] rounded-t-[2rem] h-[45vh] w-[30rem]">
          <div className="flex justify-center">
            <img
              className="w-[10rem] h-[10rem] rounded-[50%] border-[0.5rem] border-[white] mt-[-5rem]"
              src={image}
              alt="Profile"
              onMouseEnter={() => setImage(Image2)}
              onMouseLeave={() => setImage(Image1)}
            />
          </div>
          <div className="flex flex-col items-center">
            <p>Создатель</p>
            <p className="text-[1.3rem] font-bold">Ибрахимов Актилек</p>
            <p className="px-2 mt-2 text-center">
              Мыслитель-практик изучающий законы этого мира для зарабатывания
              больших денег и проживания счастливой жизни.
            </p>
            <div className="social-icons">
              <a href="#" className="icon icon-telegram">
                <FaTelegram size="30px" />
              </a>
              <a href="#" className="icon icon-youtube">
                <FaYoutube size="30px" />
              </a>
              <a href="#" className="icon icon-facebook">
                <FaFacebookF size="30px" />
              </a>
              <a href="#" className="icon icon-instagram">
                <FaInstagram size="30px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
