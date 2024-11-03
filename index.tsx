import { useState } from 'react'
import { ChevronDown, MapPin, Phone, Mail } from 'lucide-react'
import ChatbotComponent from './ChatbotComponent.tsx';

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (npx create-react-app suteki-sushi

    <div className="min-h-screen bg-[#FFF5E6] text-gray-800 font-sans">
      <header className="bg-red-700 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Suteki Sushi</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#inicio" className="hover:text-red-200">Inicio</a>
            <a href="#menu" className="hover:text-red-200">Menú</a>
            <a href="#pedido" className="hover:text-red-200">Cómo Pedir</a>
            <a href="#contacto" className="hover:text-red-200">Contacto</a>
          </nav>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <ChevronDown className={`transform transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </header>
      
      {isMenuOpen && (
        <div className="md:hidden bg-red-700 text-white">
          <nav className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <a href="#inicio" className="hover:text-red-200">Inicio</a>
            <a href="#menu" className="hover:text-red-200">Menú</a>
            <a href="#pedido" className="hover:text-red-200">Cómo Pedir</a>
            <a href="#contacto" className="hover:text-red-200">Contacto</a>
          </nav>
        </div>
      )}

      <main>
        <section id="inicio" className="py-20 bg-[#FFF5E6]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Bienvenidos a Suteki Sushi</h2>
            <p className="text-xl mb-8">Sabor oriental, pasión argentina: ¡El sushi que conquistará tu paladar!</p>
            <a href="#menu" className="bg-red-700 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors">
              Ver Menú
            </a>
          </div>
        </section>

        <section id="menu" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestro Menú Destacado</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Sushi Clásico', 'Rolls Especiales', 'Combos Familiares'].map((item, index) => (
                <div key={index} className="bg-[#FFF5E6] p-6 rounded-lg shadow-md">
                  <img src={`/placeholder.svg?height=200&width=300`} alt={item} className="w-full h-40 object-cover rounded-md mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pedido" className="py-20 bg-[#FFF5E6]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Cómo Hacer Tu Pedido</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
              {['Elige tu menú', 'Llámanos o pide online', 'Espera tu entrega'].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>
            <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <MapPin className="mr-2 text-red-700" />
                    <span>Av. Corrientes 1234, CABA, Argentina</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="mr-2 text-red-700" />
                    <span>+54 11 1234-5678</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="mr-2 text-red-700" />
                    <span>info@sutekisushi.com</span>
                  </li>
                </ul>
              </div>
              <form className="flex-1 w-full max-w-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre</label>
                  <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensaje</label>
                  <textarea id="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"></textarea>
                </div>
                <button type="submit" className="bg-red-700 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-red-700 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Suteki Sushi. Todos los derechos reservados.</p>
        </div>
      </footer>

      <ChatbotComponent />
    </div>
  )
}




