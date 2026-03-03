import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import '../style.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  );
}

export default App;
