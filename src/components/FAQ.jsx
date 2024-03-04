import React, { useEffect, useState } from 'react';
import Faq from 'react-faq-component';
import './FAQ.css';

const data = {
    rows: [
  {
    title: '¿Cuál es su tarifa por hora?',
    content:
      'La tarifa por hora en la que acordemos dependerá de varios factores, como la complejidad de su proyecto. Si desea conocer el rango de nuestros precios, encontrará toda la información que necesita en nuestra presentación de la empresa.',
  },
  {
    title: '¿Cuánto tiempo llevará mi proyecto?',
    content:
      'Un sitio web Jamstack con 5-7 plantillas de diseño diferentes nos lleva entre 4-6 semanas de trabajo de desarrollo (con opción de CMS completo). Por supuesto, asumiendo que tenemos todos los activos de diseño proporcionados.',
  },
  {
    title: '¿Cuánto tiempo lleva Bejamas operando?',
    content:
      'Aunque todos nosotros hemos estado navegando por el mundo web y del marketing durante mucho tiempo, somos una marca bastante joven. Juntos comenzamos como una pequeña tienda de desarrollo web para pequeñas y medianas empresas en 2017, y Bejamas (tal como la ve hoy) nació felizmente en 2018.',
  },
  {
    title: '¿Tienen ejemplos de trabajos anteriores para compartir?',
    content:
      'Con más de 30 sitios web y aplicaciones construidas con generadores de sitios estáticos, tenemos un buen número de ellos. ¿Desea explorar la cartera completa? Póngase en contacto con nuestro equipo de ventas, estarán encantados de enviarle una presentación de nuestra vitrina.',
  },
  {
    title: '¿Tienen sus propios diseñadores?',
    content: '¡Sí, los tenemos!',
  },
],
  };
  
  const styles = {
    bgColor: 'trasparent',
    titleTextColor: '#000',
    rowTitleColor: '#000',
    rowContentColor: '#3c4856c2',
    rowContentTextSize: '20px',
    rowContentPaddingTop: '37px',
    rowContentPaddingBottom: '37px',
    arrowColor: '#bdbdbd',
  };
  
  const config = {
    animate: true,
    arrowIcon: '+',
    // tabFocus: true
  };

export default function FAQ() {
  return <div>
    <h1>FAQ</h1>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>;
}