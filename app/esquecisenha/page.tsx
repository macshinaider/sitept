"use client";

import { EnviarLinkRecuperacao } from "@/function/atualizarsenha/enviarlinkrecuperacao";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

const Schema = z.object({
	whatsapp: z.string(),
});

type CreateUserFormData = z.infer<typeof Schema>;

const EsqueciSenha = () => {
	const router = useRouter();

	async function createEsqueci(data: any) {
		EnviarLinkRecuperacao(data).then(async (res) => {
			if (!res) {
				toast.error("Não achei esse numero em nosso sistema!");
				setTimeout(() => {
					toast.error("Por favor tente Novamente com um numero valido!");
				}, 5000);
			} else {
				toast.success(
					"Foi enviado um Link para alteração de senha lá no seu Whatsapp!"
				);
				router.push("/");
			}
		});
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(Schema),
	});
	return (
		<main className="h-screen flex-col gap-4 bg-zinc-950 text-zinc-300 flex items-center justify-center">
			<form
				onSubmit={handleSubmit(createEsqueci)}
				className="flex flex-col gap-4 w-full max-w-xs"
			>
				<label htmlFor="whatsapp">Qual Whatsapp?</label>
				<input
					type="text"
					placeholder="exemplo '5511942042224'"
					className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
					{...register("whatsapp", { required: true })}
				/>

				<button
					type="submit"
					className="bg-emerald-500 hover:bg-emerald-600 rounded p-2 font-semibold h-10"
				>
					Recuperar
				</button>
			</form>
		</main>
	);
};

export default EsqueciSenha;
