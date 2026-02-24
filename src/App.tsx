import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import Services from "./componentes/Services";
import Project from "./componentes/Project";
import Footer from "./componentes/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-white">
      {/* Orquestração das Seções */}
      <Header />
      <Hero />
      <Services />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
