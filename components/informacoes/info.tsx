const Informacoes = () => {
	return (
		<div className="flex justify-between gap-6 md:flex-col">
			<iframe
				src="https://discord.com/widget?id=1181632791935471636&theme=dark"
				width="350"
				height="500"
				sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
			></iframe>
			<div className="flex flex-col items-start bg-gray-100 p-4 rounded-lg shadow-lg">
				<h1 className="flex items-center space-x-2">
					<a className="font-bold text-gray-800">Level Inicial:</a>
					<a className="text-green-600">1</a>
				</h1>
				<h1 className="flex items-center space-x-2">
					<a className="font-bold text-gray-800">Level Maximo:</a>
					<a className="text-green-600">130</a>
				</h1>
				<h1 className="flex items-center space-x-2">
					<a className="font-bold text-gray-800">XP rate:</a>
					<a className="text-green-600">13x</a>
				</h1>
				<h1 className="flex items-center space-x-2">
					<a className="font-bold text-gray-800">Drop rate:</a>
					<a className="text-red-600">Hard</a>
				</h1>
				<h1 className="flex items-center space-x-2">
					<a className="font-bold text-gray-800">Drops até:</a>
					<a className="text-green-600">105</a>
				</h1>
				<h1 className="flex items-center space-x-2">
					<a className="font-bold text-gray-800">Mapas até:</a>
					<a className="text-green-600">ET3</a>
				</h1>
				<h1 className="flex items-center space-x-2">
					<a className="font-bold text-gray-800">Aging até:</a>
					<a className="text-green-600">+20</a>
				</h1>
				<h1 className="flex items-center space-x-2">
					<a className="font-bold text-gray-800">
						Sistema de roleta de BOSS
					</a>
				</h1>
				<h1 className="flex items-center space-x-2">
					<a className="font-bold text-gray-800">Alerta BOSS Global</a>
				</h1>
				<h1 className="flex items-center space-x-2">
					<a className="font-bold text-gray-800">PVP no "K"</a>
				</h1>
				<h1 className="flex items-center space-x-2">
					<a className="font-bold text-gray-800">Sistema Vip</a>
				</h1>
				<h1 className="flex items-center space-x-2">
					<a className="font-bold text-gray-800">
						Tudo que tem no jogo é dropavel até coins
					</a>
				</h1>
				<h1 className="flex items-center space-x-2">
					<a className="font-bold text-gray-800">
						Arena PVP com BOSS para os 3 colocados
					</a>
				</h1>
				<h1 className="flex items-center space-x-2">
					<a className="font-bold text-gray-800">PvP Equih1brado</a>
				</h1>
				<h1 className="flex items-center space-x-2">
					<a className="font-bold text-gray-800">
						3 Coroas de Sod com Status
					</a>
				</h1>
				<h1 className="flex items-center space-x-2">
					<a className="font-bold text-gray-800">Destaque de classe</a>
				</h1>
				<h1 className="flex items-center space-x-2">
					<a className="font-bold text-gray-800">Logado Premiado</a>
				</h1>
				<h1 className="flex items-center space-x-2">
					<a className="font-bold text-gray-800">Loja de Tempo</a>
				</h1>
				<h1 className="flex items-center space-x-2 ">
					<a className="font-bold text-gray-800">Evento de perguntas</a>
				</h1>
				<h1 className="flex items-center space-x-2 font-bold text-gray-800">
					Suporte é pelo Discord
				</h1>
			</div>
		</div>
	);
};

export default Informacoes;
