import ContactUs from './components/contact-us';
import Features from './components/features';
import Footer from './components/footer';
import IntroVideo from './components/intro-video';
import Partners from './components/partners';
import Prototyping from './components/prototyping';
import Testimonials from './components/testimonials';
import Welcome from './components/welcome';
import './App.css';

function App() {
  return (
    <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', gap: '10rem' }}>
      <Welcome />
      <Features />
      <IntroVideo />
      <Prototyping />
      <Partners />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
