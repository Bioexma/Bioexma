import React from 'react';
import TitleCard from '../../components/sidebar/title';
import CardModel from '../../components/card';

interface TipoReproduccion {
  nombre: string;
  descripcion: string;
  videoUrl: string;
  videoTitle: string;
}

const ReproduccionCelular: React.FC = () => {
  const tiposReproduccion: TipoReproduccion[] = [
    {
      nombre: "Mitosis",
      descripcion: "División celular para crecimiento y reparación, produciendo dos células hijas idénticas.",
      videoUrl: "https://www.youtube.com/embed/u2WZp9p4jr4?si=MO5oVQ1yGC269x9w",
      videoTitle: "Proceso de Mitosis"
    },
    {
      nombre: "Meiosis",
      descripcion: "División celular para la formación de gametos, reduciendo a la mitad el número de cromosomas.",
      videoUrl: "https://www.youtube.com/embed/AUnJuvHdt3E?si=xrbCnFXk9_COzepo",
      videoTitle: "Proceso de Meiosis"
    }
  ];

  return (
    <section className='flex flex-col gap-6 p-4'>
      <TitleCard title='Reproducción Celular' color='#D1E1F0' />
      <div className="bg-white rounded-xl p-6  mt-4">


        <p className='text-2xl font-semibold text-gray-800 mt-8 mb-4  pb-2' >La reproducción celular puede ser de dos tipos principales:</p>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6 justify-center '>

          {tiposReproduccion.map((tipo, index) => (

            <CardModel color_card='#D8D1F0' key={index} title={tipo.nombre} sub={tipo.descripcion} link={tipo.videoUrl} />

          ))}


        </div>


        <div className="grid grid-cols-1 justify-center">
          <p className='text-2xl font-semibold text-gray-800 mt-8 mb-4 border-b-1  pb-2' >Juego interactivo</p>
          <CardModel link='https://wordwall.net/es/embed/320f6e96a0014a6cbbcf5c02e857c0c2?themeId=48&templateId=36&fontStackId=0' />

        </div>
      </div>
    </section>
  );
};

interface YouTubeEmbedProps {
  url: string;
  title: string;
  width?: number;
  height?: number;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  url,
  title,
  width = 950,
  height = 515
}) => (
  <iframe
    width={width}
    height={height}
    src={url}
    title={title}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
);

export default ReproduccionCelular;