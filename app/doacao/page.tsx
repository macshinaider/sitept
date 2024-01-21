"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Payment } from "../api/payment/checkout/types";
import { getQrcode } from "../api/payment/checkout/getqrcode";
import { CreatePedido } from "../api/payment/checkout/gravarpedido";

// Crie um esquema Zod para a validação do formulário
const schema = z.object({
	username: z.string(),
	coins: z.string(),
});

export default function Form() {
	const [Username, setUsername] = useState("");
	const [coins, setCoins] = useState<number>();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	});

	function ConverterCoinsEmReais(coins: number) {
		return coins / 100;
	}

	const onSubmit = async (data: any) => {
		console.log("🚀 ~ onSubmit ~ data:", data);
		// Verifique se o nome de usuário existe antes de enviar
		const response = await fetch(`/api/users?username=${data.username}`);

		if (!response.ok) {
			alert("Esse Usuario não existe");
			return;
		}

		const reais = ConverterCoinsEmReais(data.coins);
		const createcobranca = await fetch("api/payment/checkout", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				valor: reais,
				username: data.username,
			}),
		});
		if (createcobranca.ok) {
			const data2: Payment = await createcobranca.json();
			const QRcodeimg = await getQrcode(data2.id);
			const creatpedido = await CreatePedido(
				data2.id,
				data.username,
				QRcodeimg
			);
			console.log("🚀 ~ onSubmit ~ creatpedido:", creatpedido);

			console.log(data);
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="h-screen flex-col gap-4 bg-zinc-950 text-zinc-300 flex items-center justify-center"
		>
			<div>
				<label
					htmlFor="username"
					className="block text-sm text-white font-medium "
				>
					Username
				</label>
				<input
					id="username"
					{...register("username")}
					className="mt-1 block text-black w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				/>
				{errors.username && typeof errors.username.message === "string" && (
					<p className="mt-2 text-sm text-red-600">{errors.username.message}</p>
				)}
			</div>

			<div>
				<label htmlFor="coins" className="block text-sm font-medium text-white">
					Coins
				</label>
				<input
					id="coins"
					type="number"
					{...register("coins")}
					className="mt-1 text-black block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				/>
				{errors.coins && typeof errors.coins.message === "number" && (
					<p className="mt-2 text-sm text-red-600">{errors.coins.message}</p>
				)}
			</div>

			<button
				type="submit"
				className="bg-emerald-500 w-32 h-10 font-semibold text-white rounded hover:bg-emerald-600"
			>
				Doar
			</button>
		</form>
	);
}
