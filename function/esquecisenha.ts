import prisma from "@/lib/prisma";
import { EnviarMsg } from "./whatsapp/enviarmsg";

async function Recuperarsenha(data: any) {
	const dados = data.whatsapp;

	try {
		const result = await prisma.users.findUnique({
			where: {
				Whatsapp: dados,
			},
		});
		if (!result) {
			return false;
		} else {
			const msg = `Para recuperar sua senha clique no link que te enviei abaixo`;
			const msg1 = `https://pt.larean.com.br/api/`;
			EnviarMsg(dados, msg);
		}
	} catch (error) {
		return false;
	}
}
