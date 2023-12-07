"use client";

import { GetRanquedExp } from "@/hook/getexp";
import { useEffect } from "react";

const RanqueEXP = () => {
	const { jogadores, fetchJogadores } = GetRanquedExp();

    useEffect(() => {
        if (!jogadores) {
            fetchJogadores();
        }
      }, []);

      if (!jogadores) {
        return (
          <div className="hidden">
            <h1>Carregando</h1>
          </div>
        );
      }

	return (
		<div className="max-w-screen-md mx-auto p-8">
			<h1 className="text-2xl font-bold mb-4">Rankings de Experiência</h1>
			<ul className="list-none p-0">
				{jogadores.map((jogador) => (
					<li
						key={jogador.ID}
						className="border rounded p-2 mb-2 flex justify-between"
					>
						<div>
							<p className="mb-2">Nome: {jogador.Name}</p>
							<p className="mb-2">Nível: {jogador.Lvl} Lvl</p>
							<p>Experiência: {jogador.Exp}%</p>
						</div>
						<div>
							<img
								src={`/${jogador.Class}.gif`} // Substitua 'images' pelo diretório correto
								alt={`Imagem da classe ${jogador.Class}`}
								className="w-12 h-12 mt-2" // Ajuste o tamanho conforme necessário
							/>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default RanqueEXP;
