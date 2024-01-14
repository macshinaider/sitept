"use client";

import { useEffect, useState } from "react";
import { getapi } from "./getapi";



const Confirmar = ({ params }: { params: { id: string } }) => {
	const [sucess, setSucess] = useState<boolean>(false);
	console.log("🚀 sucess:", sucess);

	const id = params.id;

	useEffect(() => {
		const verificar = async () => {
			const consultar = await getapi.get(`/cfm?id=${id}`);
			setSucess(consultar.data);
		};

		verificar();
	}, [params.id, sucess]);

	if (!sucess) {
		return <h1>Carregando...</h1>;
	}

	if (sucess) {
		return <h1>Conta Confirmada Com Sucesso!</h1>;
	}
};

export default Confirmar;
