import img1 from "../assets/imgs/projeto3.jpeg";
import img2 from "../assets/imgs/projeto6.jpg";
import img3 from "../assets/imgs/hero4.jpeg";
import img4 from "../assets/imgs/projeto2.jpeg";
import img5 from "../assets/imgs/projeto4.jpeg";
import img6 from "../assets/imgs/projeto5.jpeg";

const projects = [
  {
    id: 1,
    title: "Residencial Alphaville",
    category: "Sancas e Iluminação",
    image: img1,
  },
  {
    id: 2,
    title: "Escritório Tech",
    category: "Forro e Paredes ",
    image: img2,
  },
  {
    id: 3,
    title: "CD Logístico Diase - Extrema ",
    category: "Paredes Drywall",
    image: img3,
  },
  {
    id: 4,
    title: "Apartamento  Residencial Garden",
    category: "Forro Acartonado",
    image: img4,
  },
  {
    id: 5,
    title: "Clínica Médica",
    category: "Drywall Hidrófugo",
    image: img5,
  },
  {
    id: 6,
    title: "Auditório Municipal",
    category: "Isolamento Acústico",
    image: img6,
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-orange-600 uppercase tracking-[0.4em] mb-4">
            Portfólio
          </h2>
          <p className="text-4xl md:text-5xl font-black text-zinc-900 uppercase italic">
            Obras Realizadas
          </p>
          <div className="w-16 h-1 bg-orange-600 mx-auto mt-6"></div>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative h-[400px] overflow-hidden rounded-2xl bg-zinc-200 cursor-pointer"
            >
              {/* Imagem com Zoom no Hover */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>

              {/* Conteúdo do Projeto */}
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-orange-500 text-xs font-bold uppercase tracking-widest block mb-2">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-bold">
                  {project.title}
                </h3>

                {/* Linha Decorativa que cresce */}
                <div className="w-0 h-1 bg-orange-600 mt-4 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão para ver mais (Instagram/WhatsApp) */}
        <div className="mt-16 text-center">
          <button className="border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white font-bold py-4 px-12 rounded-full transition-all uppercase tracking-widest text-sm">
            Ver mais no Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
