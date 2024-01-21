"use server"


import asaas from "@/lib/asaas";

export async function getQrcode(id: string) {
	const get = await asaas.get(`/v3/payments/${id}/pixQrCode`);
	return get.data.encodedImage;
}
