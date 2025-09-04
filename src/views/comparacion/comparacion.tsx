import React from 'react';
import TitleCard from '../../components/sidebar/title';
import CardModel from '../../components/card';

interface ComparacionItem {
  titulo: string;
  descripcion: string;
  modelo3D?: {
    titulo: string;
    src: string;
    width?: number;
    height?: number;
  };
}

const ComparacionCelular: React.FC = () => {
  const itemsComparacion: ComparacionItem[] = [
    {
      titulo: "Células vegetales",
      descripcion: "Tienen pared celular, cloroplastos y vacuolas grandes.",
      modelo3D: {
        titulo: "Structure of a Plant Cell",
        src: "https://sketchfab.com/models/ebd0a1bbccb14e3d8f6cb73d75d6f69d/embed",
        width: 750,
        height: 580
      }
    },
    {
      titulo: "Células animales",
      descripcion: "Carecen de pared celular y cloroplastos, tienen vacuolas pequeñas.",
      modelo3D: {
        titulo: "Celula Animal",
        src: "https://sketchfab.com/models/23c9bccc33cb4d2f8ec3a0903262bf29/embed",
        width: 750,
        height: 480
      }
    },

  ];

  const juegos = [
    {
      src: "https://wordwall.net/es/embed/e508332a38bd4d868aae89e952e858a9?themeId=52&templateId=2&fontStackId=0",
      height: 580
    },
    {
      src: "https://wordwall.net/es/embed/e74628dff1c74cb6ba97e4153317919a?themeId=65&templateId=3&fontStackId=1",
      height: 580
    },

  ];

  return (
    <section className='flex flex-col gap-6 p-4'>
      <TitleCard title='Comparación Animal/Vegetal' color='#F0D1D6' />

      <div className="bg-white rounded-xl p-6  mt-4 ">


        <p className='text-2xl font-semibold text-gray-800 mt-8 mb-4  pb-2' >Las células animales y vegetales tienen similitudes y diferencias importantes:</p>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6'>


          {itemsComparacion.map((item, index) => (

            <CardModel key={index} title={item.titulo} sub={item.descripcion} link={item.modelo3D?.src} color_card='#D1F0EB'></CardModel>

          ))}

        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mt-6">
          <h4 className="font-bold text-lg text-yellow-800 mb-2">Similitudes</h4>
          <p className="text-yellow-900">
            Ambas tienen núcleo, membrana plasmática y organelos comunes.
          </p>
        </div>


        <div className="grid grid-cols-1">
          <p className='text-2xl font-semibold text-gray-800 mt-8 mb-4 border-b-1  pb-2' >Juego interactivo</p>

          {juegos.map((juego, index) => (

            <CardModel key={index} link={juego.src} />

          ))}

        </div>

      </div>
    </section>
  );
};


export default ComparacionCelular;