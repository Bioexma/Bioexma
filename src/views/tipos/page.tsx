
import { Swiper, SwiperSlide } from 'swiper/react';
import procariota from '../../assets/img/procariota.png';
import { Navigation, Pagination } from 'swiper/modules';

import { useState } from 'react';
export default function TiposDeCelula() {
    const [currentIndex, setCurrentIndex] = useState(0);
      const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === items.length - 1 ? 0 : prev + 1
    );
  };

    const items = [
    {
      titulo: "Membrana celular",
      texto:
        "Tanto las células eucariotas como las procariotas poseen una bicapa lipídica, que es una disposición de fosfolípidos y proteínas que actúa como una barrera selectiva entre el entorno interno y externo de la célula.",
    },
    {
      titulo: "Material genético",
      texto:
        "Tanto las células eucariotas como las procariotas utilizan el ácido desoxirribonucleico (ADN) como base de su información genética. Este material genético es necesario para regular e informar la función celular mediante la creación de ARN por transcripción, seguida de la generación de proteínas por traducción.",
    },
    {
      titulo: "Ribosomas",
      texto:
        "Los ribosomas facilitan la traducción del ARN y la creación de proteínas, lo cual es esencial para el funcionamiento de las células eucariotas y procariotas.",
    },
    {
      titulo: "Citoplasma",
      texto:
        "El citoplasma es el medio en el que tienen lugar las reacciones bioquímicas de la célula, cuyo componente principal es el citosol. En las células eucariotas, el citoplasma comprende todo lo que se encuentra entre la membrana plasmática y la envoltura nuclear, incluyendo los orgánulos; el material dentro del núcleo se denomina nucleoplasma. En las procariotas, el citoplasma abarca todo lo que se encuentra dentro de la membrana plasmática, incluyendo el citoesqueleto y el material genético.",
    },
  ];

  return (
    <section className="flex flex-col gap-6 p-4">
      <div className="grid grid-cols-14xl gap-4">
        <div className="font-semibold flex flex-col bg-[#6bc4b077] rounded-2xl p-6 justify-center shadow-md h-64">
          <h1 className="sm:text-3xl md:text-5xl font-bold mb-4 text-gray-800 text-center">Tipos de Células</h1>
          <p className="sm:text-3xl md:text-2xl text-gray-700"></p>

        </div>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm mt-4 ">
         <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4"></h3>
            <p className="mb-4 text-lg leading-relaxed" >
                Los eucariotas son organismos cuyas células poseen un núcleo encerrado en una membrana celular, lo que constituye uno de los tres dominios de la vida: el eucariota.
                  Incluyen organismos multicelulares como plantas, animales y hongos. Las bacterias y las arqueas, los otros dos dominios de la vida, son células procariotas. Carecen de compartimentos celulares delimitados por membranas, como el núcleo.
            </p>
            <div>
            <p className='text-2xl font-semibold text-gray-800 mt-8 mb-4  pb-2' >Existen dos tipos principales de células:</p>
    
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 justify-center">
            <div className="bg-blue-50 p-5 rounded-lg shadow-sm flex flex-col transition-all duration-300 hover:scale-[1.02]">
              <div className="font-bold text-blue-600">Células procariotas:</div>
              <div className="text-gray-600">Son células simples, sin núcleo definido, y su material genético está
                disperso en el citoplasma. Ejemplos: bacterias y arqueas.</div>
              <strong></strong>
              <div className="flex flex-col justify-center shadow-lg rounded-xl overflow-hidden h-[500px] mt-2">
                <iframe
                  className="h-full"
                  title="EVE3D - Célula Procariota"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  xr-spatial-tracking
                  execution-while-out-of-viewport
                  execution-while-not-rendered
                  web-share
                  
                  src="https://sketchfab.com/models/5a7917054d26462ba1b49a4ce2d3b7ae/embed"
                  ></iframe>
              </div>
    
            </div>
            <div className="bg-blue-50 p-5 rounded-lg shadow-sm transition-all duration-300 hover:scale-[1.02] ">
              <div className="font-bold text-blue-600">Células eucariotas:</div>
              <div className="text-gray-500">Son más complejas y tienen un núcleo definido que contiene el ADN.
                Se encuentran en plantas, animales, hongos y protistas.</div>
              <strong></strong>
              <div className="flex flex-col justify-center shadow-lg rounded-xl overflow-hidden h-[500px] mt-2">
                <iframe
                  className="h-full"
                  title="EVE3D Célula Eucariota Animal"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  xr-spatial-tracking
                  execution-while-out-of-viewport
                  execution-while-not-rendered
                  web-share
                  
                  src="https://sketchfab.com/models/fb3311da5c9a4572bda870f6d356d83a/embed"
                  ></iframe>
              </div>
            </div>
    
          </div>
        </div>
        </div> 
<div className='bg-purple-50 p-4 rounded-lg mb-6 text-center'>

        <h3 className="text-2xl font-semibold text-purple-900 mt-8 mb-4">Similitudes entre células eucariotas y procariotas</h3>
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Contenedor del slide */}
      <div className="overflow-hidden rounded-2xl  shadow-md">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 p-6 bg-white">
              <h4 className="font-bold text-lg mb-2 text-gray-800">
                {item.titulo}
              </h4>
              <p className="text-gray-600">{item.texto}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute md:-left-20 sm:left-2 top-1/2 -translate-y-1/2 bg-white  rounded-full p-2 shadow hover:bg-gray-100"
        >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute md:-right-20 sm:right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
        >
        ▶
      </button>

      {/* Indicadores */}
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`w-3 h-3 rounded-full ${
            index === currentIndex ? "bg-gray-800" : "bg-gray-400"
          }`}
          />
        ))}
      </div>
        </div>
    </div>
         <div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Disposición celular </h3>
            <p className="mb-4" >
               Los eucariotas suelen ser pluricelulares, mientras que los procariotas son unicelulares. Sin embargo, existen algunas excepciones: entre los eucariotas unicelulares se incluyen las amebas, los paramecios y las levaduras.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4"> Núcleo verdadero delimitado por membrana</h3>
            <p className="mb-4" >Las células eucariotas poseen un núcleo verdadero rodeado por una doble membrana. Este contiene las funciones relacionadas con el ADN de la célula grande en un espacio más reducido para garantizar la proximidad de los materiales y una mayor eficiencia en la comunicación y las funciones celulares. En cambio, las células procariotas, más pequeñas, carecen de núcleo. Los materiales ya están bastante cerca unos de otros y solo existe un "nucleoide", que es la región central abierta de la célula donde se encuentra el ADN.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Estructura del ADN</h3>
            <p className="mb-4" >El ADN eucariota es lineal y está formado por proteínas de empaquetamiento llamadas "histonas", antes de organizarse en varios cromosomas. El ADN procariota es circular y no está asociado con histonas ni organizado en cromosomas. Una célula procariota es más simple y requiere muchos menos genes para funcionar que una célula eucariota. Por lo tanto, contiene solo una molécula de ADN circular y varios círculos de ADN más pequeños (plásmidos).
            </p>
            <div className="mt-8 rounded-xl overflow-hidden shadow-md w-1/2 h-1/3 ">
                <img
                    src={procariota}
                    alt="Fundadores de la teoría celular: Schleiden, Schwann y Virchow"
                    className=""
                    loading="lazy"
                />
                <p className="text-sm text-gray-500 bg-gray-100 p-2">Estructura de una célula procariota. (En Arte / Shutterstock)</p>
            </div>
         </div>
         <div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">orgánulos unidos por membrana</h3>
            <p className='mb-4'>
              Las células eucariotas contienen muchos orgánulos grandes y complejos rodeados por membranas en el citoplasma, mientras que las células procariotas no contienen estos orgánulos rodeados por membranas.
            </p>
            <p className='mb-4'>
              Esta es una diferencia clave porque permite un alto nivel de división intracelular del trabajo y contribuye a la mayor complejidad característica de las células eucariotas.
            </p>
            <p className='mb-4'>
              Debido al mayor tamaño de las células eucariotas, confinar ciertos procesos celulares a un área más pequeña también aumenta la eficiencia de las funciones al mejorar la comunicación y el movimiento dentro de la célula.
            </p>
            <p className='mb-4'>
              Sólo los eucariotas poseen un núcleo rodeado por una membrana y orgánulos rodeados por una membrana, como las mitocondrias, el aparato de Golgi, los lisosomas, los peroxisomas y el RE.
            </p>

          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Tamaño del ribosoma</h3>
            <p className='mb-4'>
              Tanto las células eucariotas como las procariotas contienen muchos ribosomas; sin embargo, los ribosomas de las células eucariotas son más grandes que los ribosomas procariotas, es decir, 80S en comparación con 70S.
            </p>
            <p className='mb-4'>
              Los ribosomas eucariotas también presentan mayor complejidad que los procariotas: están compuestos por cinco tipos de ARN ribosómico y unos ochenta tipos de proteínas. En cambio, los ribosomas procariotas se componen de solo tres tipos de ARNr y unos cincuenta tipos de proteínas.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Citoesqueleto</h3>
            <p className='mb-4'>
              Este es un sistema multicomponente en eucariotas, compuesto por microtúbulos, filamentos de actina y filamentos intermedios. Es necesario para mantener la forma celular, proporcionar organización interna y soporte mecánico. También es fundamental para el movimiento y la división celular.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Reproducción celular</h3>
            <p className='mb-4'>
              La mayoría de los eucariotas se reproducen sexualmente, mientras que los procariotas se reproducen asexualmente. La reproducción sexual en eucariotas da lugar a una descendencia con material
