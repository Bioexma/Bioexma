import CardModel from "../../components/card"
import TitleCard from "../../components/sidebar/title"

export default function PartesDeCelula(){
    return(
    <section className="flex flex-col gap-6 p-4">
      <TitleCard title="Partes de la Célula" color="#B8DEE6" sub="" ></TitleCard>
      <div  className="bg-white rounded-xl p-6  mt-4">
         <p className='text-2xl font-semibold text-gray-800 mt-8 mb-4  pb-2' >Las células tienen varias estructuras principales que desempeñan funciones específicas:</p>
     
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 justify-center">
        <CardModel title="Membrana plasmática:" sub="Capa que protege la célula y regula el intercambio de sustancias." color_card="#EDF8F2"  link="https://sketchfab.com/models/d052f6892768415a8457e77f559f16ab/embed"></CardModel>
        <CardModel title="Citoplasma:" sub="Material gelatinoso donde ocurren las reacciones celulares." color_card="#EDF8F2" link="https://sketchfab.com/models/ed1f469973564889b1d9cce56e68d27b/embed" ></CardModel>
        <CardModel title="Núcleo" sub=" Contiene el material genético y controla las actividades celulares (solo en células eucariotas)" color_card="#EDF8F2" link="https://sketchfab.com/models/f352d13aafad414c96ea5deec2127345/embed?ui_infos=0" ></CardModel>
        <CardModel title="Pared celular:" sub="Presente en células vegetales y procariotas, proporciona soporte y protección." color_card="#EDF8F2" link="https://sketchfab.com/models/c80677e0d32a4e7eb19268ca3eb6d538/embed?ui_infos=0" ></CardModel>
      
      </div>
      </div>
    
      
    </section>
  );

    
}