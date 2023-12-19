import axios from 'axios';

const BASE_URL = 'https://api.datamuse.com/words?rel_jja=';

export const fetchSynonyms = (word: string) => {
    return axios.get(`${BASE_URL}${word}`)
};