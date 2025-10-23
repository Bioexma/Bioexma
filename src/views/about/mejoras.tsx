import Navi from "../../components/navigation/navi";

export default function Mejoras(){
    return(
        <>
        <div className="flex flex-col gap-6 p-4">
        <Navi url1="/obsta" url2="/tecnologi"/>
        <section className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500 mb-6">
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">Evolución y Mejoras</h2>
            <p className="text-gray-700 text-justify mb-4">
                Gracias al trabajo en equipo y a la retroalimentación continua, logramos superar estas dificultades y mejorar significativamente nuestro proyecto:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Reorganizamos la estructura y navegación del sitio.</li>
                <li>El chatbot fue reconfigurado e implementado correctamente, y seguimos optimizándolo.</li>
                <li>Las preguntas interactivas fueron mejor ubicadas para mayor claridad.</li>
                <li>Los juegos ahora funcionan sin problemas.</li>
                <li>Rediseñamos la colometría del sitio, logrando una distribución de colores más armoniosa y coherente.</li>
                <li>Integramos correctamente las imágenes 3D a través de Sketchfab.</li>
            </ul>
        </section>
        </div>
        </>
    )
}