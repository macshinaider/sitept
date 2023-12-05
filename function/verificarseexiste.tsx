"use server"
import prisma from "@/lib/prisma";
import { Cadastro } from "./cadastro";

export async function VerificarUserExistente(username: string) {
  const verificar = await prisma.users.findUnique({
    where: {
      Username: username,
    },
  });

  if (!verificar) {
    return false;
  }
  return true;
}
