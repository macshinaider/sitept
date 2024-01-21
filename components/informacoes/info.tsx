const Informacoes = () => {
	return (
		<div className="flex justify-between gap-6 md:flex-col">
			<iframe
				src="https://discord.com/widget?id=1181632791935471636&theme=dark"
				width="350"
				height="500"
				sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
			></iframe>
			<ul className="flex flex-col items-start bg-gray-100 p-4 rounded-lg shadow-lg">
				<li className="flex items-center space-x-2">
					<span className="font-bold text-gray-800">Level Inicial:</span>
					<span className="text-green-600">1</span>
				</li>
				<li className="flex items-center space-x-2">
					<span className="font-bold text-gray-800">Level Maximo:</span>
					<span className="text-green-600">130</span>
				</li>
				<li className="flex items-center space-x-2">
					<span className="font-bold text-gray-800">XP rate:</span>
					<span className="text-green-600">13x</span>
				</li>
				<li className="flex items-center space-x-2">
					<span className="font-bold text-gray-800">Drop rate:</span>
					<span className="text-red-600">Hard</span>
				</li>
				<li className="flex items-center space-x-2">
					<span className="font-bold text-gray-800">Drops até:</span>
					<span className="text-green-600">105</span>
				</li>
				<li className="flex items-center space-x-2">
					<span className="font-bold text-gray-800">Mapas até:</span>
					<span className="text-green-600">ET3</span>
				</li>
				<li className="flex items-center space-x-2">
					<span className="font-bold text-gray-800">Aging até:</span>
					<span className="text-green-600">+20</span>
				</li>
				<li className="flex items-center space-x-2">
					<span className="font-bold text-gray-800">
						Sistema de roleta de BOSS
					</span>
				</li>
				<li className="flex items-center space-x-2">
					<span className="font-bold text-gray-800">Alerta BOSS Global</span>
				</li>
				<li className="flex items-center space-x-2">
					<span className="font-bold text-gray-800">PVP no "K"</span>
				</li>
				<li className="flex items-center space-x-2">
					<span className="font-bold text-gray-800">Sistema Vip</span>
				</li>
				<li className="flex items-center space-x-2">
					<span className="font-bold text-gray-800">
						Tudo que tem no jogo é dropavel até coins
					</span>
				</li>
				<li className="flex items-center space-x-2">
					<span className="font-bold text-gray-800">
						Arena PVP com BOSS para os 3 colocados
					</span>
				</li>
				<li className="flex items-center space-x-2">
					<span className="font-bold text-gray-800">PvP Equilibrado</span>
				</li>
				<li className="flex items-center space-x-2">
					<span className="font-bold text-gray-800">
						3 Coroas de Sod com Status
					</span>
				</li>
				<li className="flex items-center space-x-2">
					<span className="font-bold text-gray-800">Destaque de classe</span>
				</li>
				<li className="flex items-center space-x-2">
					<span className="font-bold text-gray-800">Logado Premiado</span>
				</li>
				<li className="flex items-center space-x-2">
					<span className="font-bold text-gray-800">Loja de Tempo</span>
				</li>
				<li className="flex items-center space-x-2 ">
					<span className="font-bold text-gray-800">Evento de perguntas</span>
				</li>
				<li className="flex items-center space-x-2 font-bold text-gray-800">
					Suporte é pelo Discord
				</li>
			</ul>
		</div>
	);
};

export default Informacoes;
