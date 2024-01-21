"use client";
import { GetRanquedExp } from "@/hook/getexp";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton"; // Certifique-se de instalar essa biblioteca

const RanqueEXP = () => {
	const { jogadores, fetchJogadores } = GetRanquedExp();

	useEffect(() => {
		if (!jogadores) {
			fetchJogadores();
		}
	}, []);

	if (!jogadores) {
		// Mostra o esqueleto enquanto os dados estão sendo carregados
		return (
			<div className="max-w-screen-md mx-auto p-8 ">
				<h1 className="text-2xl font-bold mb-4">Rankings de Experiência</h1>
				<ul className="list-none p-0 max-w-xs">
					{[...Array(5).keys()].map((index) => (
						<li
							key={index}
							className="border rounded p-2 mb-2 flex justify-between"
						>
							<div className="max-w-xs">
								<Skeleton height={20} width={150} />
								<Skeleton height={20} width={150} />
								<Skeleton height={20} width={150} />
							</div>
							<div>
								<Skeleton circle height={50} width={50} />
							</div>
						</li>
					))}
				</ul>
			</div>
		);
	}

	return (
		<div className="max-w-screen-md mx-auto p-8 bg-gray-200 rounded">
			<h1 className="text-2xl font-bold mb-4">Rankings de Experiência</h1>
			<ul className="list-none p-0 max-w-xs">
				{jogadores.map((jogador) => (
					<li
						key={jogador.ID}
						className="border rounded p-2 mb-2 flex justify-between bg-slate-100"
					>
						<div className="max-w-xs">
							<p className="mb-2 justify-start items-start text-start">
								Nome: {jogador.Name}
							</p>
							<p className="mb-2 justify-start items-start text-start">
								Nível: {jogador.Lvl} Lvl
							</p>
							<p className="mb-2 justify-start items-start text-start">
								Experiência: {jogador.Exp}%
							</p>
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

export default RanqueEXP;
