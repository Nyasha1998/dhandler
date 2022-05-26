import './App.css';
import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer/Footer'
import MonitoringTips from './components/MonitoringTips/MonitoringTips'
import Questions from './forms/Questions/Questions'

function App() {
  return (
    
    <div>
    <Header />
    <MonitoringTips />
    <Questions />
    <Footer />
    </div>
    
  );
}

export default App;
