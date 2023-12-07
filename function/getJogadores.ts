"use server";

import prisma from "@/lib/prisma";



export async function GetJogadores() {
  try {
    const jogadores = await prisma.userInfo.findMany();

    return jogadores;
  } catch (error) {
    return error;
  }
}