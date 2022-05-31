import './App.css';
import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer/Footer'
import MonitoringTips from './components/MonitoringTips/MonitoringTips'
import Questions from './forms/Questions/Questions'
import NegativeFeedback from './components/NegativeFeedback/NegativeFeedback'


function App() {
  return (
    <>
    <Header/>
    <LandingPage/>
    <Questions/>
    <MonitoringTips/>
    <NegativeFeedback />
    <Footer />
    </>
  );
}

export default App;
