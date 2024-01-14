"use server";

import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const id = searchParams.get("username");
	const validar = await prisma.users.findUnique({
		where: {
			Username: String(id),
		},
	});

	if (!validar) {
		return new NextResponse(JSON.stringify({ success: false }), {
			status: 404, // ou outro código de status apropriado
			headers: { "Content-Type": "application/json" },
		});
	}

	return new NextResponse(JSON.stringify({ success: true }), {
		headers: { "Content-Type": "application/json" },
		status: 200,
	});
}
