import Navi from "../../components/navigation/navi";

export default function Obsta() {
    return (
        <>  
        <div className="flex flex-col gap-6 p-4">

            <Navi url1="/about" url2="/mejoras"/>
                <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">

                    <h2 className="text-2xl font-semibold text-indigo-600 mb-6">Retos y Obstáculos</h2>
                    <p className="text-gray-700 text-justify mb-6">
                        Como todo proceso de desarrollo, enfrentamos varios desafíos que inicialmente afectaron el avance del proyecto. A continuación, presentamos nuestra línea del tiempo de retos:
                    </p>

                    <div className="relative border-l-2 border-blue-400 ml-4">

                        <div className="mb-6 ml-6">
                            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 mt-2"></div>
                            <h3 className="text-lg font-semibold text-indigo-600">Cambio de nombre</h3>
                            <p className="text-gray-700">
                                El primer nombre del proyecto fue <strong>"BioExplora"</strong>, pero luego decidimos cambiarlo para reflejar mejor la esencia del trabajo.
                            </p>
                        </div>


                        <div className="mb-6 ml-6">
                            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 mt-2"></div>
                            <h3 className="text-lg font-semibold text-indigo-600">Diseño y estructura</h3>
                            <p className="text-gray-700">
                                Tuvimos dificultades con la estructura de la página, la elección de colores y la definición del público objetivo.
                            </p>
                        </div>

                        <div className="mb-6 ml-6">
                            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 mt-2"></div>
                            <h3 className="text-lg font-semibold text-indigo-600">Iconografía</h3>
                            <p className="text-gray-700">
                                Los primeros íconos usados no estaban alineados con el enfoque educativo de la plataforma.
                            </p>
                        </div>


                        <div className="mb-6 ml-6">
                            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 mt-2"></div>
                            <h3 className="text-lg font-semibold text-indigo-600">Problemas con los juegos</h3>
                            <p className="text-gray-700">
                                Los juegos no funcionaban correctamente y las preguntas estaban mal ubicadas, afectando la experiencia del usuario.
                            </p>
                        </div>

                        <div className="mb-6 ml-6">
                            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 mt-2"></div>
                            <h3 className="text-lg font-semibold text-indigo-600">Chatbot mal configurado</h3>
                            <p className="text-gray-700">
                                El chatbot, aunque ya estaba presente, no estaba bien configurado.
                            </p>
                        </div>


                        <div className="mb-6 ml-6">
                            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 mt-2"></div>
                            <h3 className="text-lg font-semibold text-indigo-600">Integración de imágenes 3D</h3>
                            <p className="text-gray-700">
                                No habíamos integrado aún las imágenes 3D, lo que limitaba el aspecto visual y didáctico.
                            </p>
                        </div>

                        <div className="ml-6">
                            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 mt-2"></div>
                            <h3 className="text-lg font-semibold text-indigo-600">Cambio de repositorio</h3>
                            <p className="text-gray-700">
                                Nos vimos obligadas a cambiar de repositorio, lo cual generó algunos retrasos en el desarrollo.
                            </p>
                        </div>
                    </div>
                </section>
        </div>
        </>
    )
}