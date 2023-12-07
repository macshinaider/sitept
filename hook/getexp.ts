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
export const GetRanquedExp = () => {
    const [jogadores, setJogadores] = useState<Jogador[]>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
  
    const fetchJogadores = async (): Promise<void> => {
      setLoading(true);
      try {
        const response = await GetJogadores();
        
        // Verificar se 'response' é uma array antes de tentar ordenar
        if (Array.isArray(response)) {
          // Ordenar jogadores pela função de ordenação
          setJogadores(response.sort((a, b) => b.Lvl - a.Lvl || b.Exp - a.Exp));
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
  
    return { jogadores, loading, error, fetchJogadores };
  };
  
 
  