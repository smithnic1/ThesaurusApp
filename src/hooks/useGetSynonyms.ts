import { useState } from "react"
import { fetchSynonyms } from "../api/fetchSynonyms";


interface Synonym {
    word: string;
    score: number;
};

export const useGetSynonyms = () => {
    const [synonyms, setSynonyms] = useState<Synonym[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getSynonyms = (word: string) => {
        setIsLoading(true);
        fetchSynonyms(word)
            .then(res => {
                setSynonyms(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => setIsLoading(false))
    }

    return { isLoading, getSynonyms, synonyms }
}