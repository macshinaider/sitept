"use server";
import asaas from "@/lib/asaas";
import api from "@/lib/axios";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

const sitefront = process.env.NEXT_PUBLIC_API_URL;

const INSTANCE = process.env.INSTANCE_API_ZAP || "lucaspt";

async function generateNumericHash(password: string) {
	const saltRounds = 10; // Ajuste o número de saltos conforme necessário

	// Gere o hash usando bcrypt
	const hash = await bcrypt.hash(password, saltRounds);

	// Remova caracteres não numéricos do hash
	const numericHash = hash.replace(/\D/g, "");

	return numericHash;
}

export interface createCadastroData {
	username: string;
	password: string;
	email: string;
	whatsapp: string;
	cpf: string;
	nome: string;
	cep: string;
}

export async function Cadastro(data: createCadastroData) {
	console.log("🚀 ~ file: cadastro.ts:28 ~ Cadastro ~ data:", data);
	const cadastrar = await prisma.users.create({
		data: {
			Username: data.username,
			Password: data.password,
			Blocked: 0,
			UserCoin: 0,
			UserTime: 0,
			Confirmed: false,
			Whatsapp: data.whatsapp,
			Nome: data.nome,
			Cpf: data.cpf,
			Cep: data.cep,
		},
	});
	if (cadastrar) {
		const enviaruser = {
			name: data.nome,
			cpfCnpj: data.cpf,
			email: data.email,
			phone: data.whatsapp,
			mobilePhone: data.whatsapp,
			postalCode: data.cep,
		};
		const cliente = await asaas.post("v3/customers", enviaruser);
		if (cliente.status === 200) {
			const cadastraridusersql = await prisma.users.update({
				where: {
					ID: cadastrar.ID,
				},
				data: {
					Iduserasaas: cliente.data.id,
				},
			});
		}
	}

	if (!cadastrar) {
		return false;
	}

	const dadosconfirmed = await generateNumericHash(data.whatsapp);
	const cadastrarkey = await prisma.users.update({
		where: {
			ID: cadastrar.ID,
		},
		data: {
			CodigoConfirm: dadosconfirmed,
		},
	});
	const datau = {
		number: cadastrar.Whatsapp,
		options: {
			delay: 1200,
			presence: "composing",
			linkPreview: true,
		},
		textMessage: {
			text: `Para você Ganhar os 1000 Coins você precisa confirmar seu cadastro nesse Link Abaixo! \n\n Larean Priston Tale`,
		},
	};
	const confirmed = await api.post(`/message/sendText/${INSTANCE}`, datau);

	const data1 = {
		number: cadastrar.Whatsapp,
		options: {
			delay: 4200,
			presence: "composing",
			linkPreview: true,
		},
		textMessage: {
			text: `${sitefront}/confirmar/${dadosconfirmed}`,
		},
	};
	const confirmed1 = await api.post(`/message/sendText/${INSTANCE}`, data1);
}
