import Contact from './components/contact';
import Product from './components/product';
import About from './components/about';
import Pricing from './components/pricing';
import Home from './components/home';
import './App.css';

function App() {
  return (
    <div style={{ textAlign: 'center', display: 'flex', gap: '1rem' }}>
      <Home />
      <Product />
      <Pricing />
      <About />
      <Contact />
    </div>
  );
}

export default App;
