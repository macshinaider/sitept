"use client";

import { useEffect, useState } from "react";
import { getapi } from "./getapi";
import { useRouter } from "next/navigation";

const Confirmar = ({ params }: { params: { id: string } }) => {
	const [sucess, setSucess] = useState<boolean>(false);
	const routes = useRouter()

	const id = params.id;

	useEffect(() => {
		const verificar = async () => {
			const consultar = await getapi.get(`/cfm?id=${id}`);			
			setSucess(consultar.data);
			setTimeout(() => {
				routes.push("/");
			}, 5000);
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
