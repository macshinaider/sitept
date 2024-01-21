import api from "@/lib/axios";

const INSTANCE = process.env.INSTANCE_API_ZAP || "lucaspt";

export async function VerificarNumber(valor: any) {
	try {
		const data = {
			numbers: [valor],
		};
		const verificar = await api.post(`/chat/whatsappNumbers/${INSTANCE}`, data);
		const res = verificar.data;
		if (res[0].exists === true) {
			return true;
		}

		return false;
	} catch (error) {
		console.log(error);
		return false;
	}
}
