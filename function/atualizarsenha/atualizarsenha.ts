"use server";
import prisma from "@/lib/prisma";
import { EnviarMsg } from "../whatsapp/enviarmsg";

interface FormData {
	novasenha: string;
	confirmarsenha: string;
	codigoconfirm: string;
}

export async function UpdateSenha(dados: FormData) {
	const consultar = await prisma.users.findFirst({
		where: {
			CodigoConfirm: dados.codigoconfirm,
		},
	});
	if (!consultar) {
		return false;
	} else {
		const update = await prisma.users.update({
			where: {
				ID: consultar.ID,
			},
			data: {
				Password: dados.confirmarsenha,
			},
		});
		await EnviarMsg(
			consultar.Whatsapp,
			`Sua senha foi trocada com sucesso: ${dados.novasenha}`
		);
		return true;
	}
}
