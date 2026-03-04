import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LearningModules from './components/LearningModules';
import AITools from './components/AITools';
import UploadSchedule from './components/UploadSchedule';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-red-100 selection:text-red-600">
      <Navbar />
      <main>
        <Hero />
        <LearningModules />
        <UploadSchedule />
        <AITools />
      </main>
      <Footer />
    </div>
  );
}
