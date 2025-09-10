
import Chatbot from "../../components/chatbot";
import teoria from "../../assets/img/teoria.png";
export default function TeoriaCelular() {
    return (
<section className="flex flex-col gap-6 p-4">
    

    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="font-semibold flex flex-col bg-[#6bd4a97e] rounded-2xl p-6 justify-center shadow-md">
            <h1 className="sm:text-3xl md:text-5xl font-bold mb-4 text-gray-800 text-center">Teoría Celular</h1>
            <h2 className="md:text-2xl text-gray-700 text-center">Fundamentos de la Biología Moderna</h2>
        </div>
        
        <div className="flex justify-center shadow-lg rounded-xl overflow-hidden">
            <iframe
                className="h-[300px] w-full md:h-[400px]"
                src="https://www.youtube.com/embed/4inO1AA0yxg?si=RuILh9SJvM402m-6"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    </div>

    
    <div className="bg-white rounded-xl p-6 shadow-sm mt-4">
        <article className="prose max-w-none">
            <h2 className="text-3xl font-bold text-[#f5b507] mb-6 border-b pb-2">¿Qué es la Teoría Celular?</h2>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Actualmente puede parecernos obvio que, al igual que otros seres vivos, estamos hechos de células. Sin embargo, antes del año 1600 esto no era obvio en absoluto, por la sencilla razón de que nadie había visto una célula de cerca. Distinguir células individuales en una porción de tejido o bacterias individuales en una muestra de líquido, requirió el desarrollo de microscopios de alta potencia, instrumentos que se usan para ampliar los objetos que de otra manera son demasiado pequeños para ser vistos. Para saber más acerca de los microscopios y cómo se usan actualmente en biología, lee el artículo sobre microscopía.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                La primera persona que vio las células como estructuras microscópicas fue el científico inglés Robert Hooke. De hecho, fue él quien les dio el nombre. En su libro Micrographia, utilizó el término célula para referirse a las estructuras parecidas a cajas que observó cuando examinaba el tejido muerto de un corcho por medio de un microscopio simple. Usó el término célula porque esas cajas le recordaban las celdas de un monasterio, las habitaciones austeras en las que dormían los monjes. Sin embargo, las células que observó Hooke eran de tejido muerto y eran, en realidad, las paredes celulares que quedan cuando las verdaderas células mueren. La primera persona que observó células vivas y en movimiento fue Anton van Leeuwenhoek, un comerciante y fabricante de lentes holandés. En la década de 1670, inspirado por
                el libro de Hooke, comenzó a construir sus propios microscopios, más potentes. Con ellos pudo observar organismos unicelulares vivos, como las bacterias y los espermatozoides, a los que llamó animálculos.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                A pesar del descubrimiento de la existencia de las células, le tomó bastante tiempo a los científicos darse cuenta de que no eran un caso raro y marginal sino los bloques de construcción fundamentales de todas las plantas, animales y seres vivos. De hecho, no fue sino hasta la década de 1830 que el botánico Matthias Schleiden y el zoólogo Theodor Schwann propusieron una idea revolucionaria: que todas las distintas partes de las plantas y los animales están compuestos de células y que las células pueden ser producidas por otras células.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                El científico alemán Rudolf Virchow ampliará esta teoría al afirmar que todas las células deben provenir de otras células, no solo que pueden ser producidas por ellas en las circunstancias adecuadas. Sin embargo, parece que en realidad le robó la idea al científico polaco Robert Remak.
            </p>

            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
                <p className="text-blue-800">
                    Las ideas de estos primeros pensadores se resumen en la moderna teoría celular, la cual establece que:
                    <ol className="list-decimal pl-5 space-y-3  mb-3">
                        <li>Todos los seres vivos están compuestos de una o más células.</li>
                        <li>La célula es la unidad estructural y funcional básica</li>
                        <li>Todas las células provienen de células preexistentes ("Omnis cellula e cellula")</li>
                    </ol>

                    Todo eso esta muy bien y muy lindo pero puede dejarte pensando: si todas las células provienen de células, ¿de dónde vino la primera célula? Volveremos a ese enigma en artículos posteriores, cuando estudiemos el origen de la vida.
                    La teoría celular no solo describe la estructura de los seres vivos, sino que explica 
                    procesos fundamentales como el crecimiento, reproducción y funcionamiento de los organismos.
                </p>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Origen y Desarrollo Histórico</h3>
            
            < p className="text-lg leading-relaxed text-gray-700 mb-6">
                La teoría celular tiene sus antecedentes en una larga historia de estudios sobre la vida que comenzaron en las civilizaciones antiguas. Sin embargo, recién con la invención del microscopio se pudieron observar las células vegetales en el siglo XVII, como hizo el biólogo italiano Marcello Malpighi (1628-1694).
            </p>
            < p className="text-lg leading-relaxed text-gray-700 mb-6">
                Fue entonces que comenzó el debate respecto a qué eran exactamente esas estructuras. Más tarde, el inglés Robert Hooke (1635-1703) las bautizó como cellulae, del latín “celda”, a partir de sus observaciones de cortes de corcho.
            </p>
            < p className="text-lg leading-relaxed text-gray-700 mb-6">
            Posteriormente, el neerlandés Anton van Leeuwenhoek (1632-1723), considerado padre de la microbiología, comenzó a emplear diversos microscopios de su propia autoría para observar la calidad de las telas que comerciaba. Pero luego se abocó a la observación de otras sustancias.
            </p>
            < p className="text-lg leading-relaxed text-gray-700 mb-6">
            Así, van Leeuwenhoek fue el primero en observar bacterias, protozoarios y los propios espermatozoides. De esta manera dio también los primeros golpes a la teoría imperante respecto a la generación espontánea de la vida.
            </p>
            < p className="text-lg leading-relaxed text-gray-700 mb-6">
            Otros científicos posteriores realizaron aportes significativos al surgimiento de la Teoría celular. Por ejemplo, el francés Xavier Bichat (1771-1802) fue el primero en definir un tejido como un conjunto de células con forma y función semejantes.
            </p>
            < p className="text-lg leading-relaxed text-gray-700 mb-6">
            Por otro lado, los alemanes Theodor Schwann (1810-1882) y Matthias Jackob Schleiden (1804-1881), formularon el primer principio de la teoría celular: todos los seres vivos estamos formados por células y secreciones de éstas. Luego, el alemán Rudolf Virchow (1821-1902), fue el primero en demostrar la bipartición celular, o sea, que las células provienen de otras células.
            </p>
            < p className="text-lg leading-relaxed text-gray-700 mb-6">
             A pesar de estos descubrimientos, la teoría celular fue debatida a lo largo de todo el siglo XIX. Finalmente, al francés Louis Pasteur (1822-1895) comprobó plenamente esta teoría con sus
experimentos para demostrar que la vida no se genera espontáneamente.
            </p>
               <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Principios de la teoría celular</h3>
               <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Los principios que rigen la teoría celular son, a groso modo, los mismos de la biología moderna. Esto implica la distinción entre lo viva y lo inerte: la materia viva es capaz de metabolizar (nutrirse) y auto-perpetuarse (reproducirse), para lo cual debe contar con las estructuras necesarias, presentes en el interior de la célula.
               </p>
               <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Otro principio importante es el de la herencia: la transmisión de la información biológica a los descendientes permite la persistencia de una especie. Este proceso también depende de importantes estructuras celulares, como es el núcleo celular, donde está contenido el ADN de la especie entera.
               </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    Por último, las células se juntan en los organismos multicelulares para formar tejidos, que son estructuras mayores y homogéneas de células del mismo tipo. Al hacerlo obedecen a criterios de diversificación importantes, como son los que separan células nerviosas, musculares, hepáticas, etc.
                </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Postulados Fundamentales</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-5 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg text-green-800 mb-3">Teoría Clásica</h4>
                    <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                        <li>Todos los seres vivientes están compuestos por células. Por lo tanto éstas son la unidad mínima funcional de la vida, en sus distintos niveles de complejidad estructural. Una célula basta para constituir un organismo (unicelular), pero muchas células pueden organizarse en colonias o en un mismo organismo (multicelular) único, diversificando sus funciones y alcanzando un margen de interdependencia muy elevado.</li>
                        <li>Las funciones vitales de los organismos tienen lugar dentro de las células. Mediante procesos bioquímicos, y son controlados por sustancias que las células secretan. Cada célula opera como un sistema abierto único, que intercambia materia y energía con su entorno de manera controlada. Además, en
                    cada célula de un organismo se dan las mismas funciones vitales que en el organismo entero: nacimiento, crecimiento, reproducción, muerte.</li>
                        <li>Todas las células que existen proceden de otras células anteriores. Por división celular o por formación a partir de células madre. Las células más antiguas y primitivas del mundo son las procariotas (sin núcleo celular). Equipo editorial, Etecé. (2025, 26 marzo).</li>
                    </ol>
                </div>
                
                <div className="bg-purple-50 p-5 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg text-purple-800 mb-3">Ampliaciones Modernas</h4>
                    <ul className="list-disc pl-5 space-y-3 text-gray-700">
                        <li>El ADN contiene la información hereditaria</li>
                        <li>Las funciones vitales ocurren dentro o cerca de las células</li>
                        <li>Composición química similar en todas las células</li>
                    </ul>
                </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Pioneros de la Teoría Celular</h3>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-lg mb-2 text-gray-800">Matthias Schleiden (1804-1881)</h4>
                    <p className="text-gray-600">Botánico alemán que en 1838 demostró que todas las plantas están compuestas por células.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-lg mb-2 text-gray-800">Theodor Schwann (1810-1882)</h4>
                    <p className="text-gray-600">Zoólogo que extendió los hallazgos al reino animal en 1839, estableciendo la unidad de la vida.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-lg mb-2 text-gray-800">Rudolf Virchow (1821-1902)</h4>
                    <p className="text-gray-600">Médico que completó la teoría en 1855 con el principio "toda célula proviene de otra célula".</p>
                </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Impacto Científico</h3>
            
            <p className="mb-4">
                La teoría celular ha revolucionado múltiples disciplinas científicas:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-start">
                        <span className="material-icons mr-2 text-green-600">medical_services</span>
                        <span>Medicina (comprensión de enfermedades a nivel celular)</span>
                    </li>
                    <li className="flex items-start">
                        <span className="material-icons mr-2 text-blue-600">science</span>
                        <span>Genética (transmisión de información hereditaria)</span>
                    </li>
                    <li className="flex items-start">
                        <span className="material-icons mr-2 text-purple-600">biotech</span>
                        <span>Biotecnología (producción de medicamentos y vacunas)</span>
                    </li>
                    <li className="flex items-start">
                        <span className="material-icons mr-2 text-teal-600">eco</span>
                        <span>Ecología (interacciones celulares en ecosistemas)</span>
                    </li>
                </ul>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Importancia de la teoría celular en la biología y medicina.</h3>
            <p className="mb-4" >
                La teoría celular es un principio fundamental en biología y medicina que establece que todos los organismos vivos están compuestos por células, y que la célula es la unidad básica de vida. Esta teoría fue formulada en el siglo XIX por los científicos alemanes Matthias Schleiden y Theodor Schwann.
            </p>
            <p className="mb-4">
                El postulado principal de la teoría celular es que todas las funciones vitales se llevan a cabo dentro de las células o en su entorno inmediato, y que el organismo, en su totalidad, es la suma de las actividades y las interacciones de sus células independientes. La célula es, por lo tanto, la unidad estructural y funcional básica de todos los seres vivos.
            </p>
            <p className="mb-4">
                Además, la teoría celular establece que todas las células provienen de otras células preexistentes por división, un proceso conocido como reproducción celular. Esto implica que no hay generación espontánea de células, sino que todas las células se derivan de una línea celular continua desde el inicio de la vida.
            </p>
            <p className="mb-4">
                La teoría celular también sostiene que las células contienen la información genética en forma de ADN, que se pasa de las células madre a las células hijas durante la división celular. Este concepto
es crucial para entender la herencia genética y la variabilidad genética.
            </p>
            <p className="mb-4">
                En medicina, la teoría celular es la base para entender cómo se desarrollan y funcionan los órganos y tejidos del cuerpo humano, así como cómo se originan y progresan las enfermedades. Por ejemplo, el cáncer se entiende como un desorden celular en el que las células se dividen y crecen de forma incontrolada. Del mismo modo, las enfermedades genéticas se deben a mutaciones en el ADN celular que alteran las funciones normales de las células.
            </p>
            <p className="mb-4">
                La teoría celular también es fundamental en la investigación biomédica y en el desarrollo de terapias. Por ejemplo, las terapias basadas en células madre, que se están explorando para el tratamiento de una variedad de enfermedades, se basan en la capacidad de las células madre para dividirse y diferenciarse en diferentes tipos de células.
            </p>
            
            
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mt-6">
                <h4 className="font-bold text-lg text-yellow-800 mb-2">Conclusión</h4>
                <p className="text-yellow-900">
                    La teoría celular sigue siendo la base del estudio de la vida. Cada avance en biología celular 
                    confirma que la célula es la unidad esencial de toda forma de vida conocida.
                </p>
            </div>
            
            <div className="mt-8 rounded-xl overflow-hidden shadow-md">
                <img
                    src={teoria}
                    alt="Fundadores de la teoría celular: Schleiden, Schwann y Virchow"
                    className="w-full h-auto"
                    loading="lazy"
                />
                <p className="text-sm text-gray-500 bg-gray-100 p-2">Representación histórica de los principales contribuyentes a la teoría celular</p>
            </div>
        </article>
    </div>

    
</section>
    );
}