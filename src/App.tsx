import './App.css'
import React, { useState } from 'react';
import CardsShower, { CardData } from './CardsShower';

const App: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  return (
    <div>
      <h1>React Cards App</h1>
      <CardsShower
        setState={setCards}
        state={cards}
        title='my cards'
      />
    </div>
  );
};

export default App;