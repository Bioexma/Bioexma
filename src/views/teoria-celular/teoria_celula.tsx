
import Chatbot from "../../components/chatbot";

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
                La teoría celular constituye uno de los pilares fundamentales de la biología contemporánea. 
                Establece que <strong>la célula es la unidad básica</strong> de estructura, función y organización 
                en todos los seres vivos. Este principio nos permite comprender que todos los organismos, 
                desde las bacterias más simples hasta los humanos, comparten esta característica esencial.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
                <p className="text-blue-800">
                    La teoría celular no solo describe la estructura de los seres vivos, sino que explica 
                    procesos fundamentales como el crecimiento, reproducción y funcionamiento de los organismos.
                </p>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Origen y Desarrollo Histórico</h3>
            
            <p className="mb-6">
                El desarrollo de esta teoría fue posible gracias a la invención del microscopio óptico 
                en el siglo XVII. Robert Hooke (1665) acuñó el término "célula" al observar corcho, 
                aunque solo vio paredes celulares de células muertas. Durante el siglo XIX, científicos 
                como Schleiden, Schwann y Virchow sentaron las bases de la teoría celular clásica.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Postulados Fundamentales</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-5 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg text-green-800 mb-3">Teoría Clásica</h4>
                    <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                        <li>Todos los seres vivos están compuestos por una o más células</li>
                        <li>La célula es la unidad estructural y funcional básica</li>
                        <li>Todas las células provienen de células preexistentes ("Omnis cellula e cellula")</li>
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
            
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mt-6">
                <h4 className="font-bold text-lg text-yellow-800 mb-2">Conclusión</h4>
                <p className="text-yellow-900">
                    La teoría celular sigue siendo la base del estudio de la vida. Cada avance en biología celular 
                    confirma que la célula es la unidad esencial de toda forma de vida conocida.
                </p>
            </div>
            
            <div className="mt-8 rounded-xl overflow-hidden shadow-md">
                <img
                    src="https://es-static.z-dn.net/files/df3/f1ffe9fb81e213ad47e8e3b016737839.jpg"
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