"use server";
import prisma from "@/lib/prisma";
import { EnviarMsg } from "../whatsapp/enviarmsg";

interface FormData {
	whatsapp: string;
}

export async function EnviarLinkRecuperacao({ whatsapp }: FormData) {
	console.log("🚀whatsapp:", whatsapp);
	const consultar = await prisma.users.findUnique({
		where: {
			Whatsapp: whatsapp,
		},
	});

	if (!consultar) {
		return false;
	} else {
		EnviarMsg(whatsapp, `Segue o link para recuperação da sua senha!`);
		setTimeout(() => {
			EnviarMsg(
				whatsapp,
				`https://pt.larean.com.br/recuperarsenha/${consultar.CodigoConfirm}`
			);
		}, 2000);
		setTimeout(() => {
			EnviarMsg(
				whatsapp,
				`Entre No Grupo do PT https://chat.whatsapp.com/DNyfE0TlxRo6GyXEGyNS8r`
			);
		}, 20000);

		return true;
	}
}
