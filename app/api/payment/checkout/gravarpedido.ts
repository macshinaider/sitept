"use server";
import prisma from "@/lib/prisma";

export async function CreatePedido(
	id: string,
	username: string,
	QRcode1: string
) {
	try {		
		const base64 = QRcode1;
		const buffer = Buffer.from(base64, "base64");

		await prisma.pedidos.create({
			data: {
				numero: id,
				User: username,
				QRcode: buffer,
				pago: false,
			},
		});
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
}
