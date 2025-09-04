import TitleCard from "../../components/sidebar/title";

interface MecanismoTransporte {
  nombre: string;
  descripcion: string;
}
export default function TrasnporteCelular(){
  const mecanismos: MecanismoTransporte[] = [
    {
      nombre: "Transporte pasivo",
      descripcion: "Movimiento sin gasto de energía, como difusión y ósmosis."
    },
    {
      nombre: "Transporte activo",
      descripcion: "Movimiento que requiere energía para transportar moléculas contra su gradiente."
    },
    {
      nombre: "Endocitosis y exocitosis",
      descripcion: "Procesos para incorporar o expulsar partículas grandes."
    }
  ];

  return (
    <section className="flex flex-col gap-6 p-4">
      <TitleCard title="Transporte Celular" video="https://www.youtube.com/embed/hhRXOMWpiyU?si=8bAyOUG-QgCeo6R9"  color="#E9F0D1"/>
      
      
    <div  className="bg-white rounded-xl p-6 mt-4">

      <p className="text-2xl font-semibold  mb-6 pb-2 ">Las células intercambian sustancias mediante varios mecanismos:</p>

      <div className="text-lg leading-relaxed text-gray-700 mb-6 bg-gray-50">
        {mecanismos.map((mecanismo, index) => (
          <li key={index} className="mecanismo-item">
            <strong>{mecanismo.nombre}:</strong> {mecanismo.descripcion}
          </li>
        ))}

      </div>
      <ul className="mecanismos-list">
      </ul>
    </div>
    </section>
  );
}