"use client";

import { GetRanquedPvp } from "@/hook/getpvp";
import { useEffect } from "react";

const RanquePVP = () => {
	const { jogadores, fetchJogadorespvp } = GetRanquedPvp();

	useEffect(() => {
		if (!jogadores) {
			fetchJogadorespvp();
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
			<h1 className="text-2xl font-bold mb-4">Rankings de Player vs Player</h1>
			<ul className="list-none p-0">
				{jogadores.map((jogador) => (
					<li
						key={jogador.ID}
						className="border rounded p-2 mb-2 flex justify-between"
					>
						<div>
							<p className="mb-2">Nome: {jogador.Name}</p>
							<p className="mb-2">Kills: {jogador.Kills}</p>
							<p>Mortes: {jogador.Deads}</p>
						</div>
						<div>
							<img
								src={`/${jogador.Class}.gif`}
								alt={`Imagem da classe ${jogador.Class}`}
								className="w-12 h-12 mt-2"
							/>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default RanquePVP;
