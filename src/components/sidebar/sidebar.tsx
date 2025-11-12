import { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/img/logo.png';
import fondo2 from '../../assets/img/fondo2.jpg';
import logoColsam from '../../assets/LOGOCOLSAM.png';
export default function Sidebar()  {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [IsShowAbout, setIsShowAbout] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Ejecutar al montar para establecer el estado inicial
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const showAbout = () => {
    setIsShowAbout(!IsShowAbout);
  }
  const menuItems = [
    { path: '/teoria', text: 'Teoría Celular' },
    { path: '/tipos de celula', text: 'Tipos de Célula' },
    { path: '/partes de la celula', text: 'Partes de la Célula' },
    { path: '/organelos', text: 'Organelos' },
    { path: '/funciones', text: 'Funciones Celulares' },
    { path: '/reproduccion', text: 'Reproducción Celular' },
    { path: '/transporte', text: 'Transporte Celular' },
    { path: '/comparacion', text: 'Comparación Celular' },
    

  ];

  return (
    <>
      {/* Botón de hamburguesa para móvil */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-[200] p-2 rounded-md bg-[#116e32] text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative h-full flex flex-col px-3 md:px-2  overflow-y-auto p-6 py-4   z-[150] font-semibold transition-all duration-300 ${
          isOpen ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0 md:w-[24rem]'
        }`}
        style={{
          height: isMobile ? '100vh' : 'auto',
          backgroundImage: `url(${fondo2})`,
           backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
        role="navigation"
        aria-label="Menú de navegación"
      >
        <div className='flex flex-col'>
        <div className='flex justify-center m-0'>
          <img src={logo} className='h-34'></img>
        </div>
        <div className='flex  items-center justify-center rounded-md p-4 md:h-40 text-cyan-50 font-bold text-4xl '>
            Bioexma
        </div>
        </div>
        <nav className="px-2 rounded-t-4xl">
          <ul className="list-none rounded-t-3xl rounded-2xl   m-0 bg-[#1050426b] p-2  ">
            {menuItems.map((item) => (
              <li key={item.path} className="mt-2 first:mt-0">
                <NavLink

                  to={item.path}
                  onClick={()=>{ handleNavClick;
                    window.scrollTo({ top: 0, behavior: "smooth" });
                   }}
                  className={({ isActive }) =>
                    `flex items-center py-3 px-4 rounded-lg transition-all duration-300 text-[#F2F2F2] text-base  hover:bg-white/20 hover:-translate-x-1 hover:shadow-md ${
                      isActive ? ' bg-white/10 font-bold' : ''
                    }`
                  }
                >
                  {item.text}
                </NavLink>
               
              </li>
            ))}
            <li className="mt-2 first:mt-0">
              <div onClick={() => showAbout()} className='flex items-center py-3 px-4 rounded-lg transition-all duration-300 text-[#F2F2F2] text-base  hover:bg-white/20 hover:-translate-x-1 hover:shadow-md '> 
                <button >Sobre Nosotros</button>
              </div>
            </li>
          </ul>
    <div className='flex justify-center m-4'>
          <img src={logoColsam} className='h-20'></img>
    </div>
        </nav>
      </aside>
  
  {
    IsShowAbout && (
    <nav className="  bg-[#29967A] shadow-md p-4 flex justify-between items-center">
      
          <ul className="list-none rounded-t-3xl rounded-2xl  space-x-6 text-white font-semibold">
              <li><a href="/tecnologi" className="flex items-center py-3 px-4 rounded-lg transition-all duration-300 text-[#F2F2F2] text-base  hover:bg-white/20 hover:-translate-x-1 hover:shadow-md">Tecnologías Utilizadas</a></li>
              <li><a href="/about" className="flex items-center py-3 px-4 rounded-lg transition-all duration-300 text-[#F2F2F2] text-base  hover:bg-white/20 hover:-translate-x-1 hover:shadow-md">Sobre Nosotras</a></li>
              <li><a href="/obsta" className="flex items-center py-3 px-4 rounded-lg transition-all duration-300 text-[#F2F2F2] text-base  hover:bg-white/20 hover:-translate-x-1 hover:shadow-md">Retos y Obstáculos</a></li>
              <li><a href="/mejoras" className="flex items-center py-3 px-4 rounded-lg transition-all duration-300 text-[#F2F2F2] text-base  hover:bg-white/20 hover:-translate-x-1 hover:shadow-md">Evolución y Mejoras</a></li>
          </ul>
      </nav>

      )
    }

      {/* Overlay para móvil */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-[100] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};




