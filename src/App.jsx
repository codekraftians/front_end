import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <main className="flex-grow overflow-auto">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
