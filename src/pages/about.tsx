import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const about = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] grid place-content-center">
      <div className="grid grid-cols-2 gap-10 p-6">
        <div className="flex flex-col relative">
          <Image
            src="/img/about-me.jpg"
            alt="about-me"
            fill
            className="rounded-md h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-8 text-neutral-800">
          <h1 className="text-3xl font-semibold">
            <span className="text-red-600">A</span>bout Me
          </h1>
          <p>
            Soy un profesional en desarrollo web full-stack con 4 años de experiencia, con especialización en
            JS y PHP, me he distinguido por colaborar y dirigir proyectos de pequeña a mediana escala.
            Capacidad de trabajo en equipo, toma de decisiones, resolución de conflictos, adaptación a los
            cambios y aprendizaje constante.
          </p>
          <p>
            Soy Cofundador de <span className="font-bold">Turink software solutions</span> donde me desempeño
            con programador de software a la medida y lider de proyectos, mi enfoque principal es construir
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
