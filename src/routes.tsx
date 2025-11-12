
import { BrowserRouter, Route, Routes } from 'react-router'
import Sidebar from './components/sidebar/sidebar'
import TeoriaCelular from './views/teoria-celular/teoria_celula'
import TiposDeCelula from './views/tipos/page'
import PartesDeCelula from './views/partes de celula/partes_celula'
import OrganelosCelulares from './views/organelos/organelos'
import FuncionCelu from './views/funciones/funciones'
import ReproduccionCelular from './views/reproduccion/reproduccion'
import TrasnporteCelular from './views/transporte/trasnporte'
import ComparacionCelular from './views/comparacion/comparacion'
import ScrollToTop from './components/scrolltop'
import Chatbot from './components/chatbot'
import About from './views/about/about'
import Navbar from './components/navbar/navbar'
import Obsta from './views/about/obsta'
import Mejoras from './views/about/mejoras'
import Tecnologias from './views/about/tecnologi'
export default function Rutas() {

    return (
        <>
    <div className='flex h-screen'>
      <ScrollToTop />
      <Sidebar />

      <section className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#c9f1e25b]">
        <div className='bg-[#ffffff] p-4 rounded-2xl'>
          <Routes>
            <Route path='/teoria' element={<TeoriaCelular />} />
            <Route path='/tipos de celula' element={<TiposDeCelula />} />
            <Route path='/partes de la celula' element={<PartesDeCelula />} />
            <Route path='/organelos' element={<OrganelosCelulares />} />
            <Route path='/funciones' element={<FuncionCelu />} />
            <Route path='/reproduccion' element={<ReproduccionCelular />} />
            <Route path='/transporte' element={<TrasnporteCelular />} />
            <Route path='/comparacion' element={<ComparacionCelular />} />
            <Route path='/about' element={<About />} />
            <Route path='/obsta' element={<Obsta />} />
            <Route path='/mejoras' element={<Mejoras />} />
            <Route path='/tecnologi' element={<Tecnologias />} />
          </Routes>
        </div>
      </section>
      <Chatbot />
    </div>
        </>

    )

}