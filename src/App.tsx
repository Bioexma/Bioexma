import './App.css'
import { BrowserRouter, Route,  Routes } from 'react-router'
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

function App() {


  return (
    <>
    <BrowserRouter>
    <div className='flex h-screen '>
    <ScrollToTop/>
    <Sidebar></Sidebar>
    
      <section className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#c9f1e25b]  ">
        <div className=' bg-[#ffffff] p-4 rounded-2xl '>
        <Routes>
          <Route path='/' element={<TeoriaCelular/>}></Route>
          <Route path='/teoria' element={<TeoriaCelular/>}></Route>
          <Route path='/tipos de celula' element={<TiposDeCelula/>}></Route>
          <Route path='/partes de la celula' element={<PartesDeCelula/>}></Route>
          <Route path='/organelos' element={<OrganelosCelulares/>}></Route>
          <Route path='/funciones' element={<FuncionCelu/>}></Route>
          <Route path='/reproduccion' element={<ReproduccionCelular/>}></Route>
          <Route path='/transporte' element={<TrasnporteCelular/>}></Route>
          <Route path='/comparacion' element={<ComparacionCelular/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
        </div>
      </section>
    </div>
    <Chatbot></Chatbot>
    </BrowserRouter>
    </>
  )
}

export default App
