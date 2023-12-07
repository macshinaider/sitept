
import prisma from "@/lib/prisma";

const RankingsXp = async () => {
  // Obter dados do Prisma
  const dados = await prisma.userInfo.findMany();

  // Ordenar por nível (Lvl) em ordem decrescente e, em caso de empate, por experiência (Exp) em ordem decrescente
  const dadosOrdenados = dados.sort((a, b) => {
    if (b.Lvl !== a.Lvl) {
      return b.Lvl - a.Lvl;
    }
    return b.Exp - a.Exp;
  });

  // Pegar apenas os 5 primeiros jogadores
  const cincoPrimeirosJogadores = dadosOrdenados.slice(0, 5);

  console.log("🚀cinco primeiros jogadores:", cincoPrimeirosJogadores);

  return (
    <div className="max-w-screen-md mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Rankings de Experiência</h1>
      <ul className="list-none p-0">
        {cincoPrimeirosJogadores.map((jogador) => (
          <li key={jogador.ID} className="border rounded p-4 mb-4">
            <p className="mb-2">Nome: {jogador.Name}</p>
            <p className="mb-2">Nível: {jogador.Lvl}</p>
            <p>Experiência: {jogador.Exp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RankingsXp;
