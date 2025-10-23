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
import ReactIcon from "../../assets/icon/react-icon.svg";
import TsIcon from "../../assets/icon/typescript-icon.svg";
import HtmlIcon from "../../assets/icon/html-icon.svg";
import CssIcon from "../../assets/icon/css-icon.svg";
import wordwallIcon from "../../assets/icon/Wordwall.png";
import sketchfabIcon from "../../assets/icon/sketchfab-logo.png";
import Navi from "../../components/navigation/navi";


export default function About() {
    const tecnologias = [
        { name: "HTML", desc: "Estructura semántica", img: HtmlIcon },
        { name: "CSS", desc: "Diseño visual y responsivo", img: CssIcon },
        { name: "TypeScript", desc: "Interactividad y lógica", img: TsIcon },
        { name: "Wordwall", desc: "Actividades y juegos interactivos",img: wordwallIcon },
        { name: "Sketchfab", desc: "Modelos 3D integrados", img: sketchfabIcon },
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
            <Navi url1="/tecnologi" url2="/obsta"/>
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

            </div>

        </div>
    )
}