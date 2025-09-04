import React from 'react';
import TitleCard from '../../components/sidebar/title';
import CardModel from '../../components/card';

interface Organelo {
  nombre: string;
  descripcion: string;
  modelo3D: {
    titulo: string;
    url: string;
  };
}

const OrganelosCelulares: React.FC = () => {
  const organelos: Organelo[] = [
    {
      nombre: "Mitocondrias",
      descripcion: "Producen energía mediante la respiración celular.",
      modelo3D: {
        titulo: "Mitocondrias",
        url: "https://sketchfab.com/models/646844cf2b4b4d8081641b59573820a9/embed?ui_infos=0"
      }
    },
    {
      nombre: "Cloroplastos",
      descripcion: "Realizan la fotosíntesis en células vegetales.",
      modelo3D: {
        titulo: "EVE3D Cloroplasto",
        url: "https://sketchfab.com/models/fc317fec13d54b35becf29791f3e54b6/embed"
      }
    },
    {
      nombre: "Ribosomas",
      descripcion: "Sintetizan proteínas.",
      modelo3D: {
        titulo: "Ribosoma",
        url: "https://sketchfab.com/models/c586d726ef6344699fcbb2589845026e/embed?ui_infos=0"
      }
    },
    {
      nombre: "Retículo endoplasmático",
      descripcion: "Síntesis y transporte de proteínas y lípidos.",
      modelo3D: {
        titulo: "Retículo endoplasmático",
        url: "https://sketchfab.com/models/1546395980f64c3e9384790628230ace/embed?ui_infos=0"
      }
    },
    {
      nombre: "Aparato de Golgi",
      descripcion: "Modifica y empaca proteínas y lípidos para su transporte.",
      modelo3D: {
        titulo: "Aparato de Golgi",
        url: "https://sketchfab.com/models/f6e68999789244b48fe620e3f6c75626/embed?ui_infos=0"
      }
    },
    {
      nombre: "Lisosomas",
      descripcion: "Degradan sustancias y organelos dañados.",
      modelo3D: {
        titulo: "Lisosomas",
        url: "https://sketchfab.com/models/8fafcf0b41f14bbe8409ef008e2ea7c6/embed?ui_infos=0"
      }
    }
  ];

  return (
    <section className='flex flex-col gap-6 p-4'>
      <TitleCard title='Organelos Celulares' sub='' color='#EEC4F5' />
      <div className="bg-white rounded-xl p-6  mt-4">
         <p className='text-2xl font-semibold text-gray-800 mt-8 mb-4  pb-2' >Los organelos son estructuras especializadas dentro de las células eucariotas:</p>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6 justify-center'>
          {organelos.map((organelo, index) => (
            <CardModel key={index} color_card='#FAF0F1' title={organelo.nombre} sub={organelo.descripcion} link={organelo.modelo3D.url} />

          ))}
        </div>

        <ul className="organelos-list">
        </ul>
      </div>
    </section>
  );
};

interface SketchfabEmbedProps {
  title: string;
  src: string;
  width?: number;
  height?: number;
}

const SketchfabEmbed: React.FC<SketchfabEmbedProps> = ({
  title,
  src,
  width = 740,
  height = 480
}) => (
  <div className="sketchfab-embed-wrapper">
    <iframe
      title={title}
      frameBorder="0"
      allowFullScreen

      allow="autoplay; fullscreen; xr-spatial-tracking"
      xr-spatial-tracking
      execution-while-out-of-viewport
      execution-while-not-rendered
      web-share
      width={width}
      height={height}
      src={src}
    />
  </div>
);

export default OrganelosCelulares;