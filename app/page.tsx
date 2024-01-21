"use client";
import { Prompt } from "@/components/card";
import ModalCadastro from "@/app/cadastro/page";
import RanquePVP from "@/components/rankpvp";
import RanqueEXP from "@/components/rankxp";
import Image from "next/image";
import { useEffect } from "react";
import { Form } from "react-hook-form";
import Link from "next/link";
import useSound from "use-sound";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import LaunchPage from "@/components/countdown";
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
				{/* <LaunchPage /> */}
				<div>
					<audio controls autoPlay  >
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
					<Link
						href="/info"
						className="bg-lime-500 hover:bg-lime-700 p-2 rounded-lg text-white"
					>
						Informações
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
			<iframe
				src="https://discord.com/widget?id=1181632791935471636&theme=dark"
				width="350"
				height="500"
				sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
			></iframe>
			<Prompt />
		</main>
	);
}
