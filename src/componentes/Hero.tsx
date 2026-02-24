import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import imag1 from "../assets/imgs/hero2.jpeg";
import imag2 from "../assets/imgs/Acartonado.jpeg";
import imag3 from "../assets/imgs/parede.jpeg";
import imag4 from "../assets/imgs/hero3.jpg";
import imag5 from "../assets/imgs/hero1.jpeg";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";

const services = [
  {
    title: "Forro Drywall",
    description: "Acabamento perfeito e agilidade na entrega para sua obra.",
    image: imag1,
  },
  {
    title: "Forro Acartonado",
    description: "Estética superior e isolamento térmico de alto padrão.",
    image: imag2,
  },
  {
    title: "Paredes Drywall",
    description: "Divisórias modernas com isolamento acústico eficiente.",
    image: imag3,
  },
  {
    title: "Sancas e Decorativos",
    description:
      "Design personalizado com iluminação embutida valorizando o ambiente.",
    image: imag4,
  },
  {
    title: "Projetos Residenciais",
    description:
      "Solução ideal para ambientes corporativos e controle acústico.",
    image: imag5,
  },
];

const Hero = () => {
  return (
    <section className="w-full bg-zinc-50 pt-16 pb-8">
      {" "}
      {/* H baixo - padding reduzido */}
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col h-[400px] rounded-xl overflow-hidden shadow-lg bg-white border border-zinc-200">
                {/* Card de Imagem (Parte Superior) */}
                <div className="h-1/2 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card de Texto (Parte Inferior) */}
                <div className="h-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-800 uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <div className="w-10 h-1 bg-orange-600 my-3"></div>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <button className="text-orange-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                    Saiba mais <span>→</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
