import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import dockerLogo from '/docker.svg';
import './App.css';
import _ from 'lodash';

function App() {
  const [count, setCount] = useState(-1);
  const [braincells, setBraincells] = useState('brain cells');

  useEffect(() => {
    if (count === 1) {
      setBraincells('brain cell');
    } else {
      setBraincells('brain cells');
    }
  }, [count]);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <a href='https://docker.com' target='_blank'>
          <img src={dockerLogo} className='logo docker' alt='Docker logo' />
        </a>
      </div>
      <h1>Vite + React + Docker</h1>
      <div className='card'>
        <button onClick={() => setCount(_.random(0, 10))}>click here</button>
        {count > -1 ? (
          <h2>
            you have {count} {braincells} left LMAOOOO{' '}
          </h2>
        ) : (
          <h2>
            click the button to find out how many brain cells you have left
          </h2>
        )}
      </div>
    </>
  );
}

export default App;
