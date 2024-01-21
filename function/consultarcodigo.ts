import prisma from "@/lib/prisma";

export async function Consultar(id: string) {
	const consultar = await prisma.users.findFirst({
		where: {
			CodigoConfirm: id,
		},
	});
	
	if (!consultar) {
		return false;
	}
	const update = await prisma.users.update({
		where: {
			ID: consultar.ID,
		},
		data: {
			Confirmed: true,
		},
	});
	if (!update) {
		return false;
	}
	const darpremio = await prisma.users.update({
		where: {
			ID: consultar.ID,
		},
		data: {
			UserCoin: 1000,
		},
	});
	if (!darpremio) {
		return false;
	}

	return { consultar, update, darpremio };
}
