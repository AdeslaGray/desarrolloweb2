import { useContext } from 'react';
import { TriviaContext } from '../context/TriviaContext';
import { useNavigate } from 'react-router-dom';

const ResultsPage = () => {
  const { score, answeredCount, resetGame } = useContext(TriviaContext);
  const navigate = useNavigate();

  const handleRestart = () => {
    resetGame();
    navigate('/');
  };

  return (
    <div>
      <h2>Resultados Finales</h2>
      <p>Puntaje: {score}</p>
      <p>Preguntas respondidas: {answeredCount}</p>
      <button onClick={handleRestart}>Reiniciar Trivia</button>
    </div>
  );
};

export default ResultsPage;