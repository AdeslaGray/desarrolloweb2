import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TriviaProvider } from './context/TriviaContext';
import Header from './components/Header';
import Home from './pages/Home';
import ResultsPage from './pages/ResultsPage';

const App = () => (
  <TriviaProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  </TriviaProvider>
);

export default App;