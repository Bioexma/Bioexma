import { useState } from "react";
interface SlideItem {
  titulo: string;
  texto: string;
}

interface SliderProps {
  items?: SlideItem[];
  titulo?: string;
}

export default function SliderText({ items = [], titulo = "Slider educativo" }: SliderProps) {
      const [currentIndex, setCurrentIndex] = useState(0);
      const prevSlide = () => {
        setCurrentIndex((prev) =>
          prev === 0 ? items.length - 1 : prev - 1
        );
      };
    
      const nextSlide = () => {
        setCurrentIndex((prev) =>
          prev === items.length - 1 ? 0 : prev + 1
        );
      };
    return (
        <>
              <div className='bg-purple-50 p-4 rounded-lg mb-6 text-center'>

        <h3 className="text-2xl font-semibold text-purple-900 mt-8 mb-4">{titulo}</h3>
        <div className="relative w-full max-w-3xl mx-auto">
          {/* Contenedor del slide */}
          <div className="overflow-hidden rounded-2xl  shadow-md">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {items.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 p-6 bg-white">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">
                    {item.titulo}
                  </h4>
                  <p className="text-gray-600">{item.texto}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación */}
          <button
            onClick={prevSlide}
            className="absolute md:-left-20 sm:left-2 top-1/2 -translate-y-1/2 bg-white  rounded-full p-2 shadow hover:bg-gray-100"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute md:-right-20 sm:right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
          >
            ▶
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-4 space-x-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

        </>
    );

}