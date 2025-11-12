import CardModel from "../../components/card"
import TitleCard from "../../components/sidebar/title"
import Slider from "../../components/slider";
import SliderText from "../../components/slider/slider";
const item=[
  {
    titulo:"Enfermedades genéticas:",
    texto:"Mutaciones en el ADN nuclear causan trastornos como fibrosis quística o distrofia muscular de Duchenne."},
    {
    titulo:"Cáncer:",
    texto:"Mutaciones en genes del núcleo alteran el ciclo celular y causan proliferación descontrolada."
    },
    {
    titulo:"Enfermedades neurodegenerativas:",
    texto:"Disfunciones nucleares contribuyen al Alzheimer y al Parkinson."
    }
]
const intem2=[
  {
    titulo:"Mitocondrias",
    texto:"Las mitocondrias son organelos con doble membrana; la membrana interna forma crestas que aumentan su superficie. En su interior, la matriz mitocondrial contiene ADN propio y ribosomas. Su función principal es producir energía química (ATP) mediante reacciones que transforman moléculas orgánicas en presencia de oxígeno, lo que permite mantener los procesos vitales de la célula."},
    {
      titulo:"Cloroplasto",
      texto:"Los cloroplastos son organelos exclusivos de las células vegetales y algas, responsables de la fotosíntesis. Tienen una doble membrana y contienen tilacoides apilados en estructuras llamadas grana, donde se encuentran los pigmentos fotosintéticos como la clorofila. Los cloroplastos capturan la energía luminosa y la convierten en energía química (glucosa) mediante la fotosíntesis, liberando oxígeno como subproducto."

  },
  {
    titulo:"Ribosomas",
    texto:"Son organelos formados por dos subunidades (mayor y menor) que se originan en el nucleolo y que, una vez en el citoplasma se ensamblan para llevar a cabo su función. Los ribosomas están a cargo de la fabricación o síntesis de las proteínas, los hacen libres en el citoplasma o asociados a la superficie del RER."
  },
  {
    titulo:"Centriolos",
    texto:"Son dos estructuras formadas por filamentos que pueden observarse en el citoplasma de las células animales. Participan durante la división de la célula."
  },
  {
    titulo:"Pared celular",
    texto:"Las células vegetales, por fuera de la membrana plasmática, presentan una pared celular que le brinda protección. Tiene una composición distinta a las paredes que se encuentran en las células procariotas. Los depósitos de ciertos compuestos en las paredes celulares otorgan a las partes de las plantas la dureza y rigidez características." 
  }

]
export default function PartesDeCelula() {
  return (
    <section className="flex flex-col gap-6 p-4">
      <TitleCard title="Partes de la Célula" color="#B8DEE6" sub="" ></TitleCard>
      <div className="bg-white rounded-xl p-6  mt-4">
        <p className='text-2xl font-semibold text-gray-800 mt-8 mb-4  pb-2' >Las células tienen varias estructuras principales que desempeñan funciones específicas:</p>

        <div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-6">Membrana celular</h2>
            <p className="text-blue-800">
              La membrana plasmática o membrana celular es la capa externa que delimita y protege a todas las células. Está compuesta principalmente por una doble capa de lípidos (fosfolípidos) y proteínas, y en algunos casos contiene azúcares (glúcidos).
              Su grosor es muy pequeño (alrededor de 7,3 nanómetros), por lo que solo puede observarse con un microscopio electrónico. En las células vegetales y de los hongos se encuentra debajo de la pared celular.
              <h3 className="text-2xl font-semibold text-indigo-600 mb-6 mt-6">Características principales</h3>
              <ol className="list-decimal pl-5 space-y-3  mb-3">
                <li>Permeabilidad selectiva: regula la entrada y salida de sustancias, permitiendo solo el paso de ciertas moléculas según las necesidades de la célula.</li>
                <li>Composición mixta: está formada por fosfolípidos y proteínas, donde las proteínas se insertan en la bicapa lipídica.</li>
                <li>Estructura fluida: los componentes (lípidos y proteínas) pueden moverse libremente, lo que permite flexibilidad y dinamismo en la membrana.</li>
              </ol>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-6 mt-6">Composición</h3>
              <ol className="list-decimal pl-5 space-y-3  mb-3">
                <li>Fosfolípidos: moléculas con una cabeza hidrofílica (afinidad por el agua) y colas hidrofóbicas (repelen el agua), que se organizan en una bicapa.</li>
                <li>Proteínas: regulan el transporte de sustancias, permiten la comunicación entre células y actúan como receptores de señales externas.</li>
                <li>Glúcidos: se encuentran en la parte externa y sirven como elementos de reconocimiento celular (representan cerca del 8% de la membrana).</li>
              </ol>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-6 mt-6">Funciones principales</h3>
              <ol className="list-decimal pl-5 space-y-3  mb-3">
                <li>Delimitar la célula: separa el interior del entorno, manteniendo su integridad.</li>
                <li>Regular el intercambio de sustancias: mantiene el equilibrio interno (homeostasis) mediante su permeabilidad selectiva.</li>
                <li>Comunicación celular: capta señales del exterior y las transmite al interior, participando en procesos como la división y el movimiento celular.</li>
              </ol>

            </p>
          </div>
          <div>

          </div>
        </div>

        <div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mb-6">
            <h2 className="text-2xl font-semibold text-red-600 mb-6">citoplasma</h2>
            <p className="">
              El citoplasma es todo lo que está dentro de la membrana plasmática, excepto el núcleo. Contiene el citosol (sustancia acuosa y gelatinosa) y los orgánulos.
              <h3 className="text-2xl font-semibold  mb-6 mt-6 text-red-600">Funciones principales:</h3>
              <ol className="list-decimal pl-5 space-y-3  mb-3">
                <li>Suspende los orgánulos.</li>
                <li>Mantiene la forma de la célula al presionar la membrana.</li>
                <li>Permite muchas reacciones bioquímicas.</li>
              </ol>
              <h2 className="text-2xl font-semibold mb-6 text-red-600">Citoesqueleto</h2>
              <p>Es una red de filamentos proteicos que da forma, soporte y movimiento a la célula. Está presente en células eucariotas y también en algunas procariotas. Es dinámico, ya que sus filamentos se ensamblan y desensamblan según las necesidades de la célula.</p>
              <h3 className="text-2xl font-semibold mb-6 mt-6 text-red-600">Propiedades:</h3>
              <ol className="list-decimal pl-5 space-y-3  mb-3">
                <li>Polimerización y despolimerización: permite formar o deshacer filamentos fácilmente.</li>
                <li>Polarización: los filamentos tienen un extremo diferente del otro, lo que orienta el transporte y el crecimiento.</li>
                <li>Regulación: proteínas motoras y asociadas controlan su organización y movimiento.</li>
              </ol>
              <h3 className="text-2xl font-semibold mb-6 mt-6 text-red-600">Funciones principales</h3>
              <ol className="list-decimal pl-5 space-y-3  mb-3">
                <li>Mantiene la forma celular y la organización interna.</li>
                <li>Permite el movimiento celular y el transporte interno de vesículas y orgánulos.</li>
                <li>Participa en la división celular, endocitosis y exocitosis.</li>
                <li>Da resistencia mecánica (especialmente en células animales).</li>
              </ol>

            </p>
          </div>
          
          <div>

          </div>
        </div>
        <div>
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mb-6">
            <h2 className="text-2xl font-semibold text-yellow-600 mb-6">Núcleo celular</h2>
            <p className="">
              El núcleo es el orgánulo más importante de las células eucariotas, ya que contiene el ADN y controla todas las funciones celulares. Actúa como el centro de control genético, regulando la actividad celular, la reproducción y la síntesis de proteínas.
              <h3 className="text-2xl font-semibold  mb-6 mt-6 text-yellow-600">Características generales</h3>
              <ol className="list-decimal pl-5 space-y-3  mb-3">
                <li>Es exclusivo de las células eucariotas.</li>
                <li>Tiene una forma esférica u ovalada.</li>
                <li>Está rodeado por una doble membrana llamada envoltura nuclear, que separa el núcleo del citoplasma y regula el intercambio de sustancias.</li>
                <li>En organismos multicelulares, el núcleo se adapta a la función de cada célula (los eritrocitos maduros carecen de núcleo).</li>
              </ol>
              <h3 className="text-2xl font-semibold mb-6 mt-6 text-yellow-600">Componentes del núcleo</h3>
              <ol className="list-decimal pl-5 space-y-3  mb-3">
                <li>Envoltura nuclear: doble membrana con poros nucleares que permiten el paso de ARN y proteínas.</li>
                <li>Nucleoplasma: medio interno donde ocurren reacciones químicas.</li>
                <li>Cromatina: ADN asociado a histonas; forma los cromosomas durante la división celular.</li>
                <li>Nucleolo: produce ARN ribosomal y ensambla las subunidades de los ribosomas.</li>
                <li>Poros nucleares: controlan el intercambio selectivo de moléculas con el citoplasma.</li>
              </ol>
              <h3 className="text-2xl font-semibold mb-6 mt-6 text-yellow-600">Funciones principales</h3>
              <ol className="list-decimal pl-5 space-y-3  mb-3">
                <li>Almacenar y proteger el ADN.</li>
                <li>Regular la expresión génica.</li>
                <li>Dirigir la replicación del ADN en la división celular.</li>
                <li>Producir ARN mensajero (ARNm) para la síntesis de proteínas.</li>
                <li>Formar ribosomas en el nucleolo.</li>
              </ol>

            </p>
          </div>
          
          <div>

          </div>
        </div>
        
        <div>
          <SliderText items={item} titulo="Enfermedades relacionadas con el núcleo celular"></SliderText>
          
          <SliderText items={intem2} titulo="otras partes"></SliderText>

          
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 justify-center">

          <CardModel title="Membrana plasmática:" sub="Capa que protege la célula y regula el intercambio de sustancias." color_card="#EDF8F2" link="https://sketchfab.com/models/d052f6892768415a8457e77f559f16ab/embed"></CardModel>
          <CardModel title="Citoplasma:" sub="Material gelatinoso donde ocurren las reacciones celulares." color_card="#EDF8F2" link="https://sketchfab.com/models/ed1f469973564889b1d9cce56e68d27b/embed" ></CardModel>
          <CardModel title="Núcleo" sub=" Contiene el material genético y controla las actividades celulares (solo en células eucariotas)" color_card="#EDF8F2" link="https://sketchfab.com/models/f352d13aafad414c96ea5deec2127345/embed?ui_infos=0" ></CardModel>
          <CardModel title="Pared celular:" sub="Presente en células vegetales y procariotas, proporciona soporte y protección." color_card="#EDF8F2" link="https://sketchfab.com/models/c80677e0d32a4e7eb19268ca3eb6d538/embed?ui_infos=0" ></CardModel>

        </div>
      </div>


    </section>
  );


}