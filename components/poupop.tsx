"use client";
import { Cadastro } from "@/function/cadastro";
import { VerificarUserExistente } from "@/function/verificarseexiste";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";

interface IUrecev {
  setIspoupop: any;
}

export default function Modal({ setIspoupop }: IUrecev) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("")
  const [errorMessage, setErrorMessage] = useState("");
  const [sucess, setSucess] = useState("");

  async function Submit(e: { preventDefault: () => void }) {
    e.preventDefault();   
    const verificar = await VerificarUserExistente(username);
    if (!verificar) {
      Cadastro(username, password, email, whatsapp);
      setSucess("Conta Criada Com Sucesso!!!");
      setTimeout(() => {
        setIspoupop(false);
      }, 2000);
    } else {
      setSucess("Essa Conta já existe em Nosso Cadastro!!!");
    }
  }

  function Close() {
    setIspoupop(false);
  }

  return (
    <div className="fixed bg-cyan-600 w-2/5 h-auto p-10 shadow-xl shadow-cyan-400 rounded-md">
  <div className="flex justify-end mb-4">
    <button onClick={Close} className="p-2">
      <IoIosClose size={24} />
    </button>
  </div>
  <h1 className="text-2xl font-bold mb-4">Criar Conta</h1>
  <div className="flex flex-col gap-2">
    <label htmlFor="username" className="sr-only">
      Username
    </label>
    <div className="flex items-center gap-4 justify-center">
      <span className="material-icons-outlined">Usuario</span>
      <input
        id="username"
        type="text"
        placeholder="Seu Nome de Usuário"
        className="input-field"
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>

    <label htmlFor="password" className="sr-only">
      Senha
    </label>
    <div className="flex items-center gap-4 justify-center">
      <span className="material-icons-outlined">Password</span>
      <input
        id="password"
        type="password"
        placeholder="Senha"
        className="input-field"
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>

    <label htmlFor="email" className="sr-only">
      Email
    </label>
    <div className="flex items-center gap-4 justify-center">
      <span className="material-icons-outlined">E-mail</span>
      <input
        id="email"
        type="email"
        placeholder="Seu Email"
        className="input-field"
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>

    <p className="text-black italic text-sm">Exemplo: 5511942042224</p>
    <label htmlFor="whatsapp" className="sr-only">
      Whatsapp
    </label>
    <div className="flex items-center gap-4 justify-center">
      <span className="material-icons-outlined">Whatsapp</span>
      <input
        id="whatsapp"
        type="tel"
        placeholder="Seu Whatsapp"
        className="input-field"
        onChange={(e) => setWhatsapp(e.target.value)}
      />
    </div>

    <div className="flex flex-col items-center">
      <button type="submit" onClick={Submit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Criar Conta
      </button>
    </div>
    {sucess && <h1>{sucess}</h1>}
  </div>
</div>
  );
}
