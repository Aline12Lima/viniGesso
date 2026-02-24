import { useState } from "react";
import { MapPin, Phone, MessageCircle, Mail, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full font-sans bg-white">
      {/* --- Main Navigation Bar --- */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="GessoVini Logo"
            className="h-16 md:h-20 w-auto object-contain"
          />
          <div className="ml-3 text-2xl md:text-3xl font-bold flex items-center">
            <span className="text-gray-800">Vini</span>
            <span className="text-orange-600">Gesso</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-gray-600 font-medium uppercase text-sm tracking-wider">
            <li className="hover:text-orange-600 cursor-pointer border-b-2 border-transparent hover:border-orange-600 transition-all">
              Início
            </li>
            <li className="hover:text-orange-600 cursor-pointer">Serviços</li>
            <li className="hover:text-orange-600 cursor-pointer">Obras</li>
            <li className="hover:text-orange-600 cursor-pointer">Cotação</li>
            <li className="hover:text-orange-600 cursor-pointer">Contato</li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 p-4">
          <ul className="flex flex-col gap-4 text-gray-600 font-medium uppercase text-sm text-center">
            <li className="py-2 border-b border-gray-50">Início</li>
            <li className="py-2 border-b border-gray-50">Serviços</li>
            <li className="py-2 border-b border-gray-50">Obras</li>
            <li className="py-2 border-b border-gray-50">Cotação</li>
            <li className="py-2">Contato</li>
          </ul>
        </nav>
      )}

      {/* --- Contact Info Bar --- */}
      <div className="relative w-full px-4">
        <div className="max-w-6xl mx-auto bg-orange-600 text-white rounded-2xl md:rounded-full px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 shadow-xl -mb-12 relative z-20">
          {/* Localização com Link */}
          <a
            href="https://www.google.com/maps/place/Vin%C3%ADcius+gesso/@-22.7775333,-46.2187636,17z/data=!3m1!4b1!4m6!3m5!1s0x94ceab1828fe5655:0xed7a185143302ba0!8m2!3d-22.7775383!4d-46.2161887!16s%2Fg%2F11p5x56vbr?entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 w-full md:w-auto md:border-r border-orange-400 md:pr-4 hover:opacity-80 transition-opacity"
          >
            <MapPin className="text-white w-5 h-5 shrink-0" />
            <div className="text-[10px] md:text-xs">
              <p className="font-bold uppercase leading-none">Mapa de</p>
              <p className="uppercase">Localização</p>
            </div>
          </a>

          <div className="flex items-center gap-3 w-full md:w-auto md:border-r border-orange-400 md:pr-4">
            <Phone className="text-white w-5 h-5 shrink-0" />
            <div className="text-[10px] md:text-xs">
              <p className="font-bold uppercase leading-none">Telefone</p>
              <p className="opacity-90">(11) 99705-8758</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto md:border-r border-orange-400 md:pr-4">
            <MessageCircle className="text-white w-5 h-5 shrink-0" />
            <div className="text-[10px] md:text-xs">
              <p className="font-bold uppercase leading-none">Celular</p>
              <p className="opacity-90">(11) 9.9862-3585</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <Mail className="text-white w-5 h-5 shrink-0" />
            <div className="text-[10px] md:text-xs">
              <p className="font-bold uppercase tracking-tighter text-sm">
                E-mail
              </p>
              <p className="lowercase opacity-80 truncate">
                contato@gessovini.com.br
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
