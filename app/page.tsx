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

export default function Home() {
	function DiscordRedirect() {
		window.open("https://discord.gg/A7RtTbavEW", "_blank");
	}

	return (
		<main className="flex flex-col items-center justify-center text-center inset-0 gap-5">
			<div>
				<>
					<h1 className="text-3xl">BETA OPEN</h1>
				</>
				<LaunchPage />

				<h1>Larean Priston Tale</h1>
				<div className="flex gap-4">
					<Link href="/cadastro">
						<p className="bg-cyan-600 hover:bg-cyan-700 p-2 rounded-lg text-white">
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
					<button>
						<p className="bg-yellow-500 hover:bg-yellow-700 p-2 rounded-lg text-white">
							Download!
						</p>
					</button>
				</div>
			</div>

			<div className="flex md:flex-col">
				<div>
					<RanqueEXP />
				</div>
				<div></div>
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
