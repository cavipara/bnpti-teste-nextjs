/**
 * @api {get} /api/users Read list
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que retorne uma lista de usuários
 * - A request deve receber apenas o método GET
 * - A lista deve conter pelo menos 2 usuários
 * - Cada usuário deve ter um id, nome e email
 * - Utilize a interface IUser para tipar os dados
 */

import { NextApiRequest, NextApiResponse } from "next/types";

import { IUser } from "@/types/user.d";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const users: IUser[] = [
    {
      id: 1,
      name: "João Silva",
      email: "joao.silva@exemplo.com",
    },
    {
      id: 2,
      name: "Maria Santos",
      email: "maria.santos@exemplo.com",
    },
    {
      id: 3,
      name: "Antônio Oliveira",
      email: "antonio.oliveira@exemplo.com",
    },
    {
      id: 4,
      name: "Francisca Pereira",
      email: "francisca.pereira@exemplo.com",
    },
    {
      id: 5,
      name: "Paulo Costa",
      email: "paulo.costa@exemplo.com",
    },
    {
      id: 6,
      name: "Ana Souza",
      email: "ana.souza@exemplo.com",
    },
    {
      id: 7,
      name: "José Rodrigues",
      email: "jose.rodrigues@exemplo.com",
    },
    {
      id: 8,
      name: "Francisco Lima",
      email: "francisco.lima@exemplo.com",
    },
    {
      id: 9,
      name: "Carlos Ferreira",
      email: "carlos.ferreira@exemplo.com",
    },
    {
      id: 10,
      name: "Adriana Ribeiro",
      email: "adriana.ribeiro@exemplo.com",
    },
  ];

  return res.status(200).json(users);
};
