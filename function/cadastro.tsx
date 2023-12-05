"use server";
import prisma from "@/lib/prisma";

export async function Cadastro(username: string, password: string)  {
  const cadastrar = await prisma.users.create({
    data: {
      Username: username,
      Password: password,
      Blocked: 0,
      UserCoin: 10000,
      UserTime: 0,
    },
  });
}
