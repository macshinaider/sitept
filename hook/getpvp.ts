import { GetJogadores } from "@/function/getJogadores";
import { useState } from "react";

export type Jogador = {
	ID: number;
	accountID: string;
	Name: string;
	Lvl: number;
	Exp: number;
	DateUp: Date;
	Kills: number;
	Deads: number;
	Class: number;
};
export const GetRanquedPvp = () => {
    const [jogadores, setJogadores] = useState<Jogador[]>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
  
    const fetchJogadorespvp = async (): Promise<void> => {
      setLoading(true);
      try {
        const response = await GetJogadores();
        
        // Verificar se 'response' é uma array antes de tentar ordenar
        if (Array.isArray(response)) {
          // Ordenar jogadores pela função de ordenação
          const odernarranque = response.sort((a, b) => b.Kills - a.Kills);
          setJogadores(odernarranque.slice(0,5))
        } else {
          setJogadores([]);
        }
      } catch (error) {
        setJogadores(undefined);
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
  
    return { jogadores, loading, error, fetchJogadorespvp };
  };
  
 
  