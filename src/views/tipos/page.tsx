export default function TiposDeCelula() {
  return (
    <section className="flex flex-col gap-6 p-4">
      <div className="grid grid-cols-1 gap-4">
        <div className="font-semibold flex flex-col bg-[#6bc4b077] rounded-2xl p-6 justify-center shadow-md h-64">
          <h1 className="sm:text-3xl md:text-5xl font-bold mb-4 text-gray-800 text-center">Tipos de Células</h1>
          <p className="sm:text-3xl md:text-2xl text-gray-700"></p>

        </div>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm mt-4">
         <p className='text-2xl font-semibold text-gray-800 mt-8 mb-4  pb-2' >Existen dos tipos principales de células:</p>


        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          <div className="bg-yellow-50 p-5 rounded-lg shadow-sm flex flex-col transition-all duration-300 hover:scale-[1.02]">
            <div className="font-bold text-yellow-600">Células procariotas:</div>
            <div className="text-gray-600">Son células simples, sin núcleo definido, y su material genético está
              disperso en el citoplasma. Ejemplos: bacterias y arqueas.</div>
            <strong></strong>
            <div className="flex flex-col justify-center shadow-lg rounded-xl overflow-hidden h-[500px] mt-2">
              <iframe
                className="h-full"
                title="EVE3D - Célula Procariota"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share

                src="https://sketchfab.com/models/5a7917054d26462ba1b49a4ce2d3b7ae/embed"
              ></iframe>
            </div>

          </div>
          <div className="bg-yellow-50 p-5 rounded-lg shadow-sm transition-all duration-300 hover:scale-[1.02] ">
            <div className="font-bold text-yellow-600">Células eucariotas:</div>
            <div className="text-gray-500">Son más complejas y tienen un núcleo definido que contiene el ADN.
              Se encuentran en plantas, animales, hongos y protistas.</div>
            <strong></strong>
            <div className="flex flex-col justify-center shadow-lg rounded-xl overflow-hidden h-[500px] mt-2">
              <iframe
                className="h-full"
                title="EVE3D Célula Eucariota Animal"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share

                src="https://sketchfab.com/models/fb3311da5c9a4572bda870f6d356d83a/embed"
              ></iframe>
            </div>
          </div>

        </div>
      </div>


    </section>
  );
}