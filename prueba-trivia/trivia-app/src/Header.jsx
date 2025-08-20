import { useContext } from 'react';
import { TriviaContext } from '../context/TriviaContext';

const Header = () => {
  const { score } = useContext(TriviaContext);

  return (
    <header>
      <h1>Trivia App</h1>
      <p>Puntaje actual: {score}</p>
    </header>
  );
};

export default Header;