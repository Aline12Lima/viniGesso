import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-16 pb-8 border-t-4 border-orange-600">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Coluna 1: Branding */}
        <div className="space-y-6">
          <img
            src={logo}
            alt="GessoVini"
            className="h-48 w-auto brightness-0 invert"
          />
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div className="md:pl-10">
          <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">
            Navegação
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Início
              </a>
            </li>
            <li>
              <a
                href="#servicos"
                className="hover:text-orange-500 transition-colors"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#projetos"
                className="hover:text-orange-500 transition-colors"
              >
                Obras Realizadas
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Cotação Online
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Contato Direto */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">
            Contato
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-orange-600 shrink-0" />
              <span>Rua Chavier F.R de Ashiys, 123 - São Paulo, SP</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-orange-600 shrink-0" />
              <span>(11) 2364.9667</span>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle size={18} className="text-orange-600 shrink-0" />
              <span>(11) 9.9862.3585</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-orange-600 shrink-0" />
              <span className="break-all">contato@gessovini.com.br</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Barra Final de Direitos */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold">
        <p>
          © {currentYear} GessoVini Projetos e Acabamentos. Todos os direitos
          reservados.
        </p>
        <p className="flex items-center gap-1">
          Desenvolvido por{" "}
          <span className="text-white">Genevieve Web Sites</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
