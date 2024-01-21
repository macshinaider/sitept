"use client";
import InputMask from "react-input-mask";
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
	nome: z.string().min(6, "Nome tem muito curto"),
	cpf: z.string().min(6, "cpf invalido"),
	password: z.string().min(4, "Senha muito curta!"),
	email: z.string().email("Formato de Email errado!"),
	whatsapp: z.string().min(13, "Precisar ser um numero correto!"),
	cep: z.string().min(6, "Faltante o Cep"),
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
		console.log(data);
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
		<main className="flex flex-col gap-4 bg-zinc-950 text-zinc-300 items-center justify-center p-4">
			<form
				onSubmit={handleSubmit(createUser)} // high-order function
				className="flex flex-col gap-4 w-full max-w-xs"
			>
				<div className="flex flex-col gap-1">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						placeholder="zedaloira"
						className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
						{...register("username", { required: true })}
					/>
					{/* @ts-ignore */}
					{errors.username && <span>{errors.username.message}</span>}
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="nome">Nome</label>
					<input
						type="text"
						placeholder="Lucas Santana"
						className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
						{...register("nome", { required: true })}
					/>
					{/* @ts-ignore */}
					{errors.nome && <span>{errors.nome.message}</span>}
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="cpf">CPF</label>
					<InputMask
						mask="999.999.999-99"
						placeholder="Exemplo: 999.999.999-99"
						type="text"
						className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
						{...register("cpf", { required: true })}
					/>
					{/* @ts-ignore */}
					{errors.cpf && <span>{errors.cpf.message}</span>}
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="password">Password</label>
					<input
						type="Password"
						className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
						{...register("password", { required: true })}
					/>
					{/* @ts-ignore */}
					{errors.password && <span>{errors.password.message}</span>}
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="email">E-mail</label>
					<input
						type="email"
						placeholder="lucasadd15@gmail.com"
						className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
						{...register("email", { required: true })}
					/>
					{/* @ts-ignore */}
					{errors.email && <span>{errors.email.message}</span>}
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="whatsapp">Whatsapp</label>
					<InputMask
						mask="9999999999999"
						type="text"
						placeholder="Exemplo 5511942042224"
						className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
						{...register("whatsapp", { required: true })}
					/>
					{/* @ts-ignore */}
					{errors.whatsapp && <span>{errors.whatsapp.message}</span>}
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="whatsapp">CEP</label>
					<InputMask
						mask="99999-999"
						type="text"
						placeholder="Exemplo 08720-005"
						className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
						{...register("cep", { required: true })}
					/>
					{/* @ts-ignore */}
					{errors.whatsapp && <span>{errors.whatsapp.message}</span>}
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
