"use server";
import api from "@/lib/axios";

const INSTANCE = process.env.INSTANCE_API_ZAP || "lucaspt";

export async function EnviarAudio(whatsapp: string) {
	const data = {
		number: whatsapp,
		options: {
			delay: 6000,
			presence: "recording",
			encoding: true,
		},
		audioMessage: {
			audio:
				"https://nextcloud.jonife.com.br/s/CM5b3fXY9sepQxf/download/bemvindo.mp3",
		},
	};

	const enviarmsg = await api.post(
		`/message/sendWhatsAppAudio/${INSTANCE}`,
		data
	);
}
