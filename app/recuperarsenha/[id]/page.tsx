"use client";
import { UpdateSenha } from "@/function/atualizarsenha/atualizarsenha";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { useRouter } from "next/navigation";

const Schema = z
	.object({
		novasenha: z.string().min(6, "Sua senha tem muito pouco caracteres"),
		confirmarsenha: z.string(),
	})
	.refine((data) => data.novasenha === data.confirmarsenha, {
		message: "As senhas não coincidem",
	});

const RecuperarSenha = ({ params }: { params: { id: string } }) => {
	const router = useRouter();
	const codigoconfirm = params.id;
	console.log("🚀CodigoConfirm:", codigoconfirm);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(Schema),
	});

	type CreateUserFormData = z.infer<typeof Schema>;

	function createSubmit(data: any) {
		
		UpdateSenha(data).then((res) => {
			if (res) {
				toast.success("Senha Alterada com sucesso!");
				router.push("/");
			}
		});
	}

	return (
		<main className="h-screen flex-col gap-4 bg-zinc-950 text-zinc-300 flex items-center justify-center">
			<form
				onSubmit={handleSubmit(createSubmit)}
				className="flex flex-col gap-4 w-full max-w-xs"
			>
				<label>Nova Senha</label>
				<input
					type="password"
					className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
					{...register("novasenha", { required: true })}
				/>
				<label>Confirmar Senha</label>
				<input
					type="password"
					className="border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white"
					{...register("confirmarsenha", { required: true })}
				/>

				<button
					type="submit"
					className="bg-emerald-500 hover:bg-emerald-600 rounded p-2 font-semibold h-10"
				>
					Recuperar Senha
				</button>
			</form>
		</main>
	);
};

export default RecuperarSenha;
