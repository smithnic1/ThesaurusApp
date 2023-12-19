import React, { useState } from 'react';
import './App.css';
import { useGetSynonyms } from './hooks/useGetSynonyms';
import { Button, TextField } from '@mui/material'

function App() {
  const [word, setWord] = useState<string>('');

  const { isLoading, getSynonyms, synonyms } = useGetSynonyms();

  const handleFetchSynonyms = (e: React.FormEvent) => {
    e.preventDefault();
    getSynonyms(word);
  }

  return (
    <div className="App">
      <div className="container">
        <form>
          <div className="row">
            <label className='synonym-label' htmlFor="word-input">Enter a word to see synonyms</label>
          </div>
          <TextField
            variant="filled"
            value={word}
            onChange={e => setWord(e.target.value)}
            type="text"
            id="word-input"></TextField>
          <div className="row" id='button-row'>
            <Button
              variant='outlined'
              onClick={() => setWord('')}
            >
              Clear
            </Button>
            <Button
              variant='contained'
              onClick={handleFetchSynonyms}
            >
              Submit
            </Button>
          </div>
        </form>
        {isLoading ? <div>Loading...</div> :
          <ol>
            {synonyms.map(word => (
              <li>
                {word.word}
              </li>
            ))}
          </ol>
        }
      </div>
    </div>
  );
}

export default App;