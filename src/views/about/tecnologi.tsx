import ReactIcon from "../../assets/icon/react-icon.svg";
import TsIcon from "../../assets/icon/typescript-icon.svg";
import HtmlIcon from "../../assets/icon/html-icon.svg";
import CssIcon from "../../assets/icon/css-icon.svg";
import wordwallIcon from "../../assets/icon/Wordwall.png";
import sketchfabIcon from "../../assets/icon/sketchfab-logo.png";

export default function Tecnologias(){
        const tecnologias = [
        { name: "HTML", desc: "Estructura semántica", img: HtmlIcon },
        { name: "CSS", desc: "Diseño visual y responsivo", img: CssIcon },
        { name: "TypeScript", desc: "Interactividad y lógica", img: TsIcon },
        { name: "Wordwall", desc: "Actividades y juegos interactivos",img: wordwallIcon },
        { name: "Sketchfab", desc: "Modelos 3D integrados", img: sketchfabIcon },
        { name: "IA (imágenes)", desc: "Contenido visual original" },
    ];
    return(
        <>
          <div className="flex flex-col gap-6 p-4">
            <div className="flex flex-row justify-between"><a className="bg-cyan-700 shadow-lg  w-25 text-center text-white" href="/mejoras" >antes</a> <a href="/about" className="bg-cyan-700 text-white shadow-lg w-25 text-center ">siguiente</a> </div>
                            <section className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-600 mb-4">Tecnologías Utilizadas</h2>
                    <p className="text-gray-700 text-justify mb-2">
                        Para la creación de nuestro aplicativo utilizamos diversas tecnologías:
                    </p>
                    <div className="flex flex-col md:flex-row  gap-4 justify-between mb-4">
                      {tecnologias.map((tetch, index)=>{
                        return (
                            <div className="w-42 flex flex-col items-center justify-center p-4 bg-white rounded-4xl shadow-md" key={index}>
                                <img src={tetch.img} alt="" className="w-20" />
                                <h3 className="mt-2 text-lg font-medium text-gray-800">{tetch.name}</h3>
                                <p className="text-gray-600 text-center">{tetch.desc}</p>
                            </div>

                        )
                      })

                      }  
    
                    </div>

                 

                </section>
          </div>
        
        </>
    )
}