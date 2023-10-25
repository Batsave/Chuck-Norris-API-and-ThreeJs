
import JokeCard from './components/jokecard';
import axios from 'axios';
import { useState } from 'react';

const jokeData = {
  value: 'Click the button to get a joke',
};

function App() {
  const [joke, setJoke] = useState(jokeData);

  const getNewJoke = () => {
    axios
      .get('https://api.chucknorris.io/jokes/random')

      .then((response) => {
        setJoke(response.data);
      });
  };

  return (
    <div className="App">
      
      <JokeCard 
        value={joke.value}
        getNewJoke= {getNewJoke}
      />
    </div>
  );
}
export default App;