"use server";

import asaas from "@/lib/asaas";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { Payment } from "./types";
import { getQrcode } from "./getqrcode";
import { CreatePedido } from "./gravarpedido";

export async function POST(request: NextRequest) {
	const data = await request.json();

	try {
		const perfil = await prisma.users.findUnique({
			where: {
				Username: data.username,
			},
		});
		if (perfil) {
			const dataatual = new Date();
			dataatual.setDate(dataatual.getDate() + 1);
			const ano = dataatual.getFullYear();
			const mes = String(dataatual.getMonth() + 1).padStart(2, "0");
			const dia = String(dataatual.getDate()).padStart(2, "0");

			const dataFormatada = `${ano}-${mes}-${dia}`;

			const dataasaas = {
				billingType: "PIX",
				customer: perfil.Iduserasaas,
				value: data.valor,
				dueDate: dataFormatada,
			};

			const createpay = await asaas.post("/v3/payments", dataasaas);
			const pedido = createpay.data;
			

			return new NextResponse(JSON.stringify(pedido), {
				headers: { "Content-Type": "application/json" },
				status: 200,
			});
		}
	} catch (error) {
		return new NextResponse(JSON.stringify({ success: false }), {
			headers: { "Content-Type": "application/json" },
			status: 500,
		});
	}
}
