"use server";

import prisma from "@/lib/prisma";

export async function VerificarWhatsapp(number: any) {
	try {
		const verificar = await prisma.users.findUnique({
			where: {
				Whatsapp: number,
			},
		});
		if (!verificar) {
			return true;
		}

		return false;
	} catch (error) {
		console.log(error);
		return false;
	}
}
