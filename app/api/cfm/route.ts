import { Consultar } from "@/function/consultarcodigo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const id = searchParams.get("id");
	const validar = await Consultar(String(id));
	if (!validar) {
		return NextResponse.json( false );
	}

	return NextResponse.json(true);
}
