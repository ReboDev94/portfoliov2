import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const about = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] md:grid md:place-content-center">
      <div className="gap-10 flex flex-col md:grid md:grid-cols-2 py-10 md:py-0">
        <div className="flex flex-col relative h-28 md:h-full">
          <Image
            src="/img/about-me.jpg"
            alt="about-me"
            fill
            sizes='100%'
            priority
            className="rounded-md h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-8 ">
          <h1 className="text-3xl font-semibold">
            <span className="text-light-black/70">A</span>bout Me
          </h1>
          <p>
            Soy un profesional en desarrollo web full-stack con 5 años de experiencia, con especialización en
            JS y PHP, me he distinguido por colaborar y dirigir proyectos de pequeña a mediana escala.
            Capacidad de trabajo en equipo, toma de decisiones, resolución de conflictos, adaptación a los
            cambios y aprendizaje constante.
          </p>
          <p>
            Soy Cofundador de <span className="font-bold">Turink software solutions</span> donde me desempeño
            como programador de software a la medida y lider de proyectos, mi enfoque principal es construir
            productos escalables y de calidad.
          </p>
          <p>
            Mis tecnologías favoritas para trabajar son VueJs, ReactJS, Node y Laravel todo bajo un entorno
            linux.
            <FontAwesomeIcon icon={faHeart} className="text-red-600" style={{ fontSize: 20 }} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default about;
