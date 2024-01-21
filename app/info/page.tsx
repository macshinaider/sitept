"use client";

import { useRouter } from "next/navigation";

const Info = () => {
	const route = useRouter();
	return (
		<div className="container mx-auto px-4 ">			
			<main className="flex flex-col items-center justify-center min-h-screen gap-3 p-2">
				<div className="bg-emerald-500 p-3 rounded">
					<button onClick={() => route.push("/")} className="text-white">
						Voltar
					</button>
				</div>
				<h1 className="text-4xl font-bold text-blue-600">
					Larean Priston Tale
				</h1>
				<ul className="text-lg text-gray-700 list-disc mt-4">
					<li>
						Level Inicial:{" "}
						<span className="text-green-500 font-semibold">1</span>
					</li>
					<li>
						Level Máximo:{" "}
						<span className="text-green-500 font-semibold">130</span>
					</li>
					<li>
						Itens Máximo:{" "}
						<span className="text-green-500 font-semibold">105</span>
					</li>
					<li>
						Taxa de Gold:{" "}
						<span className="text-red-500 font-semibold">Hard</span>
					</li>
					<li>
						Taxa de Drops:{" "}
						<span className="text-red-500 font-semibold">Hard</span>
					</li>
					<li>
						Taxa de Experiência:{" "}
						<span className="text-yellow-500 font-semibold">13x</span>
					</li>
					<li>Sistema de Quests</li>
					<li>
						Mapa Máximo:{" "}
						<span className="text-purple-500 font-semibold">ET3</span>
					</li>
					<li>
						Aging até <span className="text-blue-500 font-semibold">+20</span>
					</li>
					<li>Mix Bota, Bracelete e Luva</li>
					<li>Sem aging em set</li>
					<li>Host BR, Ping Brasileiro</li>
					<li>Motor gráfico</li>
					<li>Sistema de socket Mais Atual</li>
					<li>Sistema PvP "K" adicionando EXP e Drops</li>
					<li>Alerta Boss</li>
					<li>Buff Top Classe</li>
					<li>Sistema de Roleta Boss</li>
					<li>Sistema de Reliquias Boss</li>
					<li>Monstarias</li>
					<li>Arena PvP</li>
					<li>Sistema de Restaurar Itens in-game</li>
					<li>Sistema de Limpar itens</li>
					<li>Respec por Classe</li>
					<li>Display de dano</li>
					<li>Sistema de craft</li>
					<li>Alerta de Aging</li>
					<li>
						Alerta player alcançou Level{" "}
						<span className="text-orange-500 font-semibold">80+</span>
					</li>
					<li>Loja coins e tempo</li>
				</ul>
			</main>
		</div>
	);
};

export default Info;
