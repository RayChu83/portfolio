import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Greeting from './components/Greeting';
import NavigationBar from './components/NavigationBar';
import ProjectsContainer from './components/ProjectsContainer';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <main className='max-w-5xl m-auto'>
        <NavigationBar />
        <Greeting />
        <About />
        <Skills/>
        <ProjectsContainer />
        <Contact />
      </main>
    </>
  );
}

export default App;
