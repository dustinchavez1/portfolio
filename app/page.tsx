import Navbar from "./components/Navbar";
import About from "./components/About";
import Title from "./components/Title";
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
export default function Home() {
  return (
    <>
      <Navbar />
      <Title />
      <div className="container mx-auto px-4">
       
      </div>
      <About />
      <Experience/>
      <Projects />
      <Contact />
    </>
  );
}
