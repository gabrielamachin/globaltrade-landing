import Header  from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import NewsCarousel from './components/NewsCarousel';
import Footer from './components/Footer';
import './styles/style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <NewsCarousel />
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;