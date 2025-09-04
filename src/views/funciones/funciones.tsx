import TitleCard from "../../components/sidebar/title";

export default function FuncionCelu() {
  const funciones = [
    "Transformación de energía y materiales para mantener la vida.",
    "Formación de nuevas células.",
    "Adaptación a cambios en el ambiente.",
    "Movimiento de sustancias dentro y fuera de la célula.",
    "Especialización para realizar funciones específicas."
  ];

  const titulosFunciones = [
    "Metabolismo",
    "Reproducción",
    "Respuesta a estímulos",
    "Transporte",
    "Diferenciación"
  ];

  return (
    <section className="flex flex-col gap-6 p-4">
      <TitleCard color="#F2C4E0" title="Funciones Celulares" sub="" video="https://www.youtube.com/embed/_ejQaAsna3k?si=36zJypuieL7X8Iw_" />
      <div className="bg-white rounded-xl p-6  mt-4">

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4 border-b pb-2">Las células realizan múltiples funciones esenciales para la vida, tales como:</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">

        </div>
        <div className="bg-gray-50 p-4 rounded-lg mb-6" >
          <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 justify-center">
            {funciones.map((funcion, index) => (
              <li className="flex items-start">
                <span className="material-icons mr-2 text-green-600">{titulosFunciones[index]}</span>
                <span>{funcion}</span>
              </li>

            ))}
          </ul>
        </div>
      </div>





      {/* Lista de funciones */}
      <ul className="funciones-list">
      </ul>
    </section>
  );
}