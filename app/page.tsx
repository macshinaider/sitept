"use client";
import { Prompt } from "@/components/card";
import RanquePVP from "@/components/rankpvp";
import RanqueEXP from "@/components/rankxp";
import Link from "next/link";
import Head from "next/head";


export default function Home() {
	function DiscordRedirect() {
		window.open("https://discord.gg/A7RtTbavEW", "_blank");
	}
	const baixarArquivo = (url: string) => {
		var link = document.createElement("a");
		link.href = url;
		link.download = "nome_do_arquivo";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<main className="flex flex-col items-center justify-center text-center inset-0 gap-5 p-2">
			<div>
				<>
					<h1 className="text-3xl hidden">BETA OPEN</h1>
					<Head>
						<title>Larean Priston Tale</title>
						<meta
							name="description"
							content="Bem-vindo ao Larean Priston Tale, um jogo emocionante e envolvente. Junte-se a nós agora!"
						/>
						<link rel="canonical" href="https://www.pt.larean.com.br" />
					</Head>
				</>
				
				<div>
					<audio controls autoPlay hidden>
						<source src="/bemvindo.mp3" type="audio/mp3" />
						Your browser does not support the audio element.
					</audio>
				</div>

				<h1 className="hidden">Larean Priston Tale</h1>
				<div className="flex gap-4 md:flex-col">
					<Link href="/cadastro">
						<p className="bg-emerald-600 hover:bg-emerald-700 p-2 rounded-lg text-white">
							Criar Conta
						</p>
					</Link>
					<Link
						href="/esquecisenha"
						className="bg-red-600 hover:bg-red-700 p-2 rounded-lg text-white"
					>
						Recuperar Senha
					</Link>

					<button onClick={DiscordRedirect}>
						<p className="bg-[#5865F2] hover:bg-blue-800 p-2 rounded-lg text-white">
							Discord
						</p>
					</button>
					<button
						onClick={() =>
							baixarArquivo(
								"https://nextcloud.jonife.com.br/s/ezrCACpFkTZ8Yi6/download/Instalar%20Larean%20Priston%20Tale.exe"
							)
						}
					>
						<p className="bg-green-500 hover:bg-green-700 p-2 rounded-lg text-white">
							Download
						</p>
					</button>
				</div>
			</div>

			<div className="flex md:flex-col">
				<div>
					<RanqueEXP />
				</div>
				<div>
					<img src="/fighter_2013.png" alt="lutador" />
				</div>
				<div>
					<RanquePVP />
				</div>
			</div>
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

			<Prompt />
		</main>
	);
}
