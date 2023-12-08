import Detail from "./components/Detail";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hobbie from "./components/Hobbie";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className='bg-back relative py-10 font-lato w-full'>
        <div className='container  sm:mx-auto overflow-hidden px-5'>
          <Detail />
          <Skills />
          <Hobbie />
          <Experience />
          <Project />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
