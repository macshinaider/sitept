"use client";
import { Prompt } from "@/components/card";
import RanquePVP from "@/components/rankpvp";
import RanqueEXP from "@/components/rankxp";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import Modal from "react-modal";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	function openModal() {
		setModalIsOpen(true);
	}

	function closeModal() {
		setModalIsOpen(false);
	}

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
					<button onClick={openModal}>
						<p className="bg-[#f2a258] hover:bg-blue-800 p-2 rounded-lg text-white">
							Infos
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
			<div className="flex w-[90%] justify-between gap-10 md:flex-col bg-gray-100 p-4">
				<iframe
					src="https://discord.com/widget?id=1181632791935471636&theme=dark"
					width="350"
					height="500"
					sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
					className="border-4 border-emerald-500 rounded-lg"
				></iframe>
				<div className="flex flex-col gap-6">
					<h1 className="flex justify-center items-center gap-4 italic text-lg font-bold text-emerald-700">
						Entre no grupo <FaWhatsapp size={32} />
					</h1>
					<img
						src="/qrcodegrupo.png"
						alt="qrcodewhatsapp"
						className="w-64 h-64 mx-auto"
					/>
					<a
						href="https://chat.whatsapp.com/DNyfE0TlxRo6GyXEGyNS8r"
						className="bg-emerald-500 p-2 rounded text-white text-center font-semibold hover:bg-emerald-600"
					>
						Entrar
					</a>
				</div>
			</div>

			<Prompt />
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Informações"
				style={{
					overlay: {
						backgroundColor: "rgba(0, 0, 0, 0.75)",
					},
					content: {
						top: "50%",
						left: "50%",
						right: "auto",
						bottom: "auto",
						marginRight: "-50%",
						transform: "translate(-50%, -50%)",
						backgroundColor: "#fff",
						borderRadius: "4px",
						padding: "20px",
					},
				}}
			>
				<div className="flex flex-col items-start bg-gray-100 p-4 rounded-lg shadow-lg">
					<img src="/info.png" alt="status" />
				</div>
			</Modal>
		</main>
	);
}
