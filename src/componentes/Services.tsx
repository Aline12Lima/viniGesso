import {
  Drill,
  LayoutGrid,
  Layers,
  ShieldCheck,
  Ruler,
  Lightbulb,
} from "lucide-react";

const allServices = [
  {
    title: "Forro Drywall",
    description:
      "Instalação rápida com acabamento liso, ideal para esconder fiações e tubulações com perfeição.",
    icon: <Layers className="w-8 h-8 text-orange-600" />,
  },
  {
    title: "Forro Acartonado",
    description:
      "Placas de gesso de alta resistência que garantem isolamento térmico e acústico superior.",
    icon: <ShieldCheck className="w-8 h-8 text-orange-600" />,
  },
  {
    title: "Paredes de Drywall",
    description:
      "Divisórias inteligentes que permitem reformular ambientes sem a sujeira da alvenaria tradicional.",
    icon: <LayoutGrid className="w-8 h-8 text-orange-600" />,
  },
  {
    title: "Sancas Decorativas",
    description:
      "Projetos de iluminação embutida e sancas abertas ou fechadas para valorizar o design do teto.",
    icon: <Lightbulb className="w-8 h-8 text-orange-600" />,
  },
  {
    title: "Forro Mineral",
    description:
      "Soluções modulares para escritórios e indústrias, com foco total em absorção acústica.",
    icon: <Ruler className="w-8 h-8 text-orange-600" />,
  },
  {
    title: "Manutenção e Reparos",
    description:
      "Equipe técnica especializada em reparos estruturais e correções de umidade em gesso.",
    icon: <Drill className="w-8 h-8 text-orange-600" />,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-[0.3em] mb-2">
              Soluções Técnicas
            </h2>
            <p className="text-4xl md:text-5xl font-black text-zinc-900 leading-tight">
              Excelência em cada <br /> detalhe do acabamento.
            </p>
          </div>
          <div className="w-24 h-1 bg-orange-600 hidden md:block mb-4"></div>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <div
              key={index}
              className="group p-8 border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-300 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 p-4 bg-white w-fit rounded-xl shadow-sm group-hover:bg-orange-50 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-800 mb-4 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-200 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  Padrão GessoVini
                </span>
                <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center">
                  <span className="text-lg">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Interno */}
        <div className="mt-20 p-10 bg-zinc-900 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white text-center md:text-left">
            <h4 className="text-2xl font-bold">
              Precisa de um orçamento personalizado?
            </h4>
            <p className="text-zinc-400">
              Analismos seu projeto em até 24h sem compromisso.
            </p>
          </div>
          <button className="bg-orange-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105 active:scale-95 whitespace-nowrap">
            Solicitar Cotação
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
