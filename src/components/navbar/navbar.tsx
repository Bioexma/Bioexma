export default function Navbar() {
    return (
    <>
    <nav className="  bg-green-700 shadow-md p-4 flex justify-between items-center">
      
        <ul className="flex space-x-6 text-white font-semibold">
            <li><a href="/" className="text-gray-700 hover:text-blue-600">Inicio</a></li>
            <li><a href="/about" className="text-gray-700 hover:text-blue-600">Acerca de</a></li>
            <li><a href="/contact" className="text-gray-700 hover:text-blue-600">Contacto</a></li>
        </ul>
    </nav>
    </>
    )

}