genético que es una mezcla del genoma de los progenitores, y durante este proceso se genera variación genética mediante recombinación sexual.
            </p>
            <p className='mb-4'>
              Por otro lado, un procariota reproducirá clones de sí mismo mediante fisión binaria y depende más de la transferencia genética horizontal para la variación.
            </p>

          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">División celular</h3>
            <p className='mb-4'>
              Esto ocurre por mitosis en las células eucariotas y por fisión binaria en las células procariotas.
            </p>
            <p className='mb-4'>
              Las células eucariotas experimentan mitosis y posteriormente citocinesis. Esto implica varias etapas: la membrana nuclear se desintegra y los cromosomas se clasifican y separan para garantizar que cada célula hija reciba dos juegos de cromosomas (un número diploide). Posteriormente, el citoplasma se divide para formar dos células hijas genéticamente idénticas (citocinesis).
            </p>
            <p className='mb-4'>
              En cambio, los procariotas experimentan un proceso más simple de fisión binaria. Este es más rápido que la mitosis e implica la replicación del ADN (nucleoide), la segregación cromosómica y, finalmente, la separación celular en dos células hijas genéticamente idénticas a la célula progenitora. A diferencia de la mitosis, este proceso no implica la formación de la envoltura nuclear ni del centrómero y el huso.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">CELULA PROCARIOTAS</h3>
            <p className='mb-4'>
              Tómate un momento y mírate a ti mismo. ¿Cuántos organismos ves? Tu primer pensamiento podría ser: solo uno, tú mismo. Sin embargo, si pudieras mirar más de cerca la superficie de tu piel o dentro de tu sistema digestivo, verías que en realidad hay muchos organismos que viven allí. ¡Así es! ¡Eres el hogar de alrededor de billones de células bacterianas!
            </p>
            <p className='mb-4'>
              Esto significa que tu cuerpo en realidad es un ecosistema. También quiere decir que tú, en alguna definición de la palabra tú, constas en realidad de los dos tipos principales de células: procariontes y eucariontes.
            </p>
            <p className='mb-4'>
              Todas las células entran en alguna de estas dos grandes categorías. Solo los organismos unicelulares de los dominios Bacteria y Archaea se clasifican como procariontes: pro significa antes de, y karyo, núcleo. Los animales, las plantas, los hongos y los protistas son todos eucariontes —eu significa verdadero— y están hechos de células eucariontes. Sin embargo, frecuentemente se encuentran algunos amigos procariontes rondando por ahí, como en el caso de los que viven con nosotros los humanos.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Componentes de las células procariontes</h3>
            <p className='mb-4'>
              Hay algunos ingredientes esenciales que una célula necesita para ser una célula, ya sea procariota o eucariota. Todas las células comparten cuatro componentes fundamentales:
            </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-start">
                        <span className="material-icons mr-2 text-green-600">La membrana plasmática</span>
                        <span>que es una cubierta externa que separa el interior de la célula de su entorno.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="material-icons mr-2 text-blue-600">El citoplasma</span>
                        <span>que se compone del citosol gelatinoso al interior de la célula y las estructuras celulares suspendidas en él. En eucariontes, el citoplasma se refiere específicamente a la región que se encuentra fuera del núcleo, pero dentro de la membrana plasmática.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="material-icons mr-2 text-purple-600">El ADN</span>
                        <span>que es el material genético de la célula</span>
                    </li>
                    <li className="flex items-start">
                        <span className="material-icons mr-2 text-teal-600">Los ribosomas</span>
                        <span>que son máquinas moleculares que sintetizan proteínas.</span>
                    </li>
                </ul>
            </div>
            <p className='mb-4'>
              A pesar de estas similitudes, los procariontes y eucariontes difieren en una cantidad importante de formas. Un procarionte es un organimso unicelular simple que carece de un núcleo y de organelos rodeados de membrana. Hablaremos del núcleo y de los organelos rodeados de membrana en el artículo sobre células eucariontes, pero por lo pronto lo que hay que tener en cuenta es que las células procariontes no están divididas internamente por paredes membranosas, sino consisten de un solo espacio.
            </p>
            <p>
              La mayor parte del procarionte se encuentra en una región central de la célula llamanda el nucleoide que típicamente se conforma de
un gran bucle único conocido como el cromosoma circular. El nucleoide y otras características frecuentemente observadas de los procariontes se muestran en el diagrama siguiente del corte de una bacteria con forma de bastón.
            </p>
          </div>


    </section>
  );
}