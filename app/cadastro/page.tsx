"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Cadastro, createCadastroData } from "@/function/cadastro";
import { VerificarUserExistente } from "@/function/verificarseexiste";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const createUserFormSchema = z.object({
	username: z.string().min(6, "Seu usuario tem muito pouco Caracteres!"),
	password: z.string().min(6, "Senha muito curta!"),
	email: z.string().email("Formato de Email errado!"),
	whatsapp: z.string(),
});


type CreateUserFormData = z.infer<typeof createUserFormSchema>;

const ModalCadastro = () => {
	const router = useRouter();
	const [output, setOutput] = useState("");
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(createUserFormSchema),
	});

	async function createUser(data: any) {
		const verificar = await VerificarUserExistente(data.username);
		console.log("🚀 ~ file: page.tsx:30 ~ createUser ~ verificar:", verificar);

		if (!verificar) {
			Cadastro(data);
			toast.success("Usuário cadastrado com sucesso!");
			router.push("/");
		} else {
			toast.error("Usuário já existe. Escolha outro nome de usuário.");
		}
	}

	return (
		<main className=" h-screen flex-col gap-4 bg-zinc-950 text-zinc-300 flex items-center justify-center">
			<form
				onSubmit={handleSubmit(createUser)} // high-order function
				className="flex flex-col gap-4 w-full max-w-xs"
			>
				<div className="flex flex-col gap-1">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
						{...register("username", { required: true })}
					/>
					{/* @ts-ignore */}
					{errors.username && <span>{errors.username.message}</span>}
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="password">password</label>
					<input
						type="Password"
						className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
						{...register("password", { required: true })}
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="email">E-mail</label>
					<input
						type="email"
						className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
						{...register("email", { required: true })}
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="whatsapp">Whatsapp</label>
					<input
						type="text"
						className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
						{...register("whatsapp", { required: true })}
					/>
				</div>

				<button
					type="submit"
					className="bg-emerald-500 font-semibold text-white rounded h-10 hover:bg-emerald-600"
				>
					Criar Conta
				</button>
			</form>
			<pre>{output}</pre>
		</main>
	);
};

export default ModalCadastro;
