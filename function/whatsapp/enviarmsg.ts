"use server"
import api from "@/lib/axios";

const INSTANCE = process.env.INSTANCE_API_ZAP || "lucaspt"

export async function EnviarMsg(whatsapp: string, message: string) {
	const data = {
		number: whatsapp,
		options: {
			delay: 4000,
			presence: "composing",
			linkPreview: false,
		},
		textMessage: {
			text: message,
		},
	};

	const enviarmsg = await api.post(`/message/sendText/${INSTANCE}`, data);
}
