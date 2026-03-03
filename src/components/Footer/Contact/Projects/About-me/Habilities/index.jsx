import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Javascript from "../../../../../../assets/imgs/Javascript.png";
import MYSQL from "../../../../../../assets/imgs/MYSQL.png";
import Python from "../../../../../../assets/imgs/Python.png";
import Typescript from "../../../../../../assets/imgs/Typescript.png";
import React from"../../../../../../assets/imgs/React.png";
import Docker from "../../../../../../assets/imgs/DOCKER.png";
import CSS3 from "../../../../../../assets/imgs/CSS3.png";
import HTML from "../../../../../../assets/imgs/HTML.png";
import AWS from "../../../../../../assets/imgs/AWS.png";
import TailwindCSS from "../../../../../../assets/imgs/TailwindCSS.png";

import './styles.css';

function Habilities(){

    return (
<div id="habilidades" className="flex flex-col items-center gap-10 pl-6 pr-6">
      <section className="text-2xl text-white font-medium relative top-3 lg:text-6xl">HABILIDADES</section>
      {/* Descrição Organizada por Camadas de Valor */}
  <section className="max-w-4xl mb-10 text-gray-300 leading-relaxed">
    <p className="text-base lg:text-xl mb-6">
      Desenvolvo ecossistemas digitais utilizando um stack tecnológico focado em 
      <span className="text-white font-semibold"> performance, escalabilidade e experiência do usuário.</span>
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm lg:text-base">
      {/* Front-end */}
      <div className="space-y-2">
        <h3 className="text-blue-400 font-bold uppercase tracking-widest text-xs">Interface Visual</h3>
        <p>Interfaces modernas e responsivas com <span className="text-gray-100">React, TypeScript, Javascrit TailwindCSS</span>, garantindo fidelidade visual em qualquer dispositivo.</p>
      </div>

      {/* Back-end */}
      <div className="space-y-2">
        <h3 className="text-green-400 font-bold uppercase tracking-widest text-xs">Lógica & Dados</h3>
        <p>Sistemas robustos e seguros construídos com <span className="text-gray-100">Java e Spring Boot</span>, focados em regras de negócio complexas.</p>
      </div>

      {/* DevOps */}
      <div className="space-y-2">
        <h3 className="text-purple-400 font-bold uppercase tracking-widest text-xs">Deploy & Cloud</h3>
        <p>Infraestrutura moderna utilizando <span className="text-gray-100">Docker e AWS</span> para garantir que seu site esteja sempre online e seguro.</p>
      </div>
    </div>
  </section>


      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Typescript} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MYSQL} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Python} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Javascript} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={React} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Docker} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CSS3} />
        </SwiperSlide>
          <SwiperSlide>
          <img src={HTML} />
        </SwiperSlide>
            <SwiperSlide>
          <img src={TailwindCSS} />
        </SwiperSlide>
            <SwiperSlide>
          <img src={AWS} />
        </SwiperSlide>
      </Swiper>
        </div>
    )
}
export default Habilities