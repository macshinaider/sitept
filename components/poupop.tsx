"use client";
import { Cadastro } from "@/function/cadastro";
import { VerificarUserExistente } from "@/function/verificarseexiste";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";


interface IUrecev {
  setIspoupop: any;
}

export default function Modal({setIspoupop}: IUrecev) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [sucess, setSucess] = useState("");

  async function Submit(e: { preventDefault: () => void }) {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    const verificar = await VerificarUserExistente(username);
    if (!verificar) {
      Cadastro(username, password);
      setSucess("Conta Criada Com Sucesso!!!");
      setTimeout(()=> {
        setIspoupop(false)
      }, 2000)


    } else {
      setSucess("Essa Conta já existe em Nosso Cadastro!!!");
    }
  }

  function Close() {
    setIspoupop(false);
  }

  return (
    <div className="fixed bg-cyan-600 w-[30%] h-auto gap-4 p-10 shadow-xl shadow-cyan-400 rounded-md">
      <div className="flex justify-end">
        <button onClick={Close}>
          <IoIosClose size={34} />
        </button>
      </div>
      <h1 className="h-10">Criar Conta</h1>
      <div className="flex flex-col justify-center items-center gap-2 ">
        <input
          type="text"
          placeholder="Username"
          className="flex w-44 rounded-sm"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className="flex w-44 rounded-sm"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex flex-col justify-center text-center items-center bg-green-500 rounded-lg hover:bg-green-950">
          <button type="submit" onClick={Submit} className="m-4">
            <p className="text-white hover:text-purple-600 ">Criar conta</p>
          </button>
        </div>
        {sucess && <h1>{sucess}</h1>}
      </div>
    </div>
  );
}
