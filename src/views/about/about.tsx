import TitleCard from "../../components/sidebar/title";
import Slider from "../../components/slider";
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import img4 from "../../assets/img/img4.jpg";
import img5 from "../../assets/img/img5.jpg";
import img6 from "../../assets/img/img6.jpg";
import img7 from "../../assets/img/img7.jpg";
import img8 from "../../assets/img/img8.jpg";


export default function About() {
    const tecnologias = [
        { name: "HTML", desc: "Estructura semántica" },
        { name: "CSS", desc: "Diseño visual y responsivo" },
        { name: "JavaScript / TypeScript", desc: "Interactividad y lógica" },
        { name: "Wordwall", desc: "Actividades y juegos interactivos" },
        { name: "Sketchfab", desc: "Modelos 3D integrados" },
        { name: "IA (imágenes)", desc: "Contenido visual original" },
    ];
    const imagenes = [img1, img2, img3, img4, img5, img6, img7, img8];

    const retos = [
        "Cambio de nombre del proyecto (antes 'BioExplora')",
        "Dificultades en estructura, colores y público objetivo",
        "Íconos no alineados con el enfoque educativo",
        "Juegos y preguntas mal ubicadas o no funcionales",
        "Chatbot inicial mal configurado",
        "Falta de integración de imágenes 3D",
        "Cambio de repositorio que generó retrasos",
    ];


    const mejoras = [
        "Reorganización de estructura y navegación",
        "Chatbot reconfigurado e implementado",
        "Preguntas interactivas reubicadas",
        "Juegos funcionales",
        "Rediseño de colometría (paleta armoniosa)",
        "Integración de modelos 3D via Sketchfab",
    ];
    return (
        <div className="flex flex-col gap-6 p-4">
            <TitleCard title="Sobre Nosotras" color="#F5E2C4" />
            <div className="text-lg leading-relaxed mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-8">
                <header className="text-center">

                    <p className="text-gray-700 text-justify text-lg leading-relaxed">
                        Somos un equipo de estudiantes comprometidas con la innovación educativa y el uso de tecnologías para facilitar el aprendizaje.
                        Nos enfocamos en la teoría celular, desarrollando un aplicativo web interactivo y visualmente atractivo para hacer más accesible y didáctico
                        este tema fundamental de la biología.
                    </p>
                </header>

            <Slider
                auto={true}
                bgColorClass="bg-neutral-900"
                fit="cover"
                height="h-56 sm:h-64 md:h-90"
                images={imagenes}
                interval={4000}
              />

                <section className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mb-6">
                    <h2 className="text-2xl font-semibold text-green-600 mb-4">Tecnologías Utilizadas</h2>
                    <p className="text-gray-700 text-justify mb-2">
                        Para la creación de nuestro aplicativo utilizamos diversas tecnologías:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>HTML</strong> para la estructura del sitio.</li>
                        <li><strong>CSS</strong> para el diseño visual.</li>
                        <li><strong>JavaScript y TypeScript</strong> para la interactividad y el dinamismo.</li>
                    </ul>


                    <p className="text-gray-700 text-justify mt-4 mb-2">
                        Además, integramos herramientas complementarias como:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Wordwall</strong>, para actividades y juegos interactivos.</li>
                        <li><strong>Sketchfab</strong>, lo que permitió incorporar simulaciones 3D realistas de estructuras celulares.</li>
                        <li><strong>Imágenes generadas con inteligencia artificial</strong>, que aportaron un contenido visual original y creativo.</li>
                    </ul>
                </section>


                <section className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
                    <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Retos y Obstáculos</h2>
                    <p className="text-gray-700 text-justify mb-4">
                        Como todo proceso de desarrollo, enfrentamos varios desafíos que inicialmente afectaron el avance del proyecto:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>El primer nombre del proyecto fue "BioExplora", pero luego decidimos cambiarlo para reflejar mejor la esencia del trabajo.</li>
                        <li>Tuvimos dificultades con la estructura de la página, la elección de colores y la definición del público objetivo.</li>
                        <li>Los primeros íconos usados no estaban alineados con el enfoque educativo de la plataforma.</li>
                        <li>Los juegos no funcionaban correctamente y las preguntas estaban mal ubicadas, afectando la experiencia del usuario.</li>
                        <li>El chatbot, aunque ya estaba presente, no estaba bien configurado.</li>
                        <li>No habíamos integrado aún las imágenes 3D, lo que limitaba el aspecto visual y didáctico.</li>
                        <li>Además, nos vimos obligadas a cambiar de repositorio, lo cual generó algunos retrasos.</li>
                    </ul>
                </section>


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

        </div>
    )
}