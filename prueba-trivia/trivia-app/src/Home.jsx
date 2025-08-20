import { useState, useEffect, useContext } from 'react';
import { TriviaContext } from '../context/TriviaContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState('');
  const { incrementScore } = useContext(TriviaContext);
  const navigate = useNavigate();

  useEffect(() => {
    const mockQuestions = [
      {
        idPregunas: '1',
        DescripcionPregunta: '¿El cielo es azul?',
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: true,
        puntajePregunta: 1
      },
      // Agrega hasta 5 preguntas aquí
    ];
    setQuestions(mockQuestions);
  }, []);

  const handleAnswer = (answer) => {
    const current = questions[currentIndex];
    setSelected(answer);
    if (answer === current.respuestaCorrecta) {
      setFeedback('✅ ¡Correcto!');
      incrementScore(current.puntajePregunta);
    } else {
      setFeedback('❌ Incorrecto');
    }
  };

  const nextQuestion = () => {
    setSelected(null);
    setFeedback('');
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate('/results');
    }
  };

  if (questions.length === 0) return <p>Cargando preguntas...</p>;

  const current = questions[currentIndex];

  return (
    <div>
      <h2>{current.DescripcionPregunta}</h2>
      <button disabled={selected !== null} onClick={() => handleAnswer(true)}>Verdadero</button>
      <button disabled={selected !== null} onClick={() => handleAnswer(false)}>Falso</button>
      {feedback && <p>{feedback}</p>}
      {selected !== null && <button onClick={nextQuestion}>Siguiente</button>}
    </div>
  );
};

export default Home